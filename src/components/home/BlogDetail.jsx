"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useMemo } from "react"
import { ArrowLeft, Clock } from "lucide-react"
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import img8 from "../../assets/8.png"
import img9 from "../../assets/9.png"
import img10 from "../../assets/10.png"
import img11 from "../../assets/11.png"
import img12 from "../../assets/12.png"
import img13 from "../../assets/13.png"
import img14 from "../../assets/14.png"
import img15 from "../../assets/15.png"
import blog1 from "../../assets/blog1 .jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"
import blog4 from "../../assets/blog4.jpg"
import blog5 from "../../assets/blog5.jpg"

// Sample blog data with additional images for all posts
const blogPosts = [
  {
    id: 1,
    title: "Disrupting Auto Finance & Solving Dealer Challenges",
    excerpt: "A Fintech Disruptor in Auto Finance",
    content: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; font-size: 18px; overflow: hidden;">
        <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">RupeeDot: A Fintech Disruptor in Auto Finance</h2>
        <p style="margin-bottom: 20px;">RupeeDot is not only another fintech company; it's a disruptor in India's auto finance space. It's a Pune-based company operating under Indicorn Financial Services Private Ltd and works as a facilitator between lenders and borrowers. Imagine it as a dating website for car loans. By tying up with banks, NBFCs and alternative lenders, RupeeDot collects numerous loan options so customers don't need to apply separately to each financier.</p>
         <img 
  src="${img1}" 
  alt="RupeeDot Logo" 
 
  style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
        >
        <p style="margin-bottom: 20px;">The system operates fast and with efficiency, saving time and minimizing the drudgery of paperwork most borrowers experience. It also provides transparent navigation through each process, helping to establish trust and making auto financing more accessible.</p>
         
        <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Differentiating RupeeDot from Conventional Auto Financing</h2>
        <p style="margin-bottom: 20px;">Conventional auto loans in India tend to be a cumbersome obstacle course. You are presented with copious paperwork, credit score restrictions and lengthy waiting times. The process seems designed to test your patience at every turn.</p>
        <p style="margin-bottom: 20px;">Many applicants find that the time and effort needed to fill out forms and meet strict requirements is overwhelming. One small mistake can cause extra delays as you're asked for additional documents or clarifications. As a result, what should be a straightforward procedure turns into a stressful experience that discourages many potential buyers.</p>
        <p style="margin-bottom: 30px;">This old-fashioned approach not only wastes your time but also introduces stress into an otherwise vital purchase. Fortunately, new solutions are on the horizon that seek to make auto loans easier. Sites like Rupeedot are revolutionizing the process by streamlining applications and making them more accessible. Their contemporary approach is assisting Indians in breaking down traditional barriers and moving one step closer to driving a car.</p>

        <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Speed and Simplicity</h2>
        <p style="margin-bottom: 20px;">Whereas banks can take days to approve applications, Rupeedot's digital platform approves loans in a matter of hours. Their platform relies on intelligent digital tools that auto-fill forms, verify documents and recommend the optimal loan for you.</p>
        <p style="margin-bottom: 20px;">Through advanced algorithms and automation, they significantly minimize the possibility of human error and accelerate the entire process. Rather than waiting and constantly calling bank officials to follow up, you get instant updates that keep you posted at every stage.</p>
        <img 
  src="${img2}" 
  alt="RupeeDot Logo" 
  style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
        >
        <p style="margin-bottom: 30px;">This efficient process saves time and eliminates frustrations that usually accompany conventional practices. With a simple interface and real-time communication, Rupeedot ensures that each application is processed smoothly.</p>

        <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">More Than Credit Scores</h2>
        <p style="margin-bottom: 20px;">Rupeedot is not merely about quick approvals, but also redefines who is considered creditworthy. Instead of rejecting you for merely having a low credit score, they consider your overall financial history. They take into account non-traditional data such as mobile payment history and online purchases to determine if you're a good borrower.</p>
        <p style="margin-bottom: 20px;">This broad approach allows even if you're a young professional with a thin credit file but stable income, you can still get approved. Rupeedot's platform provides banks with a richer understanding of your money management habits. It highlights your money management skills beyond the conventional measures.</p>
        <p style="margin-bottom: 30px;">By taking into account the factors that traditional systems ignore, Rupeedot opens the door for many who have been unjustly excluded in the past. Not only does this new method boost your prospects of loan approval, but it also promotes more prudent financial behavior by acknowledging varied forms of creditworthiness.</p>

        <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">One Application, Multiple Lenders</h2>
        <p style="margin-bottom: 20px;">Making multiple applications to various banks can be quite exhausting. Rupeedot's aggregator platform allows you to apply once and then lets the lenders most likely to accept you have access to your details. That one application process saves you time and trouble by eliminating unnecessary paperwork and time-consuming follow-ups.</p>
        <p style="margin-bottom: 20px;">Their intelligent algorithms evaluate your profile and find the right financiers for you, so you receive the best available choices. It means less of your time wasted on mundane tasks and more time on what's important.</p>
        <img 
  src="${img3}" 
  alt="RupeeDot Logo" 
  style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
        >
        <p style="margin-bottom: 30px;">You don't have to keep checking multiple statuses anymore or repeat the same information for every bank. Rupeedot takes the dirty work out of your hands and makes the entire process easy and convenient. Their methodology is transparent and easy, making sure you have an easy time from beginning to end. Using Rupeedot, you never have to deal with multiple lender applications again.</p>

        <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Technologies and Data-Driven Strategies of Rupeedot</h2>
        <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Data-Driven Underwriting</h3>
        <p style="margin-bottom: 20px;">Rupeedot's competitive advantage lies in its strong data analysis. The platform applies machine learning models to examine 1,000+ data points like social media usage and utility bill payments. These models create comprehensive profiles of borrowers by collecting numerous details regarding their daily financial activity.</p>
        <p style="margin-bottom: 20px;">This method assists in presenting a comprehensive picture of a borrower's financial behavior and stability. The system functions particularly well for individuals who may not have an official credit record. For instance, if you're a courier driver without an official credit track record, you may still be able to receive regular income using digital wallets.</p>
        <p style="margin-bottom: 30px;">Rupeedot's system detects that regular income and recommends lenders who are best suited. It also examines other indicators such as spending patterns and payment behavior in order to judge risk better. This clever utilization of data is good for both lenders and borrowers as it provides a more equitable, more comprehensive assessment process.</p>
      </div>
    `,  
    // Main hero image
    heroImage: blog1,
    category: "Car Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "/placeholder.svg?height=80&width=80",
    featured: true,
    tags: ["Car Loan", "Loan Transfer", "Used Car", "Finance"],
  },
  {
    id: 2,
    title: "Market Overview: New vs. Used Car Sales",
    excerpt: "A Fintech Disruptor in Auto Finance",
    content: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; font-size: 18px; overflow: hidden;">
    <h1 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Market Overview: New vs. Used Car Sales</h1>
    <img
      src="${img4}"
      alt="RupeeDot Logo"
      style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
    />
    <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Key Insight</h2>
    <ul style="font-size: 18px;">
      <li style="margin-bottom: 8px;">2024 Sales Volume: ~5.4 million units</li>
      <li style="margin-bottom: 8px;">Projected 2030 Sales Volume: ~10.8 million units (CAGR: 13%)</li>
      <li style="margin-bottom: 8px;">2024 Market Size: USD 36 billion</li>
      <li>Projected 2033 Market Size: USD 101 billion</li>
    </ul>
    
    <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">New Car Market</h2>
    <ul style="font-size: 18px;">
      <li style="margin-bottom: 8px;">2024 Sales Volume: ~4.16 million units</li>
      <li style="margin-bottom: 8px;">2024 Market Size: USD 121.5 billion</li>
      <li>Projected 2033 Market Size: USD 247.4 billion (CAGR: 7.13%)</li>
    </ul>
    

    <p style="font-size: 18px; background: #f8f9fa; padding: 15px; border-left: 4px solid #3498db; margin-bottom: 20px;">
      <strong>Key Trend:</strong> Used car market has surpassed new car sales in volume and is increasing almost twice as quickly, reflecting the dramatic change in consumer behavior.
    </p>
    
    <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Finance Penetration & Challenges</h2>
      <img
      src="${img5}"
      alt="RupeeDot Logo"
      style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
    />
    
    <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">New Car Financing</h3>
    <ul style="font-size: 18px;">
      <li style="margin-bottom: 8px;">2024 Penetration: <span style="color: #e74c3c; font-weight: bold;">75%</span></li>
      <li>Reflects high reliance on financing for buying new cars.</li>
    </ul>
   
    <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Used Car Financing</h3>
    <ul style="font-size: 18px;">
      <li style="margin-bottom: 8px;">2022 Penetration: <span style="color: #e74c3c;">15%</span></li>
      <li style="margin-bottom: 8px;">2024 Penetration: <span style="color: #e74c3c; font-weight: bold;">23%</span></li>
      <li>Estimated 2025 Penetration: <span style="color: #e74c3c; font-weight: bold;">30%</span></li>
    </ul>
    <p style="font-size: 18px; margin-bottom: 20px;">Financing of used cars is growing fast but remains underpenetrated due to structural issues.</p>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Dominance of Unorganized Sector</h3>
      <p style="font-size: 18px; margin-bottom: 0;">
        71% of used car purchases are made through individual sellers or local dealers. Inadequate standard documentation and credit evaluation limit lender involvement.
      </p>
    </div>
   
    
    <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Higher Interest Rates</h3>
    <p style="font-size: 18px; margin-bottom: 20px;">
      Used car financing has higher interest starting from <span style="color: #e74c3c; font-weight: bold;">10-18%</span> depending upon lenders and customers profile compared to new car financing (<span style="color: #27ae60; font-weight: bold;">~8.5%</span>).
    </p>
    
    <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Limited Rural Penetration</h3>
    <p style="font-size: 18px; margin-bottom: 20px;">
      Rural areas have largely unorganized transactions, limiting access to organized financing options.
    </p>
    
    <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Urban vs. Rural Market Dynamics</h2>
    
    
    <div style="display: flex; gap: 20px; margin: 20px 0;">
      <div style="flex: 1; background: #e8f4fc; padding: 15px; border-radius: 5px;">
        <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Rural Markets</h3>
        <ul style="font-size: 18px;">
          <li style="margin-bottom: 8px;">Mobility needs driven by low-cost.</li>
          <li style="margin-bottom: 8px;">Heavily cash-based buying and local dealerships.</li>
          <li>Limited exposure to organized players and finance.</li>
        </ul>
      </div>
      <div style="flex: 1; background: #e8f4fc; padding: 15px; border-radius: 5px;">
        <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Urban Markets</h3>
        <ul style="font-size: 18px;">
          <li style="margin-bottom: 8px;">Extensive adoption of organized dealerships and digital platforms.</li>
          <li style="margin-bottom: 8px;">Increased demand for SUVs and luxury used cars.</li>
          <li>Improved access to certified cars and organized loans.</li>
        </ul>
      </div>
    </div>
     <img
      src="${img6}"
      alt="RupeeDot Logo"
      style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
    />
    
    <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Growth Opportunity</h2>
    <p style="font-size: 18px; margin-bottom: 20px;">
      Rural India is an open market where organized players and NBFCs can significantly grow.
    </p>
    
    <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Strategic Imperatives for Market Expansion</h2>
    
    <div style="background: #f1f8fe; padding: 20px; border-radius: 5px; margin: 20px 0;">
      <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">1. Enlarging Organized Dealership Networks</h3>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;">Open more certified pre-owned dealerships in Tier 2/3/4 cities and rural locations.</li>
        <li>Increase consumer confidence through uniform documentation and vehicle certification.</li>
      </ul>
    </div>
    
    <div style="background: #f1f8fe; padding: 20px; border-radius: 5px; margin: 20px 0;">
      <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">2. Financing Solution Innovations</h3>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;">Provide flexible EMI schedules, low ticket size loans, and credit-lite onboarding suited for rural and first-time buyers.</li>
        <li>Join hands with NBFCs and fintechs for extended reach.</li>
      </ul>
    </div>
    
    <div style="background: #f1f8fe; padding: 20px; border-radius: 5px; margin: 20px 0;">
      <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">3. Leveraging Digital Platforms</h3>
      <p style="font-size: 18px; margin-bottom: 20px;">Facilitate end-to-end online buying and financing experiences leveraging:</p>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;">Virtual inspections</li>
        <li style="margin-bottom: 8px;">AI-based valuations</li>
        <li>Digital KYC & loan approvals</li>
      </ul>
    </div>
    
    <div style="background: #f1f8fe; padding: 20px; border-radius: 5px; margin: 20px 0;">
      <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">4. Driving Consumer Awareness</h3>
      <p style="font-size: 18px; margin-bottom: 20px;">Implement targeted education initiatives on:</p>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;">Advantages of certified second-hand vehicles</li>
        <li style="margin-bottom: 8px;">Availability of formal finance</li>
        <li>Best practices in vehicle ownership</li>
      </ul>
    </div>
    
    <div style="background: #e8f4fc; padding: 25px; border-radius: 5px; margin: 30px 0;">
      <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Conclusion</h2>
      <p style="font-size: 18px; margin-bottom: 20px;">
        India's used vehicle market is on the path to becoming a <span style="font-weight: bold; color: #e74c3c;">₹100 billion+</span> opportunity by the end of the next decade. By addressing financing shortfalls, increasing organized infrastructure, and leveraging digital enablers, stakeholders can re-take control—propelling financial inclusion, affordability, and growth in both urban and rural India.
      </p>
    </div>
  </div>`,
    heroImage: blog2,
    category: "Car Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "/placeholder.svg?height=80&width=80",
    featured: true,
    tags: ["Car Loan", "Loan Transfer", "Used Car", "Finance"],
  },
  {
    id: 3,
    title: "What is a Personal Loan?",
    excerpt: "An unsecured loan for various personal financial needs",
    content: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; font-size: 18px; overflow: hidden;">
      <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Understanding Personal Loans</h2>
      <p style="margin-bottom: 20px;">A personal loan is an unsecured loan (not backed by any collateral) designed to fulfill various individual financial requirements. It provides:</p>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;">Easy access to funds</li>
        <li style="margin-bottom: 8px;">Fixed monthly payments</li>
        <li style="margin-bottom: 8px;">Flexible repayment tenure</li>
      </ul>
      <p style="margin-bottom: 20px;">This makes it particularly suitable for working professionals who need quick financing without pledging assets.</p>
      
      <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">When to Use a Personal Loan</h2>
      <p style="margin-bottom: 20px;">Personal loans can be employed for various legitimate personal purposes including:</p>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;"><strong style="color: #e74c3c;">Medical emergencies:</strong> Cover unexpected healthcare expenses</li>
        <li style="margin-bottom: 8px;"><strong style="color: #e74c3c;">Wedding costs:</strong> Finance your dream wedding</li>
        <li style="margin-bottom: 8px;"><strong style="color: #e74c3c;">Travel and holidays:</strong> Fund your vacation plans</li>
        <li style="margin-bottom: 8px;"><strong style="color: #e74c3c;">Home renovation:</strong> Upgrade or repair your living space</li>
        <li style="margin-bottom: 8px;"><strong style="color: #e74c3c;">Debt consolidation:</strong> Combine multiple debts into one manageable payment</li>
        <li style="margin-bottom: 8px;"><strong style="color: #e74c3c;">Electronics/gadgets:</strong> Purchase the latest devices</li>
        <li style="margin-bottom: 8px;"><strong style="color: #e74c3c;">Education/skill enhancement:</strong> Invest in your professional development</li>
      </ul>
      <img
      src="${img8}"
      alt="RupeeDot Logo"
      style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
    />
      <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Eligibility Criteria</h2>
      <p style="margin-bottom: 20px;">To qualify for a personal loan, applicants typically need to meet these requirements:</p>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;"><strong style="color: #3498db;">Age:</strong> 21 to 60 years</li>
        <li style="margin-bottom: 8px;"><strong style="color: #3498db;">Income:</strong> Minimum ₹15,000 monthly salary (varies by city and lender)</li>
        <li style="margin-bottom: 8px;"><strong style="color: #3498db;">Employment:</strong> At least 6-12 months with current employer</li>
        <li style="margin-bottom: 8px;"><strong style="color: #3498db;">Credit Score:</strong> 700 or above (ideal range)</li>
        <li style="margin-bottom: 8px;"><strong style="color: #3498db;">Employment Type:</strong> Full-time salaried with registered company</li>
        <li style="margin-bottom: 8px;"><strong style="color: #3498db;">Residency:</strong> Must be an Indian resident</li>
      </ul>
      
      <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Types of Personal Loans</h2>
      <p style="margin-bottom: 20px;">Personal loans are often categorized by their intended use:</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 24px; color: #2c3e50; margin-bottom: 10px;">Medical Loan</h3>
          <p style="font-size: 18px;">For healthcare expenses and emergency treatments</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 24px; color: #2c3e50; margin-bottom: 10px;">Wedding Loan</h3>
          <p style="font-size: 18px;">To cover marriage ceremony costs</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 24px; color: #2c3e50; margin-bottom: 10px;">Travel Loan</h3>
          <p style="font-size: 18px;">For vacation funding</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 24px; color: #2c3e50; margin-bottom: 10px;">Home Improvement Loan</h3>
          <p style="font-size: 18px;">For renovations and repairs</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 24px; color: #2c3e50; margin-bottom: 10px;">Education Loan (Short-term)</h3>
          <p style="font-size: 18px;">For skill development courses</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 24px; color: #2c3e50; margin-bottom: 10px;">Gadget/Appliance Loan</h3>
          <p style="font-size: 18px;">For purchasing electronics</p>
        </div>
        <div style="background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h3 style="font-size: 24px; color: #2c3e50; margin-bottom: 10px;">Debt Consolidation Loan</h3>
          <p style="font-size: 18px;">To combine multiple debts</p>
        </div>
      </div>
      <img
      src="${img9}"
      alt="RupeeDot Logo"
      style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
    />
      
      <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Key Features & Benefits</h2>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;"><strong style="color: #27ae60;">No collateral:</strong> No need for guarantors or asset pledging</li>
        <li style="margin-bottom: 8px;"><strong style="color: #27ae60;">Quick disbursal:</strong> Funds typically available within 24-48 hours</li>
        <li style="margin-bottom: 8px;"><strong style="color: #27ae60;">Loan amount:</strong> ₹10,000 to ₹25 lakh range</li>
        <li style="margin-bottom: 8px;"><strong style="color: #27ae60;">Repayment period:</strong> Flexible 12 to 60 month terms</li>
        <li style="margin-bottom: 8px;"><strong style="color: #27ae60;">Interest rates:</strong> Fixed rates starting from ~10.5% p.a.</li>
        <li style="margin-bottom: 8px;"><strong style="color: #27ae60;">Transparent:</strong> Minimal paperwork with clear charges</li>
        <li style="margin-bottom: 8px;"><strong style="color: #27ae60;">Pre-approved offers:</strong> Available for qualified applicants</li>
      </ul>
      
      <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Required Documentation</h2>
      <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">1. Identity Proof (mandatory)</h3>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;">PAN Card (compulsory)</li>
        <li style="margin-bottom: 8px;">Aadhaar Card (compulsory)</li>
        <li style="margin-bottom: 8px;">Passport</li>
        <li style="margin-bottom: 8px;">Voter ID</li>
        <li style="margin-bottom: 8px;">Driving License</li>
      </ul>
      
      <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">2. Address Proof</h3>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;">Aadhaar Card</li>
        <li style="margin-bottom: 8px;">Passport</li>
        <li style="margin-bottom: 8px;">Recent utility bills (within 2 months)</li>
        <li style="margin-bottom: 8px;">Rent agreement (if applicable)</li>
      </ul>
      
      <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">3. Income Proof</h3>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;">Last 3-6 months salary slips</li>
        <li style="margin-bottom: 8px;">Last 3-6 months bank statements (salary account)</li>
      </ul>
      
      <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">4. Employment Proof</h3>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;">Employee ID card</li>
        <li style="margin-bottom: 8px;">Appointment letter (for recent hires)</li>
        <li style="margin-bottom: 8px;">Form 16/ITR (for larger loan amounts)</li>
      </ul>
      
      <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">5. Photographs</h3>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;">1-2 recent passport-size photos</li>
      </ul>
      
      <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">6. Application Form</h3>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;">Completed and signed application</li>
      </ul>
      <img
      src="${img10}"
      alt="RupeeDot Logo"
      style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
    />
      <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Tips to Improve Approval Chances</h2>
      <ul style="font-size: 18px;">
        <li style="margin-bottom: 8px;"><strong style="color: #9b59b6;">Maintain good credit:</strong> Keep score above 700</li>
        <li style="margin-bottom: 8px;"><strong style="color: #9b59b6;">Avoid multiple applications:</strong> Don't apply with several lenders at once</li>
        <li style="margin-bottom: 8px;"><strong style="color: #9b59b6;">Manage debt ratio:</strong> Keep EMIs under 40-50% of net salary</li>
        <li style="margin-bottom: 8px;"><strong style="color: #9b59b6;">Provide accurate information:</strong> Submit truthful income and KYC documents</li>
        <li style="margin-bottom: 8px;"><strong style="color: #9b59b6;">Check employer benefits:</strong> Utilize company tie-ups if available</li>
        <li style="margin-bottom: 8px;"><strong style="color: #9b59b6;">Borrow responsibly:</strong> Request amounts aligned with your income</li>
      </ul>
    </div>
    `,
    heroImage: blog3 ,
    category: "Personal Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "/placeholder.svg?height=80&width=80",
    featured: true,
    tags: ["Personal Loan", "Unsecured Loan", "Finance", "Quick Loan"],
  },
  {
    id: 4,
    title: "Key Challenges Faced by Used Car Dealers and How RupeeDot Is Solving Them",
    excerpt: "A Fintech Disruptor in Auto Finance",
    content: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; font-size: 18px; overflow: hidden;">
      <h1 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Key Challenges Faced by Used Car Dealers and How RupeeDot Is Solving Them?</h1>
        <p style="margin-bottom: 20px;">Indian used car dealers, particularly small and medium-sized dealerships, operate in a high-speed market but are often hindered by slow, inefficient financing procedures. One of the largest challenges they encounter is slow loan approvals, which not only delays the sales process but also erodes customer confidence. Customers today expect near-instant approval, and extended waiting times frequently result in drop-offs or lost business. This directly affects the dealer's revenue, inventory turnover, and brand image.</p>
        
        <p style="margin-bottom: 20px;">RupeeDot fills this vital gap by providing a real-time, tech-savvy loan approval environment. With smart automation, pre-approved eligibility checks, and soft bureau integrations, dealers can now offer instant credit decisions directly from their showroom floor. RupeeDot converts what was previously a time-consuming bottleneck into a hassle-free, swift, and customer-centric process—enabling dealers to close more deals quicker.</p>

        <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Challenge 1: Slow Loan Sanctions Causing Sales Loss</h2>
         <img src="${img11}"
      alt="RupeeDot Logo"
      style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
    />
        <ul style="font-size: 18px;">
          <li style="margin-bottom: 8px;">Excessive waiting time for loan approvals leads to customer attrition</li>
          <li style="margin-bottom: 8px;">Manual, obsolete methods used by most financiers cause disbursal delays</li>
          <li style="margin-bottom: 8px;">Cash flow challenges due to delayed dealer payments</li>
          <li>Banks/NBFCs favor prime buyers, leaving thin-file customers underserved</li>
        </ul>

        <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">RupeeDot's Solution:</h3>
        <ul style="font-size: 18px;">
          <li style="margin-bottom: 8px;"><strong>Techno-Driven Loan Processing:</strong> AI-based underwriting and automated document verification accelerate loan sanctions</li>
          <li style="margin-bottom: 8px;"><strong>Dealer-Lender Matching:</strong> Access to multiple financiers reduces sole-lender dependence</li>
          <li><strong>Pre-Approval System:</strong> Instant loan eligibility checks help close sales faster</li>
        </ul>
      

        <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Challenge 2: High Rejection Rates for Non-Traditional Borrowers</h2>
         <img src="${img12}"
      alt="RupeeDot Logo"
      style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
    />
        <ul style="font-size: 18px;">
          <li style="margin-bottom: 8px;">Customers in smaller cities often lack strong credit history</li>
          <li style="margin-bottom: 8px;">Self-employed buyers, gig workers, and cash-income individuals struggle to get financing</li>
          <li>High rejection rates cause dealers to lose potential buyers</li>
        </ul>

        <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">RupeeDot's Solution:</h3>
        
        <ul style="font-size: 18px;">
          <li style="margin-bottom: 8px;"><strong>Smart Credit Scoring:</strong> Proprietary scorecard evaluates alternative data points (bank transactions, income patterns)</li>
          <li style="margin-bottom: 8px;"><strong>Expanded Lender Network:</strong> Connection with diverse banks, NBFCs, and fintech lenders</li>
          <li><strong>Top-Up & Personal Loans:</strong> Additional funding options enhance purchase flexibility</li>
        </ul>

        <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Challenge 3: Delayed Payments Hurting Dealer Liquidity</h2>
        <ul style="font-size: 18px;">
          <li style="margin-bottom: 8px;">Dealers wait weeks for loan disbursements after sales</li>
          <li style="margin-bottom: 8px;">Limited working capital restricts inventory expansion</li>
          <li>Tight payout cycles from financiers affect dealer liquidity</li>
        </ul>

        <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">RupeeDot's Solution:</h3>
        <ul style="font-size: 18px;">
          <li style="margin-bottom: 8px;"><strong>Faster Payouts:</strong> Streamlined process ensures quicker fund transfer post-sanction</li>
          <li style="margin-bottom: 8px;"><strong>Unified Finance Channel:</strong> Single window for all loan applications</li>
        </ul>

        <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Challenge 4: Disorganized Multi-Lender Processes</h2>
        <ul style="font-size: 18px;">
          <li style="margin-bottom: 8px;">Dealers juggle multiple financiers and applications inefficiently</li>
          <li style="margin-bottom: 8px;">Complexity from varying lender requirements and documentation</li>
          <li>Lack of real-time tracking for small dealers</li>
        </ul>

        <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">RupeeDot's Solution:</h3>
        <img src="${img13}"
      alt="RupeeDot Logo"
      style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
    />
        <ul style="font-size: 18px;">
          <li style="margin-bottom: 8px;"><strong>Single Dashboard Platform:</strong> Manage all customer loans from one interface</li>
          <li style="margin-bottom: 8px;"><strong>End-to-End Support:</strong> Real-time updates on loan status and document approvals</li>
          <li><strong>AI-Powered Lender Matching:</strong> Automatically recommends optimal financiers based on eligibility</li>
        </ul>
      

        <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">RupeeDot's Dealership Mission</h2>
        <p style="margin-bottom: 20px; font-style: italic;">To empower auto dealers with fast, reliable, and seamless financing solutions that drive sales, improve cash flow, and maximize loan approvals for all customer segments.</p>
      </div>

    `,
    heroImage: blog4,
    category: "Car Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "/placeholder.svg?height=80&width=80",
    featured: true,
    tags: ["Car Loan", "Loan Transfer", "Used Car", "Finance"],
  },
  {
    id: 5,
    title: "What Determines Your Loan Eligibility in India?",
    excerpt: "Key factors that determine your loan approval in India",
    content: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; font-size: 18px; overflow: hidden;">
     <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">A Borrower's Easy Guide</h2>
     
     <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Introduction</h2>
     <p style="margin-bottom: 20px;">Before you go and apply for a loan, it makes sense to learn what lenders require to decide whether or not you qualify. Knowing these factors will enable you to prepare more effectively and maximize the chances of having your loan sanctioned promptly.</p>

     <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">1. Credit Score and Credit History</h2>
     <p style="margin-bottom: 20px;">Your credit history (such as your CIBIL record) reflects how well you've handled credit or loans in the past.</p>
     <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Key Points:</h3>
     <ul style="font-size: 18px;">
       <li style="margin-bottom: 8px;">A good score (generally above 750) indicates you're a low-risk borrower</li>
       <li style="margin-bottom: 8px;">Late payments, defaults, or excessive applications for loans may decrease your score</li>
     </ul>
     <p style="margin-bottom: 20px;"><strong>Advice:</strong> Pay bills and EMIs regularly to maintain a healthy score</p>
     <img src="${img14}"
      alt="RupeeDot Logo"
      style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
    />

     <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">2. Income and Employment Stability</h2>
     <p style="margin-bottom: 20px;">Banks need to be confident that you have sufficient income to repay the loan.</p>
     <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Documentation Requirements:</h3>
     <ul style="font-size: 18px;">
       <li style="margin-bottom: 8px;">Salaried individuals must show salary slips and bank statements</li>
       <li style="margin-bottom: 8px;">Self-employed individuals must give tax returns and business documents</li>
     </ul>
     <p style="margin-bottom: 20px;">A consistent job or business record assists with establishing trust with lenders.</p>

     <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">3. Outstanding Loans and Debt</h2>
     <p style="margin-bottom: 20px;">If you have existing loans or credit card debt, banks will verify that you can manage additional debt.</p>
     <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Debt-to-Income Ratio:</h3>
     <ul style="font-size: 18px;">
       <li style="margin-bottom: 8px;">They compute a ratio of your monthly debts to your income</li>
       <li style="margin-bottom: 8px;">The lower this ratio, the better your chance to get a new loan</li>
     </ul>
     <p style="margin-bottom: 20px;"><strong>Tip:</strong> Try to clear or reduce existing loans before applying.</p>

     <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">4. Your Age and Loan Duration</h2>
     <p style="margin-bottom: 20px;">Your age affects how long you can repay the loan.</p>
     <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Age Considerations:</h3>
     <ul style="font-size: 18px;">
       <li style="margin-bottom: 8px;">Most banks lend to people aged 21 to 60</li>
       <li style="margin-bottom: 8px;">Younger borrowers usually get longer repayment periods and lower monthly payments</li>
       <li style="margin-bottom: 8px;">Older applicants might get shorter loan terms</li>
     </ul>
     <img src="${img15}"
      alt="RupeeDot Logo"
      style="width: 100%; max-width: 400px; margin: 0 0 20px 20px; border-radius: 8px; display: block; float: right; clear: right;"
    />

     <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">5. Loan Amount and Purpose</h2>
     <p style="margin-bottom: 20px;">Banks think about why you require the loan and how much you are requesting.</p>
     <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Loan Types:</h3>
     <ul style="font-size: 18px;">
       <li style="margin-bottom: 8px;">Home loans need collateral (property), so you can borrow more money</li>
       <li style="margin-bottom: 8px;">Personal loans do not need collateral but have lower limits</li>
     </ul>
     <p style="margin-bottom: 20px;"><strong>Important:</strong> Be sincere and specific about why you need the loan.</p>

     <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">6. Collateral (Security for the Loan)</h2>
     <p style="margin-bottom: 20px;">For secured loans such as home or automobile loans, the bank will verify the property or asset you're providing.</p>
     <h3 style="font-size: 24px; color: #34495e; margin-bottom: 10px;">Collateral Details:</h3>
     <ul style="font-size: 18px;">
       <li style="margin-bottom: 8px;">The worth of your collateral determines the highest loan amount</li>
       <li style="margin-bottom: 8px;">Banks typically lend between 75-90% of the value of the asset</li>
       <li style="margin-bottom: 8px;">This makes the loan more secure for the bank and frequently results in improved interest rates for you</li>
     </ul>

     <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">7. Other Key Points</h2>
     <ul style="font-size: 18px;">
       <li style="margin-bottom: 8px;">Address and identity proof are required to confirm your identity</li>
       <li style="margin-bottom: 8px;">A positive record with your bank (such as savings on a regular basis) may assist your application</li>
       <li style="margin-bottom: 8px;">Occasionally, a co-applicant or guarantor can enhance your eligibility for a loan</li>
     </ul>
     
     <h2 style="font-size: 28px; color: #2c3e50; margin-bottom: 15px; border-bottom: 2px solid #f1c40f; padding-bottom: 5px;">Conclusion</h2>
     <p style="margin-bottom: 20px;">Understanding what impacts your loan qualification enables you to prepare and apply confidently. Keep your credit rating high, have a stable income, have control over your current debts, and be open about your loan requirements. This makes it easier and quicker for you.</p>
    </div>
    `,
    heroImage: blog5,
    category: "Car Loans",
    views: 645,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: "/placeholder.svg?height=80&width=80",
    featured: true,
    tags: ["Car Loan", "Loan Transfer", "Used Car", "Finance"],
  },
]

// Related posts function
// (Removed unused getRelatedPosts function)

export default function BlogDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  // Removed unused 'copied' state

  useEffect(() => {
    const postId = Number.parseInt(id)
    const foundPost = blogPosts.find((post) => post.id === postId)

    if (foundPost) {
      setPost(foundPost)
      window.scrollTo(0, 0)
    }
  }, [id])

  // Removed unused splitHTMLAfterFirstParagraph function

  // Removed unused firstPart and remainingPart variables

  // Removed unused copyToClipboard function

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
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
    <div className="bg-[#f5f5ec] min-h-screen pb-16">
      {/* Hero Section - Full width and height without gaps */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        <img 
          src={post.heroImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10">
        <div className="bg-[#f5f5ec] rounded-xl p-8 md:p-16 mb-8">
          <div className="flex flex-col gap-8">
            <article className="w-full max-w-6xl mx-auto prose prose-xl max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}