"use client";
import { useParams } from "react-router-dom";
import blog1 from "../../assets/blog1.jpeg";
import blog2 from "../../assets/blog2.jpeg";
import blog3 from "../../assets/blog3.jpeg";
import blog4 from "../../assets/blog4.jpeg";
import blog5 from "../../assets/blog5.jpeg";

const blogData = [
  {
    id: 1,
    title: "Disrupting Auto Finance & Solving Dealer Challenges",
    content: [
      {
        heading: "RupeeDot: A Fintech Disruptor in Auto Finance",
        text: [
          `RupeeDot is not just another fintech company; it's a disruptor in India's auto finance space. Based in Pune and operating under Indicorn Financial Services Pvt. Ltd., it acts as a facilitator between lenders and borrowers—like a dating site for car loans. By partnering with banks, NBFCs, and alternative lenders, RupeeDot presents customers with multiple loan options through a single application.`,
          `The system is fast, efficient, and transparent—saving time and minimizing paperwork, while making auto financing more accessible and trustworthy.`,
        ],
      },
      {
        heading: "Conventional Auto Loans vs. RupeeDot",
        text: [
          `Traditional auto loans in India are often complicated, requiring excessive paperwork, credit checks, and long wait times. The process is frustrating and discouraging, especially when small errors delay approvals.`,
          `RupeeDot revolutionizes this by offering a user-friendly digital platform that streamlines applications and removes many of the conventional hurdles.`,
        ],
      },
      {
        heading: "Speed and Simplicity",
        text: [
          `Unlike banks that may take days to respond, RupeeDot approves loans within hours using automation and AI. Forms are auto-filled, documents verified quickly, and recommendations made using intelligent digital tools.`,
          `With real-time updates and a simple interface, applicants are kept informed at every stage—cutting down stress and wait time.`,
        ],
      },
      {
        heading: "More Than Credit Scores",
        text: [
          `RupeeDot goes beyond credit scores to assess creditworthiness. It includes non-traditional data like mobile payment history and online purchases to form a holistic view of financial behavior.`,
          `This allows individuals with thin or no credit history—like young professionals—to qualify for loans by showcasing responsible money management.`,
        ],
      },
      {
        heading: "One Application, Multiple Lenders",
        text: [
          `With RupeeDot, you don’t need to apply to multiple banks. Their aggregator platform lets you fill out one application, which is then shared with lenders who are most likely to approve it.`,
          `This removes redundant paperwork and ensures you get matched with the right lender quickly and easily.`,
        ],
      },
      {
        heading: "Data-Driven Underwriting",
        text: [
          `RupeeDot uses machine learning to analyze over 1,000 data points—including social media activity and utility bill payments—to assess borrower profiles.`,
          `This helps lenders evaluate risk more accurately and gives borrowers with non-traditional financial backgrounds a fair shot at financing.`,
        ],
      },
    ],
    image: blog1,
  },
  {
    id: 2,
    content: [
      {
        heading: "Market Overview: New vs. Used Car Sales",
        text: [
          "The used car market has overtaken new car sales in volume and is growing nearly twice as fast, signaling a shift in consumer behavior.",
          "In 2024, used car sales are expected to be around 5.4 million units and reach approximately 10.8 million by 2030, with a CAGR of 13%. The market is valued at USD 36 billion in 2024 and projected to grow to USD 101 billion by 2033.",
          "In contrast, new car sales in 2024 are around 4.16 million units with a market size of USD 121.5 billion, projected to reach USD 247.4 billion by 2033 (CAGR of 7.13%).",
        ],
      },
      {
        heading: "Finance Penetration & Challenges",
        text: [
          "New car financing is well established, with a 75% penetration rate in 2024, showing a heavy reliance on credit.",
          "Used car financing remains underpenetrated due to challenges like 71% of purchases through unorganized sellers, lack of standard documentation, and limited credit evaluation.",
          "Financing penetration in used cars has grown from 15% in 2022 to 23% in 2024, and is projected to reach 30% by 2025.",
          "Interest rates for used car loans range from 10–18%, which is higher compared to around 8.5% for new cars.",
        ],
      },
      {
        heading: "Urban vs. Rural Market Dynamics",
        text: [
          "Rural areas are dominated by cash-based transactions and local dealerships, limiting access to formal financing options.",
          "Urban markets are adopting organized dealerships and digital platforms more rapidly, with rising interest in SUVs, luxury used vehicles, and certified pre-owned options.",
        ],
      },
      {
        heading: "Growth Opportunity in Rural India",
        text: [
          "Rural India represents an untapped market where organized players and NBFCs can significantly expand.",
          "Tailored loan products such as flexible EMIs, small-ticket loans, and simplified onboarding processes can better serve rural and first-time buyers.",
        ],
      },
      {
        heading: "Strategic Imperatives for Market Expansion",
        text: [
          "**1. Enlarging Organized Dealership Networks**: Establish certified pre-owned dealerships in Tier 2/3/4 cities and rural regions to boost consumer trust.",
          "**2. Financing Solution Innovations**: Collaborate with NBFCs and fintechs to create rural-friendly financial products including low-ticket loans and flexible EMI options.",
          "**3. Leveraging Digital Platforms**: Implement end-to-end online services—virtual inspections, AI-based pricing, digital KYC, and loan approvals.",
          "**4. Driving Consumer Awareness**: Educate buyers on the benefits of certified vehicles, formal financing options, and responsible ownership practices.",
        ],
      },
      {
        heading: "Conclusion",
        text: [
          "India’s used vehicle market is poised to exceed ₹100 billion by the end of the decade. Addressing financing gaps, expanding organized channels, and using digital solutions will be key to driving financial inclusion and market growth across urban and rural segments.",
        ],
      },
    ],
    image: blog2,
  },
  {
    id: 3,
    title: "What is a Personal Loan?",
    content: [
      {
        heading: "What is a Personal Loan?",
        text: [
          `It is a loan that is not backed by any collateral, intended to fulfill a variety of individual financial requirements. It provides easy access to money, fixed monthly payments, and flexible repayment tenure, making it suitable for working professionals.`,
        ],
      },
      {
        heading: "When Can You Use a Personal Loan?",
        text: [
          `Personal loans may be employed for:`,
          `• Medical emergencies`,
          `• Wedding costs`,
          `• Travel and holidays`,
          `• Renovation of home`,
          `• Consolidating debt`,
          `• Purchasing electronics or gadgets`,
          `• Education or skill enhancement`,
          `Money is generally not limited as long as it's for a legal and personal purpose.`,
        ],
      },
      {
        heading: "Eligibility Criteria",
        text: [
          `• Age: 21 to 60 years`,
          `• Monthly Salary: ₹15,000 and above (according to city and bank)`,
          `• Experience: At least 6–12 months at current company (may vary with lenders)`,
          `• Credit Score: Ideally 700 and above`,
          `• Employment Status: Full-time salaried with a registered firm`,
          `• Residency: Indian resident`,
        ],
      },
      {
        heading: "Features & Benefits",
        text: [
          `• No guarantor or collateral required`,
          `• Fast disbursal—usually within 24 to 48 hours`,
          `• Loan amount: ₹10,000 to ₹25 lakh`,
          `• Repayment period: 12 to 60 months`,
          `• Fixed interest rates (~10.5% p.a. onwards)`,
          `• Transparent charges and less paperwork`,
          `• Pre-approved offers for qualified salaried customers`,
        ],
      },
      {
        heading: "Types of Personal Loans",
        text: [
          `• Medical Loan`,
          `• Wedding Loan`,
          `• Travel Loan`,
          `• Home Improvement Loan`,
          `• Education Loan (Short-term)`,
          `• Purchase Loan for Gadgets/Appliances`,
          `• Debt Consolidation Loan`,
        ],
      },
      {
        heading: "Documentation Required",
        text: [
          `1. Identity Proof (any one – mandatory):`,
          `• PAN Card & Aadhaar Card (compulsory)`,
          `• Passport / Voter ID / Driving License`,
          ``,
          `2. Address Proof (any one):`,
          `• Aadhaar Card / Passport / Utility Bills / Rent Agreement`,
          ``,
          `3. Income Proof:`,
          `• Last 3 to 6 months’ Salary Slips`,
          `• Last 3 to 6 months’ Bank Statements (Salary credited account)`,
          ``,
          `4. Employment Proof:`,
          `• Employee ID Card (optional)`,
          `• Offer/Appointment Letter`,
          `• Form 16 / Latest ITR (for higher loan amounts)`,
          ``,
          `5. Photograph:`,
          `• One or two recent passport-size photos`,
          ``,
          `6. Loan Application Form:`,
          `• Duly filled and signed (physical or digital)`,
        ],
      },
      {
        heading: "Boosters to Increase Loan Approval Probability",
        text: [
          `• Keep your credit score at 700+`,
          `• Don't apply with multiple lenders simultaneously`,
          `• Keep your EMIs within 40–50% of your net salary`,
          `• Provide true income and KYC documents`,
          `• Use employer tie-up benefits if available`,
          `• Set a realistic loan size based on salary`,
        ],
      },
    ],
    image: blog3,
  },
  {
    id: 4,
    title:
      "Key Challenges Faced by Used Car Dealers and How RupeeDot Is Solving Them",
    content: [
      {
        heading: "Overview",
        text: [
          `Indian used car dealers, especially small and mid-sized ones, face hurdles due to inefficient financing. Delayed loan approvals lead to lost sales and customer dissatisfaction. RupeeDot addresses these problems with real-time approvals, AI-based underwriting, soft bureau checks, and pre-approved eligibility screening—transforming a slow, manual process into a swift, customer-friendly one.`,
        ],
      },
      {
        heading: "Challenge 1: Slow Loan Sanctions & Sales Drop-Offs",
        text: [
          `Dealers face excessive delays in loan sanctions, causing lost sales and customer attrition.`,
          `Traditional financiers use outdated methods, leading to slow disbursals.`,
          `Cash flow is impacted by delayed dealer payments.`,
          `Lenders prioritize prime buyers, excluding informal-income customers.`,
        ],
      },
      {
        heading: "RupeeDot’s Solution 1: Instant Sanction & Dealer-Lender Sync",
        text: [
          `• AI-driven underwriting and automated document verification speed up approvals.`,
          `• Dealer access to multiple lenders reduces reliance on a single financier.`,
          `• Pre-approval checks ensure customers are eligible upfront, boosting dealer conversion.`,
        ],
      },
      {
        heading: "Challenge 2: Credit Rejections for Non-Traditional Customers",
        text: [
          `Customers in Tier 2/3 cities often lack strong credit histories, which deters traditional financiers.`,
          `Self-employed and cash-income buyers struggle to secure loans.`,
          `High loan rejection rates lead to lost sales for dealers.`,
        ],
      },
      {
        heading:
          "RupeeDot’s Solution 2: Alternative Credit Models & Wider Lender Access",
        text: [
          `• Proprietary credit scoring uses bank data and income patterns for better approval rates.`,
          `• Access to banks, NBFCs, and fintech lenders for varied borrower profiles.`,
          `• Offers top-up and personal loans to enhance customer purchasing power.`,
        ],
      },
      {
        heading: "Challenge 3: Delayed Dealer Payouts & Inventory Limits",
        text: [
          `Dealers often wait weeks for payouts after a car sale.`,
          `Tight working capital restricts their ability to purchase more inventory.`,
          `Most financiers have rigid payout cycles, straining liquidity.`,
        ],
      },
      {
        heading:
          "RupeeDot’s Solution 3: Fast Disbursals & Working Capital Support",
        text: [
          `• Quick fund disbursement post-loan sanction improves dealer liquidity.`,
          `• Simplified finance processing ensures faster turnaround and more car rotations.`,
        ],
      },
      {
        heading: "Challenge 4: Disorganized Loan Management Across Lenders",
        text: [
          `Managing multiple financiers, applications, and documents is inefficient.`,
          `Lack of centralized tracking for loan status or approvals.`,
          `Smaller dealers lack the technology to manage customer loans effectively.`,
        ],
      },
      {
        heading: "RupeeDot’s Solution 4: Unified Tech Platform for Dealers",
        text: [
          `• Single dashboard to manage, track, and apply for multiple loans.`,
          `• Real-time updates on loan progress and approvals.`,
          `• AI-based matching system recommends the best lender based on customer data.`,
        ],
      },
      {
        heading: "RupeeDot's Dealership Mission",
        text: [
          `To empower auto dealers with fast, reliable, and seamless financing solutions that drive sales, improve cash flow, and maximize loan approvals for all customer segments.`,
        ],
      },
    ],
    image: blog4,
  },
  {
    id: 5,
    title: "What Determines Your Loan Eligibility in India?",
    content: [
      {
        heading: "Introduction",
        text: [
          `Before applying for a loan, it's important to understand how lenders evaluate eligibility. Being aware of these factors can help you prepare better and increase your chances of quick approval.`,
        ],
      },
      {
        heading: "1. Credit Score and Credit History",
        text: [
          `• Your credit history (e.g., CIBIL report) reflects your past handling of loans and credit.`,
          `• A score above 750 is generally considered good and suggests you're a low-risk borrower.`,
          `• Missed payments, loan defaults, or frequent credit inquiries can lower your score.`,
          `Advice: Always pay your EMIs and bills on time to maintain a strong score.`,
        ],
      },
      {
        heading: "2. Income and Employment Stability",
        text: [
          `• Lenders assess your income to ensure you can repay the loan.`,
          `• Salaried individuals must show salary slips and bank statements.`,
          `• Self-employed applicants should provide tax returns and business documentation.`,
          `• A stable job or business improves lender trust.`,
        ],
      },
      {
        heading: "3. Outstanding Loans and Debt",
        text: [
          `• Existing loans and credit card debt impact your ability to take on new debt.`,
          `• Lenders calculate a debt-to-income ratio to assess repayment capacity.`,
          `• A lower ratio means better chances of loan approval.`,
          `Tip: Reduce or clear outstanding debts before applying for a new loan.`,
        ],
      },
      {
        heading: "4. Your Age and Loan Duration",
        text: [
          `• Age influences the loan term you qualify for.`,
          `• Most banks lend to applicants between 21 to 60 years old.`,
          `• Younger applicants often receive longer repayment terms and lower EMIs.`,
          `• Older applicants may be offered shorter loan tenures.`,
        ],
      },
      {
        heading: "5. Loan Amount and Purpose",
        text: [
          `• Lenders consider the purpose of your loan and the amount requested.`,
          `• Home loans typically require collateral and allow for higher loan amounts.`,
          `• Personal loans don’t need collateral but have lower borrowing limits.`,
          `• Being honest and specific about your loan need helps build trust with lenders.`,
        ],
      },
      {
        heading: "6. Collateral (Security for the Loan)",
        text: [
          `• Secured loans (e.g., home or auto loans) require asset verification.`,
          `• The value of your collateral determines the maximum loan amount.`,
          `• Banks usually lend 75–90% of the asset’s value.`,
          `• Collateral increases loan security and may help lower interest rates.`,
        ],
      },
      {
        heading: "7. Other Key Points",
        text: [
          `• Valid identity and address proof are mandatory for verification.`,
          `• A good relationship with your bank (e.g., regular savings) can improve your chances.`,
          `• Adding a co-applicant or guarantor may enhance your loan eligibility.`,
        ],
      },
      {
        heading: "Conclusion",
        text: [
          `Understanding what affects your loan eligibility enables better preparation. Maintain a high credit score, ensure income stability, manage existing debts wisely, and be transparent about your loan purpose to increase your chances of faster approval.`,
        ],
      },
    ],
    image: blog5,
  },
];

export default function BlogDetail() {
  const params = useParams();
  const blogId = Number(params?.id);
  const blog = blogData.find((b) => b.id === blogId);

  if (!blog) {
    return <div className="p-10">Blog not found.</div>;
  }

  return (
    <section className="mx-auto px-4 py-10 text-gray-800 font-sans">
      <div className="mb-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-60 object-cover rounded-lg"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6 leading-tight">{blog.title}</h1>

      <div className="space-y-10 text-justify leading-7 text-[17px]">
        {blog.content.map((section, index) => (
          <div key={index} className="flex flex-col gap-3">
            <p className="font-semibold text-xl">{section.heading}</p>
            {section.text.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
