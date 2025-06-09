import React from 'react';
import { FileText, Shield, Users, CreditCard, AlertTriangle, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  const sections = [
    { id: "authorization", title: "Authorization & Consent", icon: Shield },
    { id: "privacy", title: "Privacy Policy", icon: FileText },
    { id: "membership", title: "Membership Eligibility", icon: Users },
    { id: "account", title: "Account & Registration", icon: Mail },
    { id: "charges", title: "Charges & Fees", icon: CreditCard },
    { id: "usage", title: "Website Usage Guidelines", icon: AlertTriangle },
    { id: "content", title: "Content & Intellectual Property", icon: FileText }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f5f5ec] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
          </p>
        </div>

        {/* Navigation */}
        <div className="mb-12 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <section.icon className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Authorization & Consent */}
          <section id="authorization" className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800">Authorization & Consent</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p>
               Terms And Conditions Individuals who are registering themselves at www.RupeeDot.Com, are authorizing us & our associated Banks/NBFCs partners and advertisers to give them an sms/call/e-mail to offer services for the product they have opted for, providing product knowledge, intimation of promotional offers running on the website & various FINANCIAL offers from associated third parties. And Irrespective of the fact if they have subscribed under DND or DNC service still RupeeDot.Com and partnering Banks/NBFCs and advertisers are authorized to give a call/sms/e-mail for the aforesaid purposes.
              </p>
            <br />
              <p>
                You hereby consent to RupeeDot being appointed as your authorised representative to receive your Credit Information from Experian/CIBIL/EQUIFAX/CRIF for the purpose of Credit Assessment of the End User to Advise him on the best loan offers (End Use Purpose) or expiry of 6 months from the date the consent is collected; whichever is earlier. You hereby also agree to Terms & Conditions.
              </p>
               <br />
              <p>
                RupeeDot.Com ensures that the individual's loan application is sent to the bank which they have opted for, in case or otherwise, the lender/bank will be selected only with the customer's due consent. All the loan schemes are on discretion with the associated Banks/NBFCs partners and Advertisers.
              </p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy" className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800">Privacy Policy</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p>
                This Privacy Policy covers RupeeDot.Com treatment of personally identifiable information that RupeeDot.Com collects when people are on the RupeeDot.Com site. This policy also covers treatment of any personally identifiable information that RupeeDot.Com business partners share with RupeeDot.Com. This policy is not applicable to the practices of companies that RupeeDot.Com does not own or regulate, or to individuals that RupeeDot.Com does not employ or manage.
              </p>
              <br />
              <p>
                RupeeDot collects personally identifiable information when individuals provide their details on the platform. This information may be gathered when users apply for RupeeDot's products or services, browse RupeeDot's pages, or participate in promotions or offers. Additionally, RupeeDot may receive business-related personally identifiable information from its authorized partners.
              </p>
              <br />
              <p>
                When individuals attempt to register at RupeeDot.Com, they are asked for their first name, last name, gender, zip/postal code, email, country, time zone, state, city and birth date. Once they get registered with RupeeDot.Com and sign in to our services, they will not be anonymous to us.
              </p>
              <br />
              <p>
                Also during the registration process, they will be requested to register their mobile numbers and email id, pager, or any other wireless device for communication in order to receive text messages, notifications, and other services. By registration they authorize us to send sms/email alerts to subscribers for their login details and alerts or some advertising messages/emails from us.
              </p>
              <br />
              <p>
                If at any time during the service tenure registered individuals wish to stop these sms/email alerts they can write an email to us along with mobile numbers and their mobile number will be deleted from the alerts database.
              </p>
              <br />
              <p>
                RupeeDot.Com does not provide the guarantee whether the advertisers are good, credible or quality sellers of goods / service providers. People must satisfy themselves about all relevant points prior to availing of the terms of service. RupeeDot.Com has not discussed any terms of engagement with any of the listed advertisers. Purchasing of products or services from advertisers shall be at their own risk.
              </p>
              <br />
              <p>
                We care about your privacy as much as you do. What it means is:
              </p>
              <br />
              <ol className="list-decimal pl-5 space-y-2">
                <li>We never share your personal information with others unless required by law.</li>
                <li>Your information is used only to complete the switching requested by you.</li>
                <li>We send you updates, promotions and offers but you can easily remove yourself from our email list. But we maintain your records in our archives to readily serve you in the future.</li>
                <li>Our highest priority is to make sure that your information stays safe and secure. This is why we take steps to make sure that our servers and your information are completely protected.</li>
              </ol>
              <br />
              <p>Your use of a RupeeDot.Com website www.RupeeDot.Com (hereinafter referred to as “RupeeDot.Com”) and services and tools are governed by the following terms and conditions. If you transact on RupeeDot.Com, you shall be subject to the policies that are applicable to the website for such transactions. By use of the website, you are contracting with RupeeDot.Com Technologies and Services Private Limited, a company incorporated under Companies Act, 1956 and these terms and conditions constitute your binding obligations.</p>
              <br />
            <p>For the purpose of these terms of use, wherever the context so requires ‘You’ shall mean any natural or legal person who has agreed to become a member of the Website by providing sign up data while registering on the Website.</p>
            <br />
            <p>When you use any of the services provided by the RupeeDot.Com, including but not limited to service provider comparisons, registering for switching and using information available on the Website you will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service. RupeeDot.Com reserves the right, at its sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time. It is your responsibility to check these Terms of Use periodically for changes. Your continued use of the Site following the posting of changes will mean that you accept and agree to the changes.</p>
            <br />
            <p>As long as you comply with these Terms of Use, RupeeDot.Com grants you a personal, non-exclusive, non-transferable, limited privilege to enter and use the Site.</p>
            <br />
            <p>ACCESSING, BROWSING OR OTHERWISE USING THE SITE INDICATES YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS IN THIS AGREEMENT, SO PLEASE READ THIS AGREEMENT CAREFULLY BEFORE PROCEEDING

            </p>
            <br />
                          </div>

          </section>

          {/* Membership Eligibility */}
          <section id="membership" className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800">Membership Eligibility</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p>
                Use of the RupeeDot.Com Website is available only to persons who can form legally binding contracts under Indian Contract Act, 1872. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872 including minors, un-discharged insolvents etc. are not eligible to use the RupeeDot.Com Website. If you are a minor i.e. under the age of 18 years, you shall not register as a member of the RupeeDot.Com and shall not transact or use RupeeDot.Com website. As a minor if you wish to use or transact on RupeeDot.Com, such use or transaction may be made by your legal guardian or parents who have registered as users of the RupeeDot.Com. RupeeDot.Com reserves the right to terminate your membership and refuse to provide you with access to the RupeeDot.Com if it is brought to RupeeDot.Com's notice or if it is discovered that you are under the age of 18 years.
              </p>
            </div>
          </section>

          {/* Account & Registration */}
          <section id="account" className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800">Account & Registration</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p>
                If you use RupeeDot.Com, you shall be responsible for maintaining the accuracy of the information that you provide. You agree that if you provide any information that is untrue, inaccurate, not current or incomplete or RupeeDot.Com has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, or not in accordance with the this Terms of Use, RupeeDot.Com has the right to indefinitely suspend or terminate or block access of your membership with RupeeDot.Com and refuse to provide you with access to the Website.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Communications</h3>
              <p>
                When You use the Website or send emails or other data, information or communication to RupeeDot.Com, You agree and understand that You are communicating with RupeeDot.Com through electronic records and You consent to receive communications via electronic records from RupeeDot.Com periodically and as and when required. RupeeDot.Com may communicate with You by email or by such other mode of communication, electronic or otherwise.
              </p>
            
            </div>
          </section>

          {/* Charges & Fees */}
          <section id="charges" className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <CreditCard className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800">Charges & Fees</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p>
                RupeeDot.Com does not charge any fee for browsing on the RupeeDot.Com Website. RupeeDot.Com charges a fee for executing a switch in service providers on your behalf. However RupeeDot.Com reserves the right to change the fee and change its policies from time to time. In particular, RupeeDot.Com may at its sole discretion introduce new services and modify some or all of the existing services offered on the RupeeDot.Com. In such an event RupeeDot.Com reserves, without notice to You, the right to introduce fees for the new services offered or amend/introduce fees for existing services, as the case may be. Changes to the Fee and related policies shall automatically become effective immediately once implemented on RupeeDot.Com. Unless otherwise stated, all fees shall be quoted in Indian Rupees. You shall be solely responsible for compliance of all applicable laws including those in India for making payments to RupeeDot.Com.
              </p>
            </div>
          </section>

          {/* Website Usage Guidelines */}
          <section id="usage" className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800">Website Usage Guidelines</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p>
                You agree, undertake and confirm that your use of RupeeDot.Com shall be strictly governed by the following binding principles:
              </p>
              <br />
              <p>
                You shall not host, display, upload, modify, publish, transmit, update or share any information that:
              </p>
              <br />
              <ul className="list-disc pl-5 space-y-2">
                <li>Belongs to another person and to which You have no right to.</li>
                <li>Is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, pedophilic, libelous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever; or unlawfully threatening or unlawfully harassing including but not limited to "indecent representation of women" within the meaning of the Indecent Representation of Women (Prohibition) Act, 1986;</li>
                <li>Is misleading in any way</li>
                <li>Is patently offensive to the online community, such as sexually explicit content, or content that promotes obscenity, pedophilia, racism, bigotry, hatred or physical harm of any kind against any group or individual;</li>
                <li>Harasses or advocates harassment of another person;</li>
                <li>involves the transmission of "junk mail," "chain letters," or unsolicited mass mailing or "spamming";</li>
                <li>promotes illegal activities or conduct that is abusive, threatening, obscene, defamatory or libelous;</li>
                <li>infringes upon or violates any third party's rights [(including, but not limited to, intellectual property rights, rights of privacy (including without limitation unauthorized disclosure of a person's name, email address, physical address or phone number) or rights of publicity];</li>
                <li>promotes an illegal or unauthorized copy of another person's copyrighted work (see "Copyright complaint" below for instructions on how to lodge a complaint about uploaded copyrighted material), such as providing pirated computer programs or links to them, providing information to circumvent manufacture-installed copy-protect devices, or providing pirated music or links to pirated music files;</li>
                <li>contains restricted or password-only access pages, or hidden pages or images (those not linked to or from another accessible page);</li>
                <li>provides material that exploits people in a sexual, violent or otherwise inappropriate manner or solicits personal information from anyone;</li>
                <li>provides instructional information about illegal activities such as making or buying illegal weapons, violating someone's privacy, or providing or creating computer viruses;</li>
                <li>contains video, photographs, or images of another person age 18 or older without his or her express written consent and permission or those of any minor (regardless of whether you have consent from the minor or his or her legal guardian).</li>
                 <li>tries to gain unauthorized access or exceeds the scope of authorized access (as defined herein and in other applicable Codes of Conduct or End User Access and License Agreements) to the Sites or to profiles, blogs, communities, account information, bulletins, friend request, or other areas of the Sites or solicits passwords or personal identifying information for commercial or unlawful purposes from other users;</li>
             <li>Engages in commercial activities and/or sales without RupeeDot.Com’s prior written consent such as contests, sweepstakes, barter, advertising and pyramid schemes, or the buying or selling of “virtual” items related to the Sites. Throughout this Terms of Use, RupeeDot.Com “prior written consent” means a communication coming from RupeeDot.Com Legal department, specifically in response to your request, and specifically addressing the activity or conduct for which you seek authorization;</li>
              <li>solicits gambling or engages in any gambling activity which RupeeDot.Com, in its sole discretion, believes is or could be construed as being illegal;</li>
              <li>interferes with another user’s use and enjoyment of the RupeeDot.Com Website or any other individual’s user and enjoyment of similar services;</li>
             <li>Refers to any website or URL that, in the sole discretion of RupeeDot.Com, contains material that is inappropriate for the RupeeDot.Com Website or any other Website, contains content that would be prohibited or violates the letter or spirit of these Terms of Use.</li>
             <li>
              harm minors in any way;
             </li>
             <li>infringes any patent, trademark, copyright or other proprietary rights or third party’s trade secrets or rights of publicity or privacy or shall not be fraudulent or involve the sale of counterfeit or stolen items;</li>
             <li>violates any law for the time being in force;</li>
             <li>deceives or misleads the addressee/ users about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</li>
             <li>impersonate another person;</li>
             <li>contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource; or contains any Trojan horses, worms, time bombs, cancelbots, easter eggs or other computer programming routines that may damage, detrimentally interfere with, diminish value of, surreptitiously intercept or expropriate any system, data or personal information;</li>
             <li>Threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation.</li>
             <li>shall not be false, inaccurate or misleading;</li>
             <li>shall not, directly or indirectly, offer, attempt to offer, trade or attempt to trade in any item, the dealing of which is prohibited or restricted in any manner under the provisions of any applicable law, rule, regulation or guideline for the time being in force.</li>
             <li>shall not create liability for us or cause us to lose (in whole or in part) the services of our ISPs or other suppliers;</li>
              <li>You shall not use any “deep-link”, “page-scrape”, “robot”, “spider” or other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Website or any Content, or in any way reproduce or circumvent the navigational structure or presentation of the Website or any Content, to obtain or attempt to obtain any materials, documents or information through any means not purposely made available through the Website. RupeeDot.Com reserves the right to bar any such activity.</li>
             <li>You shall not attempt to gain unauthorized access to any portion or feature of RupeeDot.Com website, or any other systems or networks connected to RupeeDot.Com Website or to any RupeeDot.Com’s server, computer, network, or to any of the services offered on or through RupeeDot.Com Website, by hacking, password “mining” or any other illegitimate means.</li>
              <li>You shall not probe, scan or test the vulnerability of RupeeDot.Com website or any network connected to RupeeDot.Com website nor breach the security or authentication measures on RupeeDot.Com website or any network connected to RupeeDot.Com Website. You may not reverse look-up, reverse engineer, trace or seek to trace any information on any other user of or visitor to RupeeDot.Com Website, or any other customer of RupeeDot.Com, including any RupeeDot.Com account not owned by you, to its source, or exploit RupeeDot.Com Website or any service or information made available or offered by or through RupeeDot.Com Website, in any way where the purpose is to reveal any information, including but not limited to personal identification or information, other than your own information, as provided for by RupeeDot.Com Website.</li>
             <li>You agree that you will not take any action that imposes an unreasonable or disproportionately large load on the infrastructure of RupeeDot.Com Website or RupeeDot.Com’s systems or networks, or any systems or networks connected to the RupeeDot.Com.</li>
              <li>You agree not to use any device, software or routine to interfere or attempt to interfere with the proper working of the Website or any transaction being conducted on the Website, or with any other person’s use of the Website.</li>
              <li>You may not forge headers or otherwise manipulate identifiers in order to disguise the origin of any message or transmittal you send to RupeeDot.Com on or through the Website or any service offered on or through the Website. You may not pretend that you are, or that you represent, someone else, or impersonate any other individual or entity</li>
             <li>You may not use the Website or any Content for any purpose that is unlawful or prohibited by these Terms of Use, or to solicit the performance of any illegal activity or other activity which infringes the rights of RupeeDot.Com or others.</li>
             <li>Solely to enable RupeeDot.Com to use the information you supply us with, so that we are not violating any rights you might have in Your Information, you agree to grant us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, sub-licensable (through multiple tiers) right to exercise the copyright, publicity, database rights or any other rights you have in Your Information, in any media now known or not currently known, with respect to Your Information. RupeeDot.Com will only use Your Information in accordance with the terms of use and RupeeDot.Com’s Privacy Policy.</li>
            <li>You shall not engage in advertising to, or solicitation of, other users of RupeeDot.Com to buy or sell any products or services, including, but not limited to, products or services related being displayed on RupeeDot.Com or related to RupeeDot.Com. You may not transmit any chain letters or unsolicited commercial or junk email to other users via RupeeDot.Com. It shall be a violation of these Terms of Use to use any information obtained from RupeeDot.Com in order to harass, abuse, or harm another person, or in order to contact, advertise to, solicit, or sell to another person outside of the RupeeDot.Com without RupeeDot.Com’s prior explicit consent. In order to protect our users from such advertising or solicitation, RupeeDot.Com reserves the right to restrict the number of messages or emails which a user may send to other users in any 24-hour period which RupeeDot.Com deems appropriate in its sole discretion.12. You understand that RupeeDot.Com has the right at all times to disclose any information (including the identity of the persons providing information or materials on the RupeeDot.Com Website) as necessary to satisfy any law, regulation or valid governmental request. This may include, without limitation, disclosure of the information in connection with investigation of alleged illegal activity or solicitation of illegal activity or in response to a lawful court order or subpoena. In addition, we can (and you hereby expressly authorize us to) disclose any information about you to law enforcement or other government officials, as we, in our sole discretion, believe necessary or appropriate in connection with the investigation and/or resolution of possible crimes, especially those that may involve personal injury.</li>
            <li>RupeeDot.Com reserves the right, but has no obligation, to monitor the materials posted on RupeeDot.Com website. RupeeDot.Com shall have the right to remove or edit any Content that in its sole discretion violates, or is alleged to violate, any applicable law or either the spirit or letter of these Terms of Use. Notwithstanding this right of RupeeDot.Com, YOU REMAIN SOLELY RESPONSIBLE FOR THE CONTENT OF THE MATERIALS YOU POST ON THE RupeeDot.Com WEBSITE AND IN YOUR PRIVATE MESSAGES. Please be advised that such Content posted does not necessarily reflect the views of RupeeDot.Com. In no event shall RupeeDot.Com assume or have any responsibility or liability for any Content posted or for any claims, damages or losses resulting from use of Content and/or appearance of Content on RupeeDot.Com. You hereby represent and warrant that you have all necessary rights in and to all Content you provide and all information it contains and that such Content shall not infringe any proprietary or other rights of third parties or contain any libelous, tortuous, or otherwise unlawful information.</li>
             <li> Your correspondence or business dealings with, or participation in promotions of, advertisers found on or through RupeeDot.Com, including payment and delivery of related goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between you and such advertiser. RupeeDot.Com shall not be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such advertisers on RupeeDot.Com.</li>
             <li> It is possible that other users (including unauthorized users or “hackers”) may post or transmit offensive or obscene materials on RupeeDot.Com and that you may be involuntarily exposed to such offensive and obscene materials. It also is possible for others to obtain personal information about you due to your use of RupeeDot.Com, and that the recipient may use such information to harass or injure you. RupeeDot.Com does not approve of such unauthorized uses but by using the RupeeDot.Com Website you acknowledge and agree that RupeeDot.Com is not responsible for the use of any personal information that you publicly disclose or share with others on RupeeDot.Com. Please carefully select the type of information that you publicly disclose or share with others on RupeeDot.Com.</li>
             <li>RupeeDot.Com shall have all the rights to take necessary action and claim damages that may occur due to your involvement/participation in any way on your own or through group/s of People, intentionally or unintentionally in DoS/DDoS (Distributed Denial of Services).</li>
              </ul>

              <p>
               
              </p>
            </div>
          </section>

          {/* Content & Intellectual Property */}
          <section id="content" className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-800">Content & Intellectual Property</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p>
                All text, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, sounds, music, artwork and computer code (collectively, "Content"), including but not limited to the design, structure, selection, coordination, expression, "look and feel" and arrangement of such Content, contained on the RupeeDot.Com is owned, controlled or licensed by or to RupeeDot.Com, and is protected by trade dress, copyright, patent and trademark laws, and various other intellectual property rights and unfair competition laws. Except as expressly provided in these Terms of Use, no part of the RupeeDot.Com and no Content may be copied, reproduced, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted or distributed in any way (including "mirroring") to any other computer, server, website or other medium for publication or distribution or for any commercial enterprise, without RupeeDot.Com's express prior written consent.
              </p>
              <p>
                You may use information on RupeeDot.Com products and services purposely made available by RupeeDot.Com for downloading from the Site, provided that you:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Not remove any proprietary notice language in all copies of such documents,</li>
                <li>Use such information only for your personal, non-commercial informational purpose and do not copy or post such information on any networked computer or broadcast it in any media</li>
                <li>Make no modifications to any such information, and</li>
                <li>Not make any additional representations or warranties relating to such documents.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">© {new Date().getFullYear()} RupeeDot.Com. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;