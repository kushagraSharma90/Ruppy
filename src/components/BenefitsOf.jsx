import { Shield, CheckCircle, Users, Zap, Eye, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Get the Best Offer with Multi Lender Tie up",
      icon: Shield,
      bgColor: "bg-[#3870A6]",
    },
    {
      title: "Instant Eligibility Check & Pre-approved loan",
      icon: CheckCircle,
      bgColor: "bg-[#D47734]",
    },
    {
      title: "Better Loan Approvals with Smart Lender Matching",
      icon: Users,
      bgColor: "bg-[#3870A6]",
    },
    {
      title: "Fast, Paperless, Hassle Free",
      icon: Zap,
      bgColor: "bg-[#D47734]",
    },
    {
      title: "Zero Hidden Charges, Fully Transparency",
      icon: Eye,
      bgColor: "bg-[#3870A6]",
    },
    {
      title: "End to End Loan  Assistance & Transparency",
      icon: FileText,
      bgColor: "bg-[#D47734]",
    },
  ];

  return (
    <div className="w-full bg-[#f5f5ec] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Reduced size */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            AI-driven lending for your needs
          </h1>
        </div>

        {/* Animated Benefit Cards - Reduced size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${benefit.bgColor} rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center justify-center min-h-[160px] text-center`}
              >
                <div className="mb-3 p-2 bg-white/20 rounded-full">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold text-xs leading-tight">
                  {benefit.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}