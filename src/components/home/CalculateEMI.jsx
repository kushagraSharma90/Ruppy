import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const SemiDonutChart = ({ totalAmount, interestAmount, emi }) => {
  const radius = 90
  const strokeWidth = 20
  const normalizedRadius = radius - strokeWidth / 2
  const circumference = 2 * Math.PI * normalizedRadius
  const halfCircumference = circumference / 2

  const interestRatio = interestAmount / totalAmount
  const principalRatio = 1 - interestRatio

  const interestStroke = halfCircumference * interestRatio
  const principalStroke = halfCircumference * principalRatio

  return (
    <div className="p-4">
      <svg
        width={radius * 2}
        height={radius + strokeWidth}
        viewBox={`0 0 ${radius * 2} ${radius + strokeWidth}`}
        className="mx-auto"
      >
        {/* Background half arc */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          strokeDasharray={`${halfCircumference} ${circumference}`}
          strokeLinecap="round"
          transform={`rotate(180 ${radius} ${radius})`}
        />

        {/* Principal arc */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="transparent"
          stroke="#3870a6"
          strokeWidth={strokeWidth}
          strokeDasharray={`${principalStroke} ${circumference}`}
          strokeLinecap="round"
          transform={`rotate(180 ${radius} ${radius})`}
        />

        {/* Interest arc */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="transparent"
          stroke="#d47734"
          strokeWidth={strokeWidth}
          strokeDasharray={`${interestStroke} ${circumference}`}
          strokeDashoffset={-principalStroke}
          strokeLinecap="round"
          transform={`rotate(180 ${radius} ${radius})`}
        />

        {/* Labels */}
        <text
          x={radius}
          y={radius - 5}
          textAnchor="middle"
          className="text-sm fill-gray-500 font-medium"
        >
          Per Month EMI
        </text>
        <text
          x={radius}
          y={radius + 20}
          textAnchor="middle"
          className="text-xl font-bold fill-black"
        >
          ₹{emi.toLocaleString("en-IN")}
        </text>
      </svg>
    </div>
  )
}

const EmiCalculator = () => {
  const [loanType, setLoanType] = useState("Personal-Loan")
  const [loanAmount, setLoanAmount] = useState("1000000")
  const [duration, setDuration] = useState("2")
  const [interestRate, setInterestRate] = useState("5")
  const [emi, setEmi] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    const principal = Number(loanAmount) || 0
    const ratePerMonth = (Number(interestRate) || 0) / (12 * 100)
    const timeInMonths = (Number(duration) || 0) * 12

    if (principal > 0 && ratePerMonth > 0 && timeInMonths > 0) {
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
    } else {
      setEmi(0)
      setTotalInterest(0)
      setTotalAmount(0)
    }
  }, [loanAmount, duration, interestRate])

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)

  // helper to handle increments safely
  const handleIncrement = (setter, value, step, max) => {
    const num = Number(value) || 0
    setter(String(Math.min(num + step, max)))
  }

  const handleDecrement = (setter, value, step, min) => {
    const num = Number(value) || 0
    setter(String(Math.max(num - step, min)))
  }

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
            "Personal-Loan",
            "Used-Car-Loan",
            "New-Car-Loan",
            "Loan-Against-Car",
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
              <span className="inline-block w-4 h-4 bg-[#d47734] rounded-full mr-2"></span>
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
                <div className="flex justify-between mb-2 items-center">
                  <label className="font-medium text-gray-700">
                    Loan amount
                  </label>
                  <div className="flex items-center space-x-1">
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() =>
                        handleDecrement(setLoanAmount, loanAmount, 10000, 100000)
                      }
                    >
                      –
                    </button>
                    <input
                      type="text"
                      value={loanAmount}
                      onChange={(e) =>
                        setLoanAmount(e.target.value.replace(/\D/g, ""))
                      }
                      className="w-32 px-2 py-1 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() =>
                        handleIncrement(setLoanAmount, loanAmount, 10000, 10000000)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={10000000}
                  step={10000}
                  value={Number(loanAmount) || 0}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>₹1,00,000</span>
                  <span>₹1 Cr</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <div className="flex justify-between mb-2 items-center">
                  <label className="font-medium text-gray-700">Duration</label>
                  <div className="flex items-center space-x-1">
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() =>
                        handleDecrement(setDuration, duration, 1, 1)
                      }
                    >
                      –
                    </button>
                    <input
                      type="text"
                      value={duration}
                      onChange={(e) =>
                        setDuration(e.target.value.replace(/\D/g, ""))
                      }
                      className="w-20 px-2 py-1 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() =>
                        handleIncrement(setDuration, duration, 1, 10)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={Number(duration) || 0}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1 Year</span>
                  <span>10 Years</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between mb-2 items-center">
                  <label className="font-medium text-gray-700">
                    Interest Rate (P.A)
                  </label>
                  <div className="flex items-center space-x-1">
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() =>
                        handleDecrement(setInterestRate, interestRate, 0.5, 5)
                      }
                    >
                      –
                    </button>
                    <input
                      type="text"
                      value={interestRate}
                      onChange={(e) =>
                        setInterestRate(
                          e.target.value.replace(/[^0-9.]/g, "")
                        )
                      }
                      className="w-20 px-2 py-1 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() =>
                        handleIncrement(setInterestRate, interestRate, 0.5, 35)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <input
                  type="range"
                  min={5}
                  max={35}
                  step={0.1}
                  value={Number(interestRate) || 0}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>5%</span>
                  <span>35%</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between">
              <div className="flex justify-center mb-6">
                <SemiDonutChart
                  totalAmount={totalAmount}
                  interestAmount={totalInterest}
                  emi={emi}
                />
              </div>

              {/* Summary */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 mr-2 rounded-full"
                      style={{ backgroundColor: "#3870a6" }}
                    ></div>
                    <span className="text-gray-700">Principal amount</span>
                  </div>
                  <span className="font-medium">
                    {formatCurrency(Number(loanAmount) || 0)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div
                      className="w-4 h-4 mr-2 rounded-full"
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
                  <span className="font-bold">
                    {formatCurrency(totalAmount)}
                  </span>
                </div>

                <div className="flex justify-center mt-6">
                  <Link
                    to="/calculators"
                    className="bg-[#3870a6] text-white px-4 py-2 rounded-md transition-colors hover:bg-[#2c5a85]"
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
