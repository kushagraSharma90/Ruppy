import { Shield, CheckCircle, Users, Zap, Eye, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Get the Best Offer with Multi Render Tie up",
      icon: Shield,
      bgColor: "bg-[#3870A6]",
    },
    {
      title: "Instant Eligibility Check & Pre-approved loan",
      icon: CheckCircle,
      bgColor: "bg-[#D47734]",
    },
    {
      title: "Higher Approval Chances with Lenders Customer Matching",
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
      title: "End to End Loan & Assistance & Transparency",
      icon: FileText,
      bgColor: "bg-[#D47734]",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#3870A6] via-[#3870A6] to-[#3870A6] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-lg text-gray-200 mb-2 font-medium">
            Revolutionizing Leading With Innovative AI Technology
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            BENEFITS OF{" "}
            <span className="text-[#3870A6] bg-white px-2 rounded">RUPEE</span>{" "}
            <span className="text-[#D47734] bg-white px-2 rounded">DOT</span>
          </h1>
        </div>

        {/* Animated Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${benefit.bgColor} rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center justify-center min-h-[200px] text-center`}
              >
                <div className="mb-4 p-3 bg-white/20 rounded-full">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm leading-tight">
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
