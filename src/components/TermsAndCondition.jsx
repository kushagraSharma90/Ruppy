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
                Individuals who are registering themselves at www.RupeeDot.Com, are authorizing us & our associated Banks/NBFCs partners and advertisers to give them an sms/call/e-mail to offer services for the product they have opted for, providing product knowledge, intimation of promotional offers running on the website & various FINANCIAL offers from associated third parties. And Irrespective of the fact if they have subscribed under DND or DNC service still RupeeDot.Com and partnering Banks/NBFCs and advertisers are authorized to give a call/sms/e-mail for the aforesaid purposes.
              </p>
              <p>
                You hereby consent to RupeeDot being appointed as your authorised representative to receive your Credit Information from Experian/CIBIL/EQUIFAX/CRIF for the purpose of Credit Assessment of the End User to Advise him on the best loan offers (End Use Purpose) or expiry of 6 months from the date the consent is collected; whichever is earlier. You hereby also agree to Terms & Conditions.
              </p>
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
              <p>
                RupeeDot collects personally identifiable information when individuals provide their details on the platform. This information may be gathered when users apply for RupeeDot's products or services, browse RupeeDot's pages, or participate in promotions or offers. Additionally, RupeeDot may receive business-related personally identifiable information from its authorized partners.
              </p>
              <p>
                When individuals attempt to register at RupeeDot.Com, they are asked for their first name, last name, gender, zip/postal code, email, country, time zone, state, city and birth date. Once they get registered with RupeeDot.Com and sign in to our services, they will not be anonymous to us.
              </p>
              <p>
                Also during the registration process, they will be requested to register their mobile numbers and email id, pager, or any other wireless device for communication in order to receive text messages, notifications, and other services. By registration they authorize us to send sms/email alerts to subscribers for their login details and alerts or some advertising messages/emails from us.
              </p>
              <p>
                If at any time during the service tenure registered individuals wish to stop these sms/email alerts they can write an email to us along with mobile numbers and their mobile number will be deleted from the alerts database.
              </p>
              <p>
                RupeeDot.Com does not provide the guarantee whether the advertisers are good, credible or quality sellers of goods / service providers. People must satisfy themselves about all relevant points prior to availing of the terms of service. RupeeDot.Com has not discussed any terms of engagement with any of the listed advertisers. Purchasing of products or services from advertisers shall be at their own risk.
              </p>
              <p>
                We care about your privacy as much as you do. What it means is:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>We never share your personal information with others unless required by law.</li>
                <li>Your information is used only to complete the switching requested by you.</li>
                <li>We send you updates, promotions and offers but you can easily remove yourself from our email list. But we maintain your records in our archives to readily serve you in the future.</li>
                <li>Our highest priority is to make sure that your information stays safe and secure. This is why we take steps to make sure that our servers and your information are completely protected.</li>
              </ol>
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
              <p>
                You shall not host, display, upload, modify, publish, transmit, update or share any information that:
              </p>
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
              </ul>
              <p>
                (Additional content continues in the same format...)
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