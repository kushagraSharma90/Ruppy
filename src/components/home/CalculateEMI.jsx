import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const SemiDonutChart = ({ totalAmount, interestAmount, emi }) => {
  const radius = 90
  const strokeWidth = 20
  const normalizedRadius = radius - strokeWidth / 2
  const circumference = Math.PI * normalizedRadius

  const interestRatio = interestAmount / totalAmount
  const principalRatio = 1 - interestRatio

  const interestStroke = circumference * interestRatio
  const principalStroke = circumference * principalRatio

  return (
    <div className="p-4">
      <svg
        width={radius * 2 + 20}
        height={radius + strokeWidth + 20}
        className="mx-auto"
      >
        <g transform={`rotate(-90 ${radius + 10} ${radius + 10})`}>
          <circle
            cx={radius + 10}
            cy={radius + 10}
            r={normalizedRadius}
            fill="transparent"
            stroke="#3870a6"
            strokeWidth={strokeWidth}
            strokeDasharray={`${principalStroke} ${circumference}`}
            strokeLinecap="round"
          />
          <circle
            cx={radius + 10}
            cy={radius + 10}
            r={normalizedRadius}
            fill="transparent"
            stroke="#d47734"
            strokeWidth={strokeWidth}
            strokeDasharray={`${interestStroke} ${circumference}`}
            strokeDashoffset={-principalStroke}
            strokeLinecap="round"
          />
        </g>
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          className="text-sm fill-gray-500"
        >
          Per Month EMI
        </text>
        <text
          x="50%"
          y="80%"
          textAnchor="middle"
          className="text-lg font-bold fill-black"
        >
          ₹{emi.toLocaleString("en-IN")}
        </text>
      </svg>
    </div>
  )
}

const EmiCalculator = () => {
  const [loanType, setLoanType] = useState("used-car-loan")
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [duration, setDuration] = useState(2)
  const [interestRate, setInterestRate] = useState(5)
  const [emi, setEmi] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    const principal = loanAmount
    const ratePerMonth = interestRate / (12 * 100)
    const timeInMonths = duration * 12

    const emiValue =
      (principal *
        ratePerMonth *
        Math.pow(1 + ratePerMonth, timeInMonths)) /
      (Math.pow(1 + ratePerMonth, timeInMonths) - 1)

    const totalPayment = emiValue * timeInMonths
    const interestPayment = totalPayment - principal

    setEmi(Math.round(emiValue))
    setTotalInterest(Math.round(interestPayment))
    setTotalAmount(Math.round(totalPayment))
  }, [loanAmount, duration, interestRate])

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)

  return (
    <section className="w-full py-12 bg-[#f5f5ec]">
      <div className="container mx-auto px-4">
        <h2
          className="text-2xl md:text-3xl font-bold mb-6"
          style={{ color: "#3870a6" }}
        >
          Calculate your EMIs instantly
        </h2>

        {/* Loan Type Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "Used-Car-Loan",
            "Loan-Against-Car",
            "Personal-Loan",
            "New-Car-Loan",
          ].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 text-sm rounded-md border ${
                loanType === type
                  ? "bg-blue-100 border-blue-300 text-blue-800"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
              onClick={() => setLoanType(type)}
            >
              <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
              {type.replace(/-/g, " ")}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Loan amount</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-32 px-2 py-1 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="range"
                  min={100000}
                  max={10000000}
                  step={10000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>₹1,00,000</span>
                  <span>₹1 Cr</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Duration</label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-32 px-2 py-1 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1 Year</span>
                  <span>10 Years</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">
                    Interest Rate (P.A)
                  </label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-32 px-2 py-1 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="range"
                  min={5}
                  max={35}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>%</span>
                  <span>35%</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between">
              {/* SVG Half-Donut Chart */}
              <div className="flex justify-center mb-6">
                <SemiDonutChart
                  totalAmount={totalAmount}
                  interestAmount={totalInterest}
                  emi={emi}
                />
              </div>

              {/* Summary Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 mr-2"
                      style={{ backgroundColor: "#3870a6" }}
                    ></div>
                    <span className="text-gray-700">Principal amount</span>
                  </div>
                  <span className="font-medium">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 mr-2"
                      style={{ backgroundColor: "#d47734" }}
                    ></div>
                    <span className="text-gray-700">Interest</span>
                  </div>
                  <span className="font-medium">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="font-medium text-gray-700">Total</span>
                  <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </div>

                <div className="flex justify-center mt-6">
                  <Link
                    to="/calculators"
                    className="bg-[#3870a6] text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Know more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmiCalculator
