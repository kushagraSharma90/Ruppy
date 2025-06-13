"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, Clock, Eye, Copy, Share2, Bookmark, ChevronRight } from "lucide-react"
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";
import img11 from "../../assets/11.png";
import img12 from "../../assets/12.png";
import img13 from "../../assets/13.png";
import img14 from "../../assets/14.png";
import img15 from "../../assets/15.png";






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
        url: img1,
        caption: "Digital loan processing dashboard",
      },
      {
        url: img2,
        caption: "Customer application interface",
      },
      {
        url: img3,
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
  content: 
  `<div style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333;">
    <h1 style="font-size: 2.5rem; color: #2c3e50; border-bottom: 2px solid #f1f1f1; padding-bottom: 10px; margin-bottom: 25px;">Market Overview: New vs. Used Car Sales</h1>
    
    <h2 style="font-size: 1.8rem; color: #3498db; margin-top: 30px;">Key Insight</h2>
    <ul style="font-size: 1.1rem;">
      <li style="margin-bottom: 8px;">2024 Sales Volume: ~5.4 million units</li>
      <li style="margin-bottom: 8px;">Projected 2030 Sales Volume: ~10.8 million units (CAGR: 13%)</li>
      <li style="margin-bottom: 8px;">2024 Market Size: USD 36 billion</li>
      <li>Projected 2033 Market Size: USD 101 billion</li>
    </ul>
    
    <h2 style="font-size: 1.8rem; color: #3498db; margin-top: 30px;">New Car Market</h2>
    <ul style="font-size: 1.1rem;">
      <li style="margin-bottom: 8px;">2024 Sales Volume: ~4.16 million units</li>
      <li style="margin-bottom: 8px;">2024 Market Size: USD 121.5 billion</li>
      <li>Projected 2033 Market Size: USD 247.4 billion (CAGR: 7.13%)</li>
    </ul>
    
    <p style="font-size: 1.15rem; background: #f8f9fa; padding: 15px; border-left: 4px solid #3498db;">
      <strong>Key Trend:</strong> Used car market has surpassed new car sales in volume and is increasing almost twice as quickly, reflecting the dramatic change in consumer behavior.
    </p>
    
    <h2 style="font-size: 1.8rem; color: #3498db; margin-top: 30px;">Finance Penetration & Challenges</h2>
    
    <h3 style="font-size: 1.4rem; color: #2c3e50; margin-top: 20px;">New Car Financing</h3>
    <ul style="font-size: 1.1rem;">
      <li style="margin-bottom: 8px;">2024 Penetration: <span style="color: #e74c3c; font-weight: bold;">75%</span></li>
      <li>Reflects high reliance on financing for buying new cars.</li>
    </ul>
    
    <h3 style="font-size: 1.4rem; color: #2c3e50; margin-top: 20px;">Used Car Financing</h3>
    <ul style="font-size: 1.1rem;">
      <li style="margin-bottom: 8px;">2022 Penetration: <span style="color: #e74c3c;">15%</span></li>
      <li style="margin-bottom: 8px;">2024 Penetration: <span style="color: #e74c3c; font-weight: bold;">23%</span></li>
      <li>Estimated 2025 Penetration: <span style="color: #e74c3c; font-weight: bold;">30%</span></li>
    </ul>
    <p style="font-size: 1.15rem;">Financing of used cars is growing fast but remains underpenetrated due to structural issues.</p>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <h3 style="font-size: 1.4rem; color: #2c3e50; margin-top: 0;">Dominance of Unorganized Sector</h3>
      <p style="font-size: 1.15rem; margin-bottom: 0;">
        71% of used car purchases are made through individual sellers or local dealers. Inadequate standard documentation and credit evaluation limit lender involvement.
      </p>
    </div>
    
    <h3 style="font-size: 1.4rem; color: #2c3e50; margin-top: 20px;">Higher Interest Rates</h3>
    <p style="font-size: 1.15rem;">
      Used car financing has higher interest starting from <span style="color: #e74c3c; font-weight: bold;">10-18%</span> depending upon lenders and customers profile compared to new car financing (<span style="color: #27ae60; font-weight: bold;">~8.5%</span>).
    </p>
    
    <h3 style="font-size: 1.4rem; color: #2c3e50; margin-top: 20px;">Limited Rural Penetration</h3>
    <p style="font-size: 1.15rem;">
      Rural areas have largely unorganized transactions, limiting access to organized financing options.
    </p>
    
    <h2 style="font-size: 1.8rem; color: #3498db; margin-top: 30px;">Urban vs. Rural Market Dynamics</h2>
    
    <div style="display: flex; gap: 20px; margin: 20px 0;">
      <div style="flex: 1; background: #e8f4fc; padding: 15px; border-radius: 5px;">
        <h3 style="font-size: 1.4rem; color: #2c3e50; margin-top: 0;">Rural Markets</h3>
        <ul style="font-size: 1.1rem;">
          <li style="margin-bottom: 8px;">Mobility needs driven by low-cost.</li>
          <li style="margin-bottom: 8px;">Heavily cash-based buying and local dealerships.</li>
          <li>Limited exposure to organized players and finance.</li>
        </ul>
      </div>
      
      <div style="flex: 1; background: #e8f4fc; padding: 15px; border-radius: 5px;">
        <h3 style="font-size: 1.4rem; color: #2c3e50; margin-top: 0;">Urban Markets</h3>
        <ul style="font-size: 1.1rem;">
          <li style="margin-bottom: 8px;">Extensive adoption of organized dealerships and digital platforms.</li>
          <li style="margin-bottom: 8px;">Increased demand for SUVs and luxury used cars.</li>
          <li>Improved access to certified cars and organized loans.</li>
        </ul>
      </div>
    </div>
    
    <h2 style="font-size: 1.8rem; color: #3498db; margin-top: 30px;">Growth Opportunity</h2>
    <p style="font-size: 1.2rem; font-weight: 500;">
      Rural India is an open market where organized players and NBFCs can significantly grow.
    </p>
    
    <h2 style="font-size: 1.8rem; color: #3498db; margin-top: 30px;">Strategic Imperatives for Market Expansion</h2>
    
    <div style="background: #f1f8fe; padding: 20px; border-radius: 5px; margin: 20px 0;">
      <h3 style="font-size: 1.4rem; color: #2c3e50; margin-top: 0;">1. Enlarging Organized Dealership Networks</h3>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 8px;">Open more certified pre-owned dealerships in Tier 2/3/4 cities and rural locations.</li>
        <li>Increase consumer confidence through uniform documentation and vehicle certification.</li>
      </ul>
    </div>
    
    <div style="background: #f1f8fe; padding: 20px; border-radius: 5px; margin: 20px 0;">
      <h3 style="font-size: 1.4rem; color: #2c3e50; margin-top: 0;">2. Financing Solution Innovations</h3>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 8px;">Provide flexible EMI schedules, low ticket size loans, and credit-lite onboarding suited for rural and first-time buyers.</li>
        <li>Join hands with NBFCs and fintechs for extended reach.</li>
      </ul>
    </div>
    
    <div style="background: #f1f8fe; padding: 20px; border-radius: 5px; margin: 20px 0;">
      <h3 style="font-size: 1.4rem; color: #2c3e50; margin-top: 0;">3. Leveraging Digital Platforms</h3>
      <p style="font-size: 1.15rem;">Facilitate end-to-end online buying and financing experiences leveraging:</p>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 8px;">Virtual inspections</li>
        <li style="margin-bottom: 8px;">AI-based valuations</li>
        <li>Digital KYC & loan approvals</li>
      </ul>
    </div>
    
    <div style="background: #f1f8fe; padding: 20px; border-radius: 5px; margin: 20px 0;">
      <h3 style="font-size: 1.4rem; color: #2c3e50; margin-top: 0;">4. Driving Consumer Awareness</h3>
      <p style="font-size: 1.15rem;">Implement targeted education initiatives on:</p>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 8px;">Advantages of certified second-hand vehicles</li>
        <li style="margin-bottom: 8px;">Availability of formal finance</li>
        <li>Best practices in vehicle ownership</li>
      </ul>
    </div>
    
    <div style="background: #e8f4fc; padding: 25px; border-radius: 5px; margin: 30px 0;">
      <h2 style="font-size: 1.8rem; color: #3498db; margin-top: 0;">Conclusion</h2>
      <p style="font-size: 1.2rem;">
        India's used vehicle market is on the path to becoming a <span style="font-weight: bold; color: #e74c3c;">₹100 billion+</span> opportunity by the end of the next decade. By addressing financing shortfalls, increasing organized infrastructure, and leveraging digital enablers, stakeholders can re-take control—propelling financial inclusion, affordability, and growth in both urban and rural India.
      </p>
    </div>
  </div>`,
  heroImage: "https://via.placeholder.com/1200x600",
  sidebarImages: [
    {
      url: img4,
      caption: "Used car market growth chart",
    },
    {
      url: img5,
      caption: "New vs used car sales comparison",
    },
    {
      url: img6,
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
    excerpt: "An unsecured loan for various personal financial needs",
    content: `
    <div style="font-size: 1.1rem; line-height: 1.6;">
      <h2 style="font-size: 1.8rem; margin-bottom: 1rem; color: #2c3e50; border-bottom: 2px solid #f1c40f; padding-bottom: 0.5rem;">Understanding Personal Loans</h2>
      <p style="font-size: 1.15rem;">A personal loan is an unsecured loan (not backed by any collateral) designed to fulfill various individual financial requirements. It provides:</p>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 0.5rem;">Easy access to funds</li>
        <li style="margin-bottom: 0.5rem;">Fixed monthly payments</li>
        <li style="margin-bottom: 0.5rem;">Flexible repayment tenure</li>
      </ul>
      <p style="font-size: 1.15rem;">This makes it particularly suitable for working professionals who need quick financing without pledging assets.</p>
      
      <h2 style="font-size: 1.8rem; margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50; border-bottom: 2px solid #f1c40f; padding-bottom: 0.5rem;">When to Use a Personal Loan</h2>
      <p style="font-size: 1.15rem;">Personal loans can be employed for various legitimate personal purposes including:</p>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 0.5rem;"><strong style="color: #e74c3c;">Medical emergencies:</strong> Cover unexpected healthcare expenses</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #e74c3c;">Wedding costs:</strong> Finance your dream wedding</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #e74c3c;">Travel and holidays:</strong> Fund your vacation plans</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #e74c3c;">Home renovation:</strong> Upgrade or repair your living space</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #e74c3c;">Debt consolidation:</strong> Combine multiple debts into one manageable payment</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #e74c3c;">Electronics/gadgets:</strong> Purchase the latest devices</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #e74c3c;">Education/skill enhancement:</strong> Invest in your professional development</li>
      </ul>
      
      <h2 style="font-size: 1.8rem; margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50; border-bottom: 2px solid #f1c40f; padding-bottom: 0.5rem;">Eligibility Criteria</h2>
      <p style="font-size: 1.15rem;">To qualify for a personal loan, applicants typically need to meet these requirements:</p>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 0.5rem;"><strong style="color: #3498db;">Age:</strong> 21 to 60 years</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #3498db;">Income:</strong> Minimum ₹15,000 monthly salary (varies by city and lender)</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #3498db;">Employment:</strong> At least 6-12 months with current employer</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #3498db;">Credit Score:</strong> 700 or above (ideal range)</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #3498db;">Employment Type:</strong> Full-time salaried with registered company</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #3498db;">Residency:</strong> Must be an Indian resident</li>
      </ul>
      
      <h2 style="font-size: 1.8rem; margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50; border-bottom: 2px solid #f1c40f; padding-bottom: 0.5rem;">Types of Personal Loans</h2>
      <p style="font-size: 1.15rem;">Personal loans are often categorized by their intended use:</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 1.3rem; color: #2c3e50; margin-bottom: 0.5rem;">Medical Loan</h3>
          <p style="font-size: 1.05rem;">For healthcare expenses and emergency treatments</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 1.3rem; color: #2c3e50; margin-bottom: 0.5rem;">Wedding Loan</h3>
          <p style="font-size: 1.05rem;">To cover marriage ceremony costs</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 1.3rem; color: #2c3e50; margin-bottom: 0.5rem;">Travel Loan</h3>
          <p style="font-size: 1.05rem;">For vacation funding</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 1.3rem; color: #2c3e50; margin-bottom: 0.5rem;">Home Improvement Loan</h3>
          <p style="font-size: 1.05rem;">For renovations and repairs</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 1.3rem; color: #2c3e50; margin-bottom: 0.5rem;">Education Loan (Short-term)</h3>
          <p style="font-size: 1.05rem;">For skill development courses</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 1.3rem; color: #2c3e50; margin-bottom: 0.5rem;">Gadget/Appliance Loan</h3>
          <p style="font-size: 1.05rem;">For purchasing electronics</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 1.3rem; color: #2c3e50; margin-bottom: 0.5rem;">Debt Consolidation Loan</h3>
          <p style="font-size: 1.05rem;">To combine multiple debts</p>
        </div>
      </div>
      
      <h2 style="font-size: 1.8rem; margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50; border-bottom: 2px solid #f1c40f; padding-bottom: 0.5rem;">Key Features & Benefits</h2>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 0.5rem;"><strong style="color: #27ae60;">No collateral:</strong> No need for guarantors or asset pledging</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #27ae60;">Quick disbursal:</strong> Funds typically available within 24-48 hours</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #27ae60;">Loan amount:</strong> ₹10,000 to ₹25 lakh range</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #27ae60;">Repayment period:</strong> Flexible 12 to 60 month terms</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #27ae60;">Interest rates:</strong> Fixed rates starting from ~10.5% p.a.</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #27ae60;">Transparent:</strong> Minimal paperwork with clear charges</li>
        <li style="margin-bottom: 0.5rem;"><strong style="color: #27ae60;">Pre-approved offers:</strong> Available for qualified applicants</li>
      </ul>
      
      <h2 style="font-size: 1.8rem; margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50; border-bottom: 2px solid #f1c40f; padding-bottom: 0.5rem;">Required Documentation</h2>
      <h3 style="font-size: 1.5rem; color: #34495e; margin: 1.5rem 0 0.8rem 0;">1. Identity Proof (mandatory)</h3>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 0.5rem;">PAN Card (compulsory)</li>
        <li style="margin-bottom: 0.5rem;">Aadhaar Card (compulsory)</li>
        <li style="margin-bottom: 0.5rem;">Passport</li>
        <li style="margin-bottom: 0.5rem;">Voter ID</li>
        <li style="margin-bottom: 0.5rem;">Driving License</li>
      </ul>
      
      <h3 style="font-size: 1.5rem; color: #34495e; margin: 1.5rem 0 0.8rem 0;">2. Address Proof</h3>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 0.5rem;">Aadhaar Card</li>
        <li style="margin-bottom: 0.5rem;">Passport</li>
        <li style="margin-bottom: 0.5rem;">Recent utility bills (within 2 months)</li>
        <li style="margin-bottom: 0.5rem;">Rent agreement (if applicable)</li>
      </ul>
      
      <h3 style="font-size: 1.5rem; color: #34495e; margin: 1.5rem 0 0.8rem 0;">3. Income Proof</h3>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 0.5rem;">Last 3-6 months salary slips</li>
        <li style="margin-bottom: 0.5rem;">Last 3-6 months bank statements (salary account)</li>
      </ul>
      
      <h3 style="font-size: 1.5rem; color: #34495e; margin: 1.5rem 0 0.8rem 0;">4. Employment Proof</h3>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 0.5rem;">Employee ID card</li>
        <li style="margin-bottom: 0.5rem;">Appointment letter (for recent hires)</li>
        <li style="margin-bottom: 0.5rem;">Form 16/ITR (for larger loan amounts)</li>
      </ul>
      
      <h3 style="font-size: 1.5rem; color: #34495e; margin: 1.5rem 0 0.8rem 0;">5. Photographs</h3>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 0.5rem;">1-2 recent passport-size photos</li>
      </ul>
      
      <h3 style="font-size: 1.5rem; color: #34495e; margin: 1.5rem 0 0.8rem 0;">6. Application Form</h3>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 0.5rem;">Completed and signed application</li>
      </ul>
      
      <h2 style="font-size: 1.8rem; margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50; border-bottom: 2px solid #f1c40f; padding-bottom: 0.5rem;">Tips to Improve Approval Chances</h2>
      <ul style="font-size: 1.1rem;">
        <li style="margin-bottom: 0.8rem;"><strong style="color: #9b59b6;">Maintain good credit:</strong> Keep score above 700</li>
        <li style="margin-bottom: 0.8rem;"><strong style="color: #9b59b6;">Avoid multiple applications:</strong> Don't apply with several lenders at once</li>
        <li style="margin-bottom: 0.8rem;"><strong style="color: #9b59b6;">Manage debt ratio:</strong> Keep EMIs under 40-50% of net salary</li>
        <li style="margin-bottom: 0.8rem;"><strong style="color: #9b59b6;">Provide accurate information:</strong> Submit truthful income and KYC documents</li>
        <li style="margin-bottom: 0.8rem;"><strong style="color: #9b59b6;">Check employer benefits:</strong> Utilize company tie-ups if available</li>
        <li style="margin-bottom: 0.8rem;"><strong style="color: #9b59b6;">Borrow responsibly:</strong> Request amounts aligned with your income</li>
      </ul>
    </div>
    `,
    heroImage: "https://via.placeholder.com/1200x600",
    sidebarImages: [
      {
        url: img8,
        caption: "Personal loan application process",
      },
      {
        url: img9,
        caption: "Documentation requirements",
      },
      {
        url: img10,
        caption: "Loan approval timeline",
      },
    ],
    bottomImage: {
      url: "https://via.placeholder.com/800x400",
      caption: "Understanding personal loan terms and conditions",
    },
    category: "Personal Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "https://via.placeholder.com/80x80",
    featured: true,
    tags: ["Personal Loan", "Unsecured Loan", "Finance", "Quick Loan"],
  },
  {
    id: 4,
    title: "Key Challenges Faced by Used Car Dealers and How RupeeDot Is Solving Them",
    excerpt: "A Fintech Disruptor in Auto Finance",
    content: `
      <div style="font-size: 1.1rem; line-height: 1.7;">
      <h1 style="font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50;">Key Challenges Faced by Used Car Dealers and How RupeeDot Is Solving Them?</h1>
        <p style="font-size: 1.15rem;">Indian used car dealers, particularly small and medium-sized dealerships, operate in a high-speed market but are often hindered by slow, inefficient financing procedures. One of the largest challenges they encounter is slow loan approvals, which not only delays the sales process but also erodes customer confidence. Customers today expect near-instant approval, and extended waiting times frequently result in drop-offs or lost business. This directly affects the dealer's revenue, inventory turnover, and brand image.</p>
        
        <p style="font-size: 1.15rem;">RupeeDot fills this vital gap by providing a real-time, tech-savvy loan approval environment. With smart automation, pre-approved eligibility checks, and soft bureau integrations, dealers can now offer instant credit decisions directly from their showroom floor. RupeeDot converts what was previously a time-consuming bottleneck into a hassle-free, swift, and customer-centric process—enabling dealers to close more deals quicker.</p>

        <h2 style="font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50;">Challenge 1: Slow Loan Sanctions Causing Sales Loss</h2>
        <ul style="font-size: 1.1rem;">
          <li>Excessive waiting time for loan approvals leads to customer attrition</li>
          <li>Manual, obsolete methods used by most financiers cause disbursal delays</li>
          <li>Cash flow challenges due to delayed dealer payments</li>
          <li>Banks/NBFCs favor prime buyers, leaving thin-file customers underserved</li>
        </ul>

        <h3 style="font-size: 1.3rem; margin-top: 1.5rem; margin-bottom: 0.8rem; color: #3498db;">RupeeDot's Solution:</h3>
        <ul style="font-size: 1.1rem;">
          <li><strong style="font-size: 1.12rem;">Techno-Driven Loan Processing:</strong> AI-based underwriting and automated document verification accelerate loan sanctions</li>
          <li><strong style="font-size: 1.12rem;">Dealer-Lender Matching:</strong> Access to multiple financiers reduces sole-lender dependence</li>
          <li><strong style="font-size: 1.12rem;">Pre-Approval System:</strong> Instant loan eligibility checks help close sales faster</li>
        </ul>

        <h2 style="font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50;">Challenge 2: High Rejection Rates for Non-Traditional Borrowers</h2>
        <ul style="font-size: 1.1rem;">
          <li>Customers in smaller cities often lack strong credit history</li>
          <li>Self-employed buyers, gig workers, and cash-income individuals struggle to get financing</li>
          <li>High rejection rates cause dealers to lose potential buyers</li>
        </ul>

        <h3 style="font-size: 1.3rem; margin-top: 1.5rem; margin-bottom: 0.8rem; color: #3498db;">RupeeDot's Solution:</h3>
        <ul style="font-size: 1.1rem;">
          <li><strong style="font-size: 1.12rem;">Smart Credit Scoring:</strong> Proprietary scorecard evaluates alternative data points (bank transactions, income patterns)</li>
          <li><strong style="font-size: 1.12rem;">Expanded Lender Network:</strong> Connection with diverse banks, NBFCs, and fintech lenders</li>
          <li><strong style="font-size: 1.12rem;">Top-Up & Personal Loans:</strong> Additional funding options enhance purchase flexibility</li>
        </ul>

        <h2 style="font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50;">Challenge 3: Delayed Payments Hurting Dealer Liquidity</h2>
        <ul style="font-size: 1.1rem;">
          <li>Dealers wait weeks for loan disbursements after sales</li>
          <li>Limited working capital restricts inventory expansion</li>
          <li>Tight payout cycles from financiers affect dealer liquidity</li>
        </ul>

        <h3 style="font-size: 1.3rem; margin-top: 1.5rem; margin-bottom: 0.8rem; color: #3498db;">RupeeDot's Solution:</h3>
        <ul style="font-size: 1.1rem;">
          <li><strong style="font-size: 1.12rem;">Faster Payouts:</strong> Streamlined process ensures quicker fund transfer post-sanction</li>
          <li><strong style="font-size: 1.12rem;">Unified Finance Channel:</strong> Single window for all loan applications</li>
        </ul>

        <h2 style="font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50;">Challenge 4: Disorganized Multi-Lender Processes</h2>
        <ul style="font-size: 1.1rem;">
          <li>Dealers juggle multiple financiers and applications inefficiently</li>
          <li>Complexity from varying lender requirements and documentation</li>
          <li>Lack of real-time tracking for small dealers</li>
        </ul>

        <h3 style="font-size: 1.3rem; margin-top: 1.5rem; margin-bottom: 0.8rem; color: #3498db;">RupeeDot's Solution:</h3>
        <ul style="font-size: 1.1rem;">
          <li><strong style="font-size: 1.12rem;">Single Dashboard Platform:</strong> Manage all customer loans from one interface</li>
          <li><strong style="font-size: 1.12rem;">End-to-End Support:</strong> Real-time updates on loan status and document approvals</li>
          <li><strong style="font-size: 1.12rem;">AI-Powered Lender Matching:</strong> Automatically recommends optimal financiers based on eligibility</li>
        </ul>

        <h2 style="font-size: 1.6rem; margin-top: 2.5rem; margin-bottom: 1.2rem; color: #2c3e50; text-align: center;">RupeeDot's Dealership Mission</h2>
        <p style="font-size: 1.2rem; text-align: center; font-style: italic;">To empower auto dealers with fast, reliable, and seamless financing solutions that drive sales, improve cash flow, and maximize loan approvals for all customer segments.</p>
      </div>
    `,
    heroImage: "https://example.com/used-car-dealers-challenges.jpg",
    sidebarImages: [
      {
        url: img11,
        caption: "RupeeDot solution dashboard",
      },
      {
        url: img12,
        caption: "Streamlined process flow",
      },
      {
        url: img13,
        caption: "Dealer success stories",
      }
    ],
    bottomImage: {
      url: "https://example.com/dealer-ecosystem-transformation.jpg",
      caption: "Complete dealer ecosystem transformation",
    },
    category: "Car Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "https://example.com/rupeedot-author.jpg",
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
        url: img14,
        caption: "Credit score factors",
      },
      {
        url: img15,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Blogs</h1>
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
