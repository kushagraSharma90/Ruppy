import { Phone, MessageCircle } from "lucide-react"

const ContactButtons = () => {
  return (
    <div className="fixed right-0 bottom-20 flex flex-col space-y-2 z-40">
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 p-3 rounded-l-md transition-colors duration-300 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
      <a
        href="tel:+917028095292"
        className="bg-blue-600 hover:bg-blue-700 p-3 rounded-l-md transition-colors duration-300 flex items-center justify-center"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-white" />
      </a>
    </div>
  )
}

export default ContactButtons
