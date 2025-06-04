
import React from 'react'
import { FileText, Shield, Users, CreditCard, AlertTriangle, Mail } from 'lucide-react'

const TermsAndConditions = () => {
  const sections = [
    { id: "authorization", title: "Authorization & Consent", icon: Shield },
    { id: "privacy", title: "Privacy Policy", icon: FileText },
    { id: "membership", title: "Membership Eligibility", icon: Users },
    { id: "account", title: "Account & Registration", icon: Mail },
    { id: "charges", title: "Charges & Fees", icon: CreditCard },
    { id: "usage", title: "Website Usage Guidelines", icon: AlertTriangle },
    { id: "content", title: "Content & Intellectual Property", icon: FileText }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using RupeeDot.Com services
          </p>
          <span className="inline-block border border-gray-300 rounded px-3 py-1 mt-4 text-sm">Last Updated: Current Version</span>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1 sticky top-8">
            <div className="bg-white shadow-md rounded-lg">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Quick Navigation</h2>
                <p className="text-sm text-gray-600">Jump to any section</p>
              </div>
              <div className="p-4 max-h-[400px] overflow-y-auto space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Icon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Authorization Section */}
            <div id="authorization" className="bg-white shadow-md rounded-lg">
              <div className="p-6 border-b flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Authorization & Consent</h2>
              </div>
              <div className="p-6 text-gray-700 leading-relaxed">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-blue-800 font-medium">
                    By registering on RupeeDot.Com, you authorize us and our partners to contact you regarding financial services.
                  </p>
                </div>
                <p>
                  Individuals registering at www.RupeeDot.Com authorize us and our associated Banks/NBFCs partners and advertisers to contact them via SMS/call/email to offer services, provide product knowledge, and share promotional offers. This authorization remains valid regardless of DND or DNC service subscriptions.
                </p>
                <p className="mt-4">
                  You consent to RupeeDot being appointed as your authorized representative to receive your Credit Information from Experian/CIBIL/EQUIFAX/CRIF for credit assessment purposes, valid for 6 months from consent collection.
                </p>
              </div>
            </div>

            {/* Privacy Policy Section */}
            <div id="privacy" className="bg-white shadow-md rounded-lg">
              <div className="p-6 border-b flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                <h2 className="text-xl font-semibold">Privacy Policy</h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What We Collect</h4>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Personal identification information</li>
                      <li>Contact details (email, phone)</li>
                      <li>Location information</li>
                      <li>Financial preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Our Commitment</h4>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Never share personal info without consent</li>
                      <li>Use information only for requested services</li>
                      <li>Secure server protection</li>
                      <li>Easy opt-out from communications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Eligibility */}
            <div id="membership" className="bg-white shadow-md rounded-lg">
              <div className="p-6 border-b flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                <h2 className="text-xl font-semibold">Membership Eligibility</h2>
              </div>
              <div className="p-6 text-gray-700">
                <p>[Add your membership eligibility content here]</p>
              </div>
            </div>

            {/* Add other sections similarly... */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions;
