"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, Clock, Eye, Copy, Share2, Bookmark, ChevronRight } from "lucide-react"

// Sample blog data with additional images for all posts
const blogPosts = [
  {
    id: 1,
    title: "Disrupting Auto Finance & Solving Dealer Challenges",
    excerpt: "A Fintech Disruptor in Auto Finance",
    content: `
     <h2>Speed and Simplicity</h2>
      <p>RupeeDot is not only another fintech company;
 it's a disruptor in India's auto finance space. It's
 a Pune-based company operating under Indicorn
 Financial Services Private Ltd and works as a
 facilitator between lenders and borrowers.
 Imagine it as a dating website for car loans. By
 tying up with banks, NBFCs and alternative
 lenders, RupeeDot collects numerous loan
 options so customers don't need to apply
 separately to each financier. 
The system operates fast and with efficiency, saving time and minimizing the drudgery of paperwork most borrowers
 experience. It also provides transparent navigation through each process, helping to establish trust and making auto
 financing more accessible.</p>
      <h2>Differentiating RupeeDot from Conventional Auto Financing</h2>
      <p> Conventional auto loans in India tend to be a cumbersome obstacle course. You are presented with copious paperwork, credit
 score restrictions and lengthy waiting times. The process seems designed to test your patience at every turn. Many applicants find
 that the time and effort needed to fill out forms and meet strict requirements is overwhelming. One small mistake can cause extra
 delays as you're asked for additional documents or clarifications. As a result, what should be a straightforward procedure turns
 into a stressful experience that discourages many potential buyers. This old-fashioned approach not only wastes your time but
 also introduces stress into an otherwise vital purchase. Fortunately, new solutions are on the horizon that seek to make auto loans
 easier. Sites like Rupeedot are revolutionizing the process by streamlining applications and making them more accessible. Their
 contemporary approach is assisting Indians in breaking down traditional barriers and moving one step closer to driving a car.</p>
 
      <h2>Speed and Simplicity</h2>
      
      <p>Whereas banks can take days to approve applications, Rupeedot's digital platform approves loans in a matter of hours. Their
 platform relies on intelligent digital tools that auto-fill forms, verify documents and recommend the optimal loan for you. Through
 advanced algorithms and automation, they significantly minimize the possibility of human error and accelerate the entire process. 
Rather than waiting and constantly calling bank officials to follow up, you get instant updates that keep you posted at every stage. This efficient
 process saves time and eliminates frustrations that usually accompany conventional practices.With a simple interface and real-time
 communication, Rupeedot ensures that each
 application is </p>
  <h2>More Than Credit Scores</h2>

      <p>Rupeedot is not merely about quick approvals, but also redefines who is considered creditworthy. Instead of rejecting you for merely
 having a low credit score, they consider your overall financial history. They take into account non-traditional data such as mobile
 payment history and online purchases to determine if you're a good borrower. This broad approach allows even if you're a young
 professional with a thin credit file but stable income, you can still get approved. Rupeedot's platform provides banks with a richer
 understanding of your money management habits. It highlights your money management skills beyond the conventional measures.
 By taking into account the factors that traditional systems ignore, Rupeedot opens the door for many who have been unjustly
 excluded in the past. Not only does this new method boost your prospects of loan approval, but it also promotes more prudent
 financial behavior by acknowledging varied forms of creditworthiness.</p>
      
 <p>The new borrower will need to meet the lender's credit requirements. They'll undergo a similar approval process as they would for a new loan, including credit checks and income verification.</p>
       <h2>One Application, Multiple Lenders.</h2>
      <p>Making multiple applications to various banks can be quite
 exhausting. Rupeedot's aggregator platform allows you to apply
 once and then lets the lenders most likely to accept you have
 access to your details. That one application process saves you
 time and trouble by eliminating unnecessary paperwork and
 time-consuming follow-ups. Their intelligent algorithms evaluate
 your profile and find the right financiers for you, so you receive
 the best available choices. It means less of your time wasted on
 mundane tasks and more time on what's important.
 NBFC
 NBFC
 You don't have to keep checking multiple statuses anymore or repeat the same information for every bank. Rupeedot takes
 the dirty work out of your hands and makes the entire process easy and convenient. Their methodology is transparent and
 easy, making sure you have an easy time from beginning to end. Using Rupeedot, you never have to deal with multiple lender
 applications again.</p>
      <h2>Data-Driven Underwriting</h2>     
      <p>Rupeedot's competitive advantage lies in its strong data analysis. The platform applies machine learning models to examine
 1,000+ data points like social media usage and utility bill payments. These models create comprehensive profiles of
 borrowers by collecting numerous details regarding their daily financial activity. This method assists in presenting a
 comprehensive picture of a borrower's financial behavior and stability. The system functions particularly well for individuals
 who may not have an official credit record. For instance, if you're a courier driver without an official credit track record, you
 may still be able to receive regular income using digital wallets. Rupeedot's system detects that regular income and
 recommends lenders who are best suited. It also examines other indicators such as spending patterns and payment behavior
 in order to judge risk better. This clever utilization of data is good for both lenders and borrowers as it provides a more
 equitable, more comprehensive assessment process.</p>
    `,
    // Main hero image
    heroImage: "https://via.placeholder.com/1200x600",
    // Right sidebar images
    sidebarImages: [
      {
        url: "https://via.placeholder.com/400x300",
        caption: "Digital loan processing dashboard",
      },
      {
        url: "https://via.placeholder.com/400x300",
        caption: "Customer application interface",
      },
      {
        url: "https://via.placeholder.com/400x300",
        caption: "Lender network visualization",
      },
    ],
    // Bottom image
    bottomImage: {
      url: "https://via.placeholder.com/800x400",
      caption: "RupeeDot's comprehensive auto finance ecosystem",
    },
    category: "Car Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "https://via.placeholder.com/80x80",
    featured: true,
    tags: ["Car Loan", "Loan Transfer", "Used Car", "Finance"],
  },
  {
    id: 2,
    title: "Market Overview: New vs. Used Car Sales",
    excerpt: "A Fintech Disruptor in Auto Finance",
    content: `
     <h2>  Used Car Market </h2>
      <ol>
      <li> 2024 Sales Volume: ~5.4 million units </li>
       <li> Projected 2030 Sales Volume: ~10.8 million units(CAGR: 13%)</li>
       <li>2024 Market Size: USD 36 billion</li>
       <li> Projected 2033 Market Size: USD 101 billion </li>
      </ol>

      <h2>  Used Car Market </h2>
      <ol>
      <li> 2024 Sales Volume: ~5.4 million units </li>
       <li> Projected 2030 Sales Volume: ~10.8 million units(CAGR: 13%)</li>
       <li>2024 Market Size: USD 36 billion</li>
       <li> Projected 2033 Market Size: USD 101 billion </li>
      </ol>

      <h2> Key Insight </h2>
       <p>Used car market has surpassed new car sales
 in volume and is increasing almost twice as
 quickly, reflecting the dramatic change in
 consumer behavior.
</p>
 <h2>  New Car Market </h2>
      <ol>
      <li>  2024 Sales Volume: ~4.16 million units </li>
       <li>  2024 Market Size: USD 121.5 billion </li>
       <li>2024 Market Size: USD 36 billion</li>
       <li> Projected 2033 Market Size: USD 247.4 billion
 (CAGR: 7.13%) </li>
      </ol>

      <h2>  Finance Penetration & Challenges </h2>
      <p> New Car Financing</p>
      <ol>
      <li> 2024 Penetration: 75% </li>
       <li> Reflects high reliance on financing for buying new cars </li>
      </ol>

      <h2> Used Car Financing </h2>
      <ol>
      <li>  2022 Penetration: 15% </li>
       <li> 2024 Penetration: 23%</li>
       <li> Estimated 2025 Penetration: 30%</li>
      </ol>
      <p> Financing of used cars is growing fast but remains underpenetrated due to structural issues.</p>

      <h2> Dominance of Unorganized Sector </h2>
      <p>  71% of used car purchases are made through individual sellers or local dealers.
 Inadequate standard documentation and credit evaluation limit lender involvement.
</p>

<h2> Higher Interest Rates </h2>
      <p> Used car financing has higher interest starting from (10–18%) depending upon lenders and customers profile
 compared to new car financing (~8.5%).
</p>

<h2>  Limited Rural Penetration </h2>
      <p> Rural areas have largely unorganized transactions, limiting access to organized financing options.</p>

      <h2>  Urban vs. Rural Market Dynamics </h2>
      <p>  Rural Markets</p>
      <ol>
      <li>  Mobility needs driven by low-cost. </li>
       <li>  Heavily cash-based buying and local dealerships. </li>
       <li>  Limited exposure to organized players and finance. </li>
      </ol>

      <h2>   Urban Markets </h2>
      <ol>
      <li>   Extensive adoption of organized dealerships and digital platforms. </li>
       <li>  Increased demand for SUVs and luxury used cars </li>
       <li>  Improved access to certified cars and organized loans. </li>
      </ol>

      <h2>  Growth Opportunity </h2>
      <p>  Rural India is an open market where organized players and NBFCs can significantly grow.</p>

      <h2>  Strategic Imperatives for Market Expansion </h2>
      <h2>   Enlarging Organized Dealership Networks </h2>
      <ol>
      <li>   Open more certified pre-owned dealerships in Tier 2/3/4 cities and rural locations. </li>
       <li>  Increase consumer confidence through uniform documentation and vehicle certification. </li>
      </ol>

      <h2>    Financing Solution Innovations </h2>
      <ol>
      <li>    Provide flexible EMI schedules, low ticket size loans, and credit-lite onboarding suited for rural
 and first-time buyers. </li>
       <li>  Join hands with NBFCs and fintechs for extended reach. </li>
      </ol>

      <h2> Leveraging Digital Platforms </h2>
      <p> Facilitate end-to-end online buying and financing experiences leveraging: </p>
      <ol>
      <li>    Virtual inspections </li>
       <li>  AI-based valuations </li>
       <li>   Digital KYC & loan approvals </li>
      </ol>

      <h2> Driving Consumer Awareness </h2>
      <p>  Implement targeted education initiatives on: </p>
      <ol>
      <li>    Advantages of certified second-hand vehicles </li>
       <li>  Availability of formal finance </li>
       <li>  Best practices in vehicle ownership </li>
      </ol>

      <h2> Conclusion </h2>
      <p>  India's used vehicle market is on the path to becoming a ₹100 billion+ opportunity by the end of the next
 decade. By addressing financing shortfalls, increasing organized infrastructure, and leveraging digital enablers,
 stakeholders can re-take control—propelling financial inclusion, affordability, and growth in both urban and
 rural India. </p>   
    `,
    heroImage: "https://via.placeholder.com/1200x600",
    sidebarImages: [
      {
        url: "https://via.placeholder.com/400x300",
        caption: "Used car market growth chart",
      },
      {
        url: "https://via.placeholder.com/400x300",
        caption: "New vs used car sales comparison",
      },
      {
        url: "https://via.placeholder.com/400x300",
        caption: "Market penetration statistics",
      },
    ],
    bottomImage: {
      url: "https://via.placeholder.com/800x400",
      caption: "India's automotive market landscape overview",
    },
    category: "Car Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "https://via.placeholder.com/80x80",
    featured: true,
    tags: ["Car Loan", "Loan Transfer", "Used Car", "Finance"],
  },
  {
    id: 3,
    title: "What is a Personal Loan?",
    excerpt: "A Fintech Disruptor in Auto Finance",
    content: `
    <p>It is a loan that is not backed by any collateral, intended to fulfill a variety of individual financial requirements without
 having to put up any collateral. It provides easy access to money, fixed monthly payments, and flexible repayment
 tenure, making it suitable for working professionals.</p>
     <h2> When Can You Use a Personal Loan?</h2>
      <p>Personal loans may be employed for:</p>
      <ol>
      <li>Medical emergencies</li>
       <li> Wedding costs</li>
       <li>Travel and holidays</li>
       <li> Renovation of home</li>
       <li> Consolidating debt</li>
       <li>  Purchasing electronics or gadgets</li>
       <li>  Purchasing electronics or gadgets</li>
      </ol>
      <h2> Eligibility Criteria (For Personal Loan )</h2>
      <ul>
      <li>Age: 21 to 60 years</li>
       <li> Monthly Salary: ₹15,000 and above (according to city and bank)</li>
       <li> Experience: At least 6–12 months at current company and can vary with lenders</li>
       <li> Credit Score: Ideally 700 and above</li>
       <li> Consolidating debt</li>
       <li>   Employment Status: Full-time salaried with a registered firm </li>
       <li>  Residency: Indian resident </li>
      </ul>
      <h2> Types of Personal Loans (By Use-Case)</h2>
      <ul>
      <li>Medical Loan</li>
       <li> Wedding Loan</li>
       <li>Travel Loan</li>
       <li> Home Improvement Loan</li>
       <li> Education Loan (Short-term)</li>
       <li> Purchase Loan for Gadgets/ Appliances </li>
       <li>  Debt Consolidation Loan </li>
      </ul>
      <h2>  Features & Benefits for Personal Loan</h2>
      <ul>
      <li>No guarantor or collateral required</li>
       <li> Fast disbursal—usually within 24 to 48 hours</li>
       <li> Loan amount: ₹10,000 to ₹25 lakh</li>
       <li>  Repayment period: 12 to 60 months</li>
       <li> Fixed rates of interest (beginning ~10.5% p.a. onwards)</li>
       <li>  Charges transparent and less paperwork </li>
       <li>   Pre-approved offers to qualified salaried customers </li>
      </ul>
      <h2>  Documentation required for Personal loan</h2>
      <p> 1.Identity Proof (any one – mandatory):</p>
      <ul>
      <li>PAN Card & Aadhaar Card(Compulsory for loan processing)</li>
       <li> Passport</li>
       <li> Voter ID</li>
       <li> Driving License</li>
      </ul>


      <p> 2.Address Proof (any one):</p>
      <ul>
      <li>Aadhaar Card</li>
       <li>Passport</li>
       <li>Utility Bills (Electricity, Water, Gas – recent, within 2 months)</li>
       <li> Rent Agreement (if staying in rented premises)</li>
      </ul>
      

      <p> 3. Income Proof:</p>
      <ul>
      <li> Last 3 to 6 months' Salary Slips</li>
       <li> Last 3 to 6 months' Bank Statements (Salary credited account)</li>
      </ul>
      

       <p> 4.  Employment Proof:</p>
      <ul>
      <li> Employee ID Card (optional, but often helps for verification)</li>
       <li> Offer Letter / Appointment Letter (if recently joined)</li>
       <li>  Form 16 / Latest ITR (may be required for high loan amounts)</li>
      </ul>

      <p> 5. Photograph:</p>
      <ul>
      <li>  One or two recent passport-size photograph</li>
      </ul>


      <p> 6. Loan Application Form:</p>
      <ul>
      <li> Duly filled and signed (physical or digital)</li>
      </ul>

      <h2>  Boosters to Increase Loan Approval Probability</h2>
      <ul>
      <li>Keep your credit score at 700+</li>
       <li> Don't apply with several lenders simultaneously</li>
       <li> Keep your EMIs at 40–50% of net salary</li>
       <li> Provide true income and KYC papers</li>
       <li> Avail of employer tie-up benefits if present</li>
       <li> Set a realistic loan size based on salary</li>
      </ul>

    `,
    heroImage: "https://via.placeholder.com/1200x600",
    sidebarImages: [
      {
        url: "https://via.placeholder.com/400x300",
        caption: "Personal loan application process",
      },
      {
        url: "https://via.placeholder.com/400x300",
        caption: "Documentation requirements",
      },
    ],
    bottomImage: {
      url: "https://via.placeholder.com/800x400",
      caption: "Personal loan eligibility and approval process",
    },
    category: "Car Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "https://via.placeholder.com/80x80",
    featured: true,
    tags: ["Car Loan", "Loan Transfer", "Used Car", "Finance"],
  },
  {
    id: 4,
    title: "Key Challenges Faced by Used Car Dealers and How RupeeDot Is Solving Them?",
    excerpt: "A Fintech Disruptor in Auto Finance",
    content: `
      <p> Indian used car dealers particularly small and medium-sized dealerships work in a highspeed market but are often
 hindered by slow, inefficient financing procedures. One of the largest challenges they encounter is slow loan
 approvals, which not only delays the sales process but also dissolves customer confidence. Customers today
 anticipate near-instant approval, and extended waiting times frequently result in drop-offs or lost business. This has a
 direct effect on the dealer's revenue, inventory turnover, and brand image. RupeeDot fills this vital gap by providing a
 real-time, tech-savvy loan approval environment. With smart automation, pre-approved eligibility checks, and soft
 bureau integrations, dealers are now able to offer instant credit decisions directly from their showroom floor.
 RupeeDot converts what was previously a time-consuming bottleneck into a hassle-free, swift, and customer-centric
 process—enabling dealers to close more deals quicker
</p>
<h2> Challenge: 1</h2>
      <ul>
      <li>  Dealers have to wait excessively for loan sanctions, resulting in sales loss and customer attrition.</li>
       <li> Most financiers have manual, obsolete methods, causing disbursals to be delayed.</li>
       <li>   Cash Flow Challenges delayed Dealer Payments</li>
       <li>   Banks/NBFCs favor prime buyers, making it difficult for thin-file or informal-income customers to receive speedy
 sanctions.</li>
      </ul>

      <h2>  Streamlined Approach :1</h2>
      <ul>
      <li> Techno-Driven Loan Processing → AI-based underwriting, automated document verification drive loan sanctions fast.</li>
       <li> Dealer-Lender Matching → Dealers have access to multiple financiers, decreasing sole-lender dependence.</li>
       <li> Pre-Approval System → Customers get instant loan eligibility checks, helping dealers close sales faster</li>
      </ul>

      <h2>  Challenge: 2</h2>
      <ul>
      <li>  Many customers in smaller cities lack a strong credit history, making them high risk for traditional lenders.</li>
       <li> Self-employed buyers, gig workers, and those with cash income often struggle to get financing.</li>
       <li>  Dealers lose potential buyers because loan rejection rates are high.</li>
      </ul>

      <h2>  Streamlined Approach :2 </h2>
      <ul>
      <li>  Smart Credit Scoring → Our proprietary scorecard evaluates alternative data points (bank transactions, income
 patterns) to increase approvals.</li>
       <li>Expanded Lender Network → We link dealers with a broad set of banks, NBFCs, and fintech lenders for various
 customer profiles.</li>
       <li>  Top-Up & Personal Loans -Customers are able to obtain additional funding when required, enhancing purchase
 flexibility.</li>
      </ul>

      <h2>  Challenge: 3</h2>
      <ul>
      <li>  Dealers require instant money after selling a car but are delayed in finances, so they have to wait for weeks for loan
 disbursements</li>
       <li>Limited working capital limits their capacity to inventory additional cars.</li>
       <li>  Top-Up & Personal Loans -Customers are able to obtain additional funding when required, enhancing purchase
 flexibility.</li>
 <li>  Most financiers have tight payout cycles, and it becomes difficult for the dealers to remain liquid. .</li>

      </ul>
      <h2>  Streamlined Approach: 3 </h2>
      <ul>
      <li> Speedier Payouts to Dealers → We make the financing process easy and fast, so the dealers get funds quicker postloan sanction. </li>
       <li> No Single Window for Loan Applications , Lack of a Seamless Finance Channel.</li>
       <li> Pre-Approval System → Customers get instant loan eligibility checks, helping dealers close sales faster</li>
      </ul>

      <h2>  Challenge: 4</h2>
      <ul>
      <li>  Dealers are currently dealing with multiple financiers, applications, and customer documents in a non-organized
 process.</li>
       <li>Working with various lenders, eligibility checks, and documentation requirements generates complexity and
 inefficiency.</li>
       <li>  Several small dealers don't have tech-driven platforms to monitor loan status and customer approvals in real-time. </li>
      </ul>
      <h2>  Streamlined Approach: 4 </h2>
      <ul>
      <li>  Single Dashboard Platform → Dealers are able to apply, track, and manage multiple customer loans from a single
 dashboard. </li>
       <li>  End-to-End Support → Our system provides real-time updates on loan status, document approvals, and disbursals.</li>
       <li>  AI-Powered Lender Matching → The platform auto-recommends the optimal financiers for the customer based on
 eligibility. 
</li>
      </ul>
      <h2> Rupeedot's Dealership Mission for Used Car loans .</h2>
      <p>To empower auto dealers with fast, reliable, and seamless financing solutions that drive sales, improve cash flow, and
 maximize loan approvals for all customer segments.</p>
  
    `,
    heroImage: "https://via.placeholder.com/1200x600",
    sidebarImages: [
      {
        url: "https://via.placeholder.com/400x300",
        caption: "Dealer challenges infographic",
      },
      {
        url: "https://via.placeholder.com/400x300",
        caption: "RupeeDot solution dashboard",
      },
      {
        url: "https://via.placeholder.com/400x300",
        caption: "Streamlined process flow",
      },
    ],
    bottomImage: {
      url: "https://via.placeholder.com/800x400",
      caption: "Complete dealer ecosystem transformation",
    },
    category: "Car Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "https://via.placeholder.com/80x80",
    featured: true,
    tags: ["Car Loan", "Loan Transfer", "Used Car", "Finance"],
  },
  {
    id: 5,
    title: "What Determines Your Loan Eligibility in India?",
    excerpt: "A Fintech Disruptor in Auto Finance",
    content: `
     <h2>  A Borrower's Easy Guide </h2>
     <h2>   Introduction </h2>
    <p> Before you go and apply for a loan, it makes sense to learn what lenders require to decide whether or not
 you qualify. Knowing these factors will enable you to prepare more effectively and maximize the chances of
 having your loan sanctioned promptly.</p>

     <h2> 1.Credit Score and Credit History </h2>
      <ol>
      <li>Your credit history (such as your CIBIL record) reflects how well you've handled credit or loans in the past.</li>
       <li>  A good score (generally above 750) indicates you're a low-risk borrower</li>
       <li>Late payments, defaults, or excessive applications for loans may decrease your score.</li>
       <li> Advice: Pay bills and EMIs regularly to maintain a healthy score</li>
      </ol>

      <h2> 2.Income and Employment Stability </h2>
      <ol>
      <li>Banks need to be confident that you have sufficient income to repay the loan.</li>
       <li>  Salaried individuals must show salary slips and bank statements.</li>
       <li>Self-employed individuals must give tax returns and business documents.</li>
       <li>  A consistent job or business record assists with establishing trust with lenders.</li>
      </ol>

      <h2> 3. Outstanding Loans and Debt </h2>
      <ol>
      <li> If you have existing loans or credit card debt, banks will verify that you can manage additional debt.</li>
       <li> They compute a ratio of your monthly debts to your income.</li>
       <li> The lower this ratio, the better your chance to get a new loan.</li>
       <li> Tip: Try to clear or reduce existing loans before applying.</li>
      </ol>
      <h2> 4. Your Age and Loan Duration </h2>
      <ol>
      <li>  Your age affects how long you can repay the loan.</li>
       <li>  Most banks lend to people aged 21 to 60.</li>
       <li>  Younger borrowers usually get longer repayment periods and lower monthly payments.</li>
       <li> Older applicants might get shorter loan terms.</li>
      </ol>

      <h2> 5. Loan Amount and Purpose </h2>
      <ol>
      <li>   Banks think about why you require the loan and how much you are requesting.</li>
       <li>  Home loans need collateral (property), so you can borrow more money.</li>
       <li> Personal loans do not need collateral but have lower limits.</li>
       <li> Be sincere and specific about why you need the loan.</li>
      </ol>

      <h2> 6. Collateral (Security for the Loan) </h2>
      <ol>
      <li>  . For secured loans such as home or automobile loans, the bank will verify the property or asset you're providing.</li>
       <li> · The worth of your collateral determines the highest loan amount.</li>
       <li> · Banks typically lend between 75-90% of the value of the asset.</li>
       <li> · This makes the loan more secure for the bank and frequently results in improved interest rates for you.</li>
      </ol>

      <h2> 7. Other Key Points </h2>
      <ol>
      <li>   Address and identity proof are required to confirm your identity.</li>
       <li> A positive record with your bank (such as savings on a regular basis) may assist your application.</li>
       <li> Occasionally, a co-applicant or guarantor can enhance your eligibility for a loan.</li>
      </ol>
      
      <h2> Conclusion </h2>
      <p>  Understanding what impacts your loan qualification enables you to prepare and apply confidently. Keep your credit rating high, have a stable income, have control
 over your current debts, and be open about your loan requirements. This makes it easier and quicker for you</p>

      
    `,
    heroImage: "https://via.placeholder.com/1200x600",
    sidebarImages: [
      {
        url: "https://via.placeholder.com/400x300",
        caption: "Credit score factors",
      },
      {
        url: "https://via.placeholder.com/400x300",
        caption: "Income verification process",
      },
    ],
    bottomImage: {
      url: "https://via.placeholder.com/800x400",
      caption: "Comprehensive loan eligibility framework",
    },
    category: "Car Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "https://via.placeholder.com/80x80",
    featured: true,
    tags: ["Car Loan", "Loan Transfer", "Used Car", "Finance"],
  },
]

