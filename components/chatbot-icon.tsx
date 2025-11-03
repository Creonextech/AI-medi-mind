"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export default function ChatbotIcon() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-card border border-border rounded-xl shadow-xl mb-4">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-xl">
            <h3 className="font-bold">MediMind Assistant</h3>
            <p className="text-sm text-primary-foreground/80">How can we help?</p>
          </div>
          <div className="p-4 h-64 flex items-center justify-center">
            <p className="text-center text-foreground/60 text-sm">
              Chat support is coming soon. For now, contact us at contact@medimind.ai
            </p>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:opacity-90 transition flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
