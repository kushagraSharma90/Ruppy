import { useState, useEffect } from "react";
import { Calculator, DollarSign, Percent, Calendar, IndianRupeeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Calculators = () => {
  const [activeTab, setActiveTab] = useState("emi");
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTerm, setLoanTerm] = useState(36);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  // Calculate EMI
  useEffect(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const numberOfPayments = loanTerm;

    if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
      const x = Math.pow(1 + monthlyRate, numberOfPayments);
      const monthlyPayment = (principal * monthlyRate * x) / (x - 1);

      setEmi(Math.round(monthlyPayment));
      setTotalPayment(Math.round(monthlyPayment * numberOfPayments));
      setTotalInterest(
        Math.round(monthlyPayment * numberOfPayments - principal)
      );
    } else {
      setEmi(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  }, [loanAmount, interestRate, loanTerm]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div>
      <div className="relative overflow-hidden bg-[#3870A6] text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Loan Calculators{" "}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              <h1>
                {" "}
                Use our calculators to plan your finances and make informed
                decisions
              </h1>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div>
        {/* Hero Section */}

        {/* Calculators Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Calculator Tabs */}
              <div className="flex flex-wrap border-b border-gray-200 mb-8">
                <button
                  className={`py-3 px-6 font-medium text-lg ${
                    activeTab === "emi"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab("emi")}
                >
                  EMI Calculator
                </button>
                {/* <button
                  className={`py-3 px-6 font-medium text-lg ${
                    activeTab === "eligibility"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab("eligibility")}
                >
                  Eligibility Calculator
                </button>
                <button
                  className={`py-3 px-6 font-medium text-lg ${
                    activeTab === "prepayment"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab("prepayment")}
                >
                  Prepayment Calculator */}
                {/* </button> */}
              </div>

              {/* EMI Calculator */}
              {activeTab === "emi" && (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Calculator className="h-6 w-6 mr-2 text-blue-600" />
                    EMI Calculator
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Calculate your Equated Monthly Installment (EMI) for your
                    loan based on the loan amount, interest rate, and tenure.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      {/* Loan Amount */}
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="loan-amount"
                            className="text-gray-700 font-medium"
                          >
                            Loan Amount
                          </label>
                          <span className="text-blue-600 font-medium">
                            {formatCurrency(loanAmount)}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <IndianRupeeIcon className="h-5 w-5 text-gray-500 mr-2" />
                          <input
                            type="range"
                            id="loan-amount"
                            min="10000"
                            max="10000000"
                            step="10000"
                            value={loanAmount}
                            onChange={(e) =>
                              setLoanAmount(Number(e.target.value))
                            }
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>₹10,000</span>
                          <span>₹1,00,00,000</span>
                        </div>
                      </div>

                      {/* Interest Rate */}
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="interest-rate"
                            className="text-gray-700 font-medium"
                          >
                            Interest Rate (% per annum)
                          </label>
                          <span className="text-blue-600 font-medium">
                            {interestRate}%
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Percent className="h-5 w-5 text-gray-500 mr-2" />
                          <input
                            type="range"
                            id="interest-rate"
                            min="5"
                            max="25"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) =>
                              setInterestRate(Number(e.target.value))
                            }
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>1%</span>
                          <span>35%</span>
                        </div>
                      </div>

                      {/* Loan Term */}
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="loan-term"
                            className="text-gray-700 font-medium"
                          >
                            Loan Term (months)
                          </label>
                          <span className="text-blue-600 font-medium">
                            {loanTerm} months
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                          <input
                            type="range"
                            id="loan-term"
                            min="12"
                            max="120"
                            step="1"
                            value={loanTerm}
                            onChange={(e) =>
                              setLoanTerm(Number(e.target.value))
                            }
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>12 months</span>
                          <span>120 months</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-center mb-6">
                        <h3 className="text-gray-700 font-medium mb-2">
                          Your Monthly EMI
                        </h3>
                        <p className="text-3xl font-bold text-blue-600">
                          {formatCurrency(emi)}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-700">
                            Principal Amount
                          </span>
                          <span className="font-medium">
                            {formatCurrency(loanAmount)}
                          </span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-200">
                          <span className="text-gray-700">Total Interest</span>
                          <span className="font-medium">
                            {formatCurrency(totalInterest)}
                          </span>
                        </div>
                        <div className="flex justify-between py-3">
                          <span className="text-gray-700 font-medium">
                            Total Amount Payable
                          </span>
                          <span className="font-bold">
                            {formatCurrency(totalPayment)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Eligibility Calculator */}
              {activeTab === "eligibility" && (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Calculator className="h-6 w-6 mr-2 text-blue-600" />
                    Eligibility Calculator
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Find out how much loan amount you are eligible for based on
                    your income and existing obligations.
                  </p>

                  <form className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-6">
                        <label
                          htmlFor="monthly-income"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Monthly Income (₹)
                        </label>
                        <input
                          type="number"
                          id="monthly-income"
                          placeholder="Enter your monthly income"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="existing-emi"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Existing EMI Obligations (₹)
                        </label>
                        <input
                          type="number"
                          id="existing-emi"
                          placeholder="Enter your existing EMI amount"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="loan-type"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Loan Type
                        </label>
                        <select
                          id="loan-type"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Loan Type</option>
                          <option value="personal">Personal Loan</option>
                          <option value="used-car">Used Car Loan</option>
                          <option value="new-car">New Car Loan</option>
                          <option value="against-car">Loan Against Car</option>
                        </select>
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="loan-tenure"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Loan Tenure (months)
                        </label>
                        <select
                          id="loan-tenure"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Tenure</option>
                          <option value="12">12 months</option>
                          <option value="24">24 months</option>
                          <option value="36">36 months</option>
                          <option value="48">48 months</option>
                          <option value="60">60 months</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
                      >
                        Calculate Eligibility
                      </button>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center">
                      <div className="text-center">
                        <p className="text-gray-600 mb-2">
                          Your Estimated Loan Eligibility
                        </p>
                        <h3 className="text-3xl font-bold text-blue-600 mb-4"></h3>
                        <p className="text-sm text-gray-500">
                          Fill in your details and click "Calculate Eligibility"
                          to see your estimated loan amount.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* Prepayment Calculator */}
              {activeTab === "prepayment" && (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Calculator className="h-6 w-6 mr-2 text-blue-600" />
                    Prepayment Calculator
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Calculate how much you can save by making prepayments on
                    your loan.
                  </p>

                  <form className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-6">
                        <label
                          htmlFor="loan-amount-prepay"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Loan Amount (₹)
                        </label>
                        <input
                          type="number"
                          id="loan-amount-prepay"
                          placeholder="Enter your loan amount"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="interest-rate-prepay"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Interest Rate (% per annum)
                        </label>
                        <input
                          type="number"
                          id="interest-rate-prepay"
                          placeholder="Enter interest rate"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="loan-tenure-prepay"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Loan Tenure (months)
                        </label>
                        <input
                          type="number"
                          id="loan-tenure-prepay"
                          placeholder="Enter loan tenure"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="prepayment-amount"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Prepayment Amount (₹)
                        </label>
                        <input
                          type="number"
                          id="prepayment-amount"
                          placeholder="Enter prepayment amount"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="prepayment-month"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Prepayment After (months)
                        </label>
                        <input
                          type="number"
                          id="prepayment-month"
                          placeholder="Enter month number"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
                      >
                        Calculate Savings
                      </button>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center">
                      <div className="text-center">
                        <p className="text-gray-600 mb-2">
                          Your Estimated Savings
                        </p>
                        <h3 className="text-3xl font-bold text-blue-600 mb-4">
                          ₹0
                        </h3>
                        <p className="text-sm text-gray-500">
                          Fill in your details and click "Calculate Savings" to
                          see how much you can save with prepayment.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about loan calculations and
                eligibility criteria
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    What is EMI?
                  </h3>
                  <p className="text-gray-600">
                    EMI stands for Equated Monthly Installment. It's the fixed
                    amount you pay each month towards your loan, which includes
                    both principal and interest components.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    How is EMI calculated?
                  </h3>
                  <p className="text-gray-600">
                    EMI is calculated using the formula: EMI = [P x R x
                    (1+R)^N]/[(1+R)^N-1], where P is the principal loan amount,
                    R is the monthly interest rate, and N is the loan tenure in
                    months.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    How does prepayment affect my loan?
                  </h3>
                  <p className="text-gray-600">
                    Prepayment reduces your outstanding principal amount, which
                    in turn reduces the interest component of future EMIs. This
                    can either reduce your loan tenure or lower your EMI amount,
                    depending on your preference.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    What factors affect my loan eligibility?
                  </h3>
                  <p className="text-gray-600">
                    Your loan eligibility depends on several factors including
                    your income, existing loan obligations, credit score, age,
                    employment type, and the type of loan you're applying for.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Are there any charges for using these calculators?
                  </h3>
                  <p className="text-gray-600">
                    No, all our calculators are completely free to use. They are
                    provided as a service to help you make informed financial
                    decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16  rounded-3xl text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Apply for a Loan?
            </h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Now that you've calculated your EMI, take the next step towards
              securing your loan
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
              to="/apply"
              className=" text-black hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors duration-300"
              >
              <a
                href="/apply"
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Apply Now
              </a>
              </Link>
              <Link
                to="/ContactUs"
                className=" text-black hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors duration-300"
              >
                <a
                  href="/contact"
                  className="bg-blue-600  text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
                >
                  Talk to an Expert
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Calculators;