// Related posts function
const getRelatedPosts = (currentPostId, category) => {
  return blogPosts.filter((post) => post.id !== currentPostId && post.category === category).slice(0, 3)
}

export default function BlogDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const postId = Number.parseInt(id)
    const foundPost = blogPosts.find((post) => post.id === postId)

    if (foundPost) {
      setPost(foundPost)
      setRelatedPosts(getRelatedPosts(postId, foundPost.category))
      window.scrollTo(0, 0)
    }
  }, [id])

  const copyToClipboard = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog post not found</h2>
          <p className="text-gray-600 mb-6">The blog post you're looking for might have been moved or doesn't exist.</p>
          <Link to="/" className="text-blue-600 hover:underline flex items-center justify-center">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to all blogs
          </Link>
        </div>
      </div>
    )
  }

  return (
    


    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero section */}
     
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"></h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Learn about RupeeDot's journey to becoming India's trusted financial services provider
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>
        
      
      

      <div className="container mx-auto px-4 max-w-6xl -mt-10">
        {/* TOP IMAGE - Hero/Featured Image */}
        <div className="mb-10">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={post.heroImage || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 mb-8">
              <div
                className="prose prose-lg max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* BOTTOM IMAGE */}
            {post.bottomImage && (
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={post.bottomImage.url || "/placeholder.svg"}
                    alt={post.bottomImage.caption}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  {post.bottomImage.caption && (
                    <p className="text-center text-sm text-gray-500 mt-4 italic">{post.bottomImage.caption}</p>
                  )}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author box */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-2xl">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{post.author}</h3>
                  <p className="text-gray-600 mb-3">Financial Expert at RupeeDot</p>
                  <p className="text-gray-600">
                    Specializing in auto finance and personal loans with over 10 years of experience in the financial
                    sector.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR - 2-3 Images */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-[#] rounded-xl shadow-sm p-6 mb-6 sticky top-8">
              <h3 className="text-lg font-bold mb-6 text-gray-900">Visual Insights</h3>
              <div className="space-y-6">
                {post.sidebarImages?.map((image, index) => (
                  <div key={index} className="group">
                    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.caption}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {image.caption && <p className="text-sm text-gray-600 mt-2 px-1">{image.caption}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional sidebar content */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Reading Time</span>
                  <span className="font-medium">{post.readTime}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Views</span>
                  <span className="font-medium">{post.views}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">{post.category}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Published</span>
                  <span className="font-medium">{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related posts */}
       
          
        
      </div>
    </div>
  )
}
