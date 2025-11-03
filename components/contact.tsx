"use client"

import { useState } from "react"

export default function Contact() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-12 hover:border-primary/50 transition-colors duration-300"
          style={{ animation: "slideInUp 0.6s ease-out" }}
        >
          <div className="text-center mb-8">
            <h2
              className="text-4xl font-bold text-foreground mb-4"
              style={{ animation: "slideInUp 0.6s ease-out 0.1s forwards", opacity: 0 }}
            >
              Stay Updated
            </h2>
            <p
              className="text-lg text-foreground/70 max-w-2xl mx-auto"
              style={{ animation: "slideInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}
            >
              Subscribe to our newsletter for health tips, feature updates, and AI insights.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
            style={{ animation: "slideInUp 0.6s ease-out 0.3s forwards", opacity: 0 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
            />
            <button
              onClick={handleSubscribe}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 transition-all font-medium whitespace-nowrap"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </div>

          {subscribed && (
            <p
              className="text-center text-primary text-sm font-medium"
              style={{ animation: "slideInUp 0.4s ease-out" }}
            >
              Thanks for subscribing!
            </p>
          )}
        </div>

        {/* Contact Links */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          {[
            { label: "Email", value: "contact@medimind.ai" },
            { label: "Phone", value: "+1 (555) 123-4567" },
            { label: "Social", value: null, links: true },
          ].map((item, idx) => (
            <div key={idx} style={{ animation: `slideInUp 0.6s ease-out ${0.5 + idx * 0.1}s forwards`, opacity: 0 }}>
              <p className="text-foreground/60 mb-2">{item.label}</p>
              {item.links ? (
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-primary hover:text-primary/80 hover:underline transition">
                    Twitter
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 hover:underline transition">
                    LinkedIn
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 hover:underline transition">
                    Instagram
                  </a>
                </div>
              ) : (
                <p className="font-semibold text-foreground">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
