import { Shield, CheckCircle, Users, Zap, Eye, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Best Offers, Many Lenders",
      icon: Shield,
      bgColor: "bg-[#3870A6]",
    },
    {
      title: "Instant Eligibility & Pre-Approval",
      icon: CheckCircle,
      bgColor: "bg-[#D47734]",
    },
    {
      title: "Smart Lender Matching",
      icon: Users,
      bgColor: "bg-[#3870A6]",
    },
    {
      title: "Fast & Paperless",
      icon: Zap,
      bgColor: "bg-[#D47734]",
    },
    {
      title: "No Hidden Charges",
      icon: Eye,
      bgColor: "bg-[#3870A6]",
    },
    {
      title: "Complete Loan Support",
      icon: FileText,
      bgColor: "bg-[#D47734]",
    },
  ];

  return (
    <div className="w-full bg-[#f5f5ec] py-6 md:py-8">
      {/* ✅ New Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          AI-driven lending for your needs
        </h2>
      </div>

      {/* Benefit Cards */}
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="flex justify-center gap-2 md:gap-3 lg:gap-4 overflow-x-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`${benefit.bgColor} rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-3 md:p-4 flex flex-col items-center justify-center text-center w-28 md:w-32 lg:w-36 h-20 md:h-24 lg:h-28 flex-shrink-0`}
              >
                <div className="mb-1 md:mb-2 p-1.5 md:p-2 bg-white/20 rounded-full">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="text-white font-medium text-[10px] md:text-xs lg:text-sm leading-tight px-1">
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
