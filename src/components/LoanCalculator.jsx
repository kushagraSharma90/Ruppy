

// import React, { useState, useEffect } from "react"
// // import { Slider } from "../components/ui/slider"
// // import { Input } from "../components/ui/input"
// // import { Label } from "../components/ui/label"

// export default function LoanCalculator() {
//   const [loanAmount, setLoanAmount] = useState(500000)
//   const [tenure, setTenure] = useState(36)
//   const [interestRate, setInterestRate] = useState(12)
//   const [emi, setEmi] = useState(0)
//   const [totalInterest, setTotalInterest] = useState(0)

//   useEffect(() => {
//     calculateEMI()
//   }, [loanAmount, tenure, interestRate])

//   const calculateEMI = () => {
//     const principal = loanAmount
//     const monthlyRate = interestRate / 12 / 100
//     const time = tenure

//     const emiValue =
//       (principal * monthlyRate * Math.pow(1 + monthlyRate, time)) /
//       (Math.pow(1 + monthlyRate, time) - 1)
//     const totalPayment = emiValue * time
//     const totalInterestValue = totalPayment - principal

//     setEmi(Math.round(emiValue))
//     setTotalInterest(Math.round(totalInterestValue))
//   }

//   const handleLoanAmountChange = (e) => {
//     const value = e.target.value.replace(/,/g, "")
//     if (!isNaN(Number(value))) {
//       setLoanAmount(Number(value))
//     }
//   }

//   const formatCurrency = (value) => {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 0,
//     }).format(value)
//   }

//   return (
//     <div className="rounded-xl border bg-white p-6 shadow-lg w-full max-w-md">
//       <div className="space-y-4">
//         <h3 className="text-xl font-bold">Loan Calculator</h3>

//         <div className="space-y-2">
//           <Label htmlFor="loan-amount">Loan Amount</Label>
//           <div className="flex items-center border rounded-md">
//             <span className="px-3 text-gray-500">₹</span>
//             <Input
//               id="loan-amount"
//               value={loanAmount.toLocaleString()}
//               onChange={handleLoanAmountChange}
//               className="border-0 focus-visible:ring-0"
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <Label htmlFor="tenure">Tenure (months)</Label>
//             <span className="text-sm font-medium">{tenure} months</span>
//           </div>
//           <Slider
//             id="tenure"
//             min={6}
//             max={60}
//             step={1}
//             value={[tenure]}
//             onValueChange={(value) => setTenure(value[0])}
//           />
//           <div className="flex justify-between text-xs text-gray-500">
//             <span>6 months</span>
//             <span>60 months</span>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <Label htmlFor="interest-rate">Interest Rate (%)</Label>
//             <span className="text-sm font-medium">{interestRate}%</span>
//           </div>
//           <Slider
//             id="interest-rate"
//             min={7}
//             max={24}
//             step={0.5}
//             value={[interestRate]}
//             onValueChange={(value) => setInterestRate(value[0])}
//           />
//           <div className="flex justify-between text-xs text-gray-500">
//             <span>7%</span>
//             <span>24%</span>
//           </div>
//         </div>

//         <div className="rounded-lg bg-gray-50 p-4 space-y-2">
//           <div className="flex justify-between">
//             <span className="text-sm text-gray-500">Monthly EMI:</span>
//             <span className="font-bold">{formatCurrency(emi)}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-sm text-gray-500">Total Interest:</span>
//             <span className="font-bold">{formatCurrency(totalInterest)}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-sm text-gray-500">Total Payment:</span>
//             <span className="font-bold">
//               {formatCurrency(loanAmount + totalInterest)}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
