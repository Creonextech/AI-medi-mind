"use client"

import { Upload, Brain, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Upload or Describe",
      description: "Upload a photo or describe your symptoms and health concerns in detail.",
      icon: Upload,
    },
    {
      number: 2,
      title: "AI Analysis",
      description: "Our advanced AI analyzes your input using medical health data and patterns.",
      icon: Brain,
    },
    {
      number: 3,
      title: "Get Insights",
      description: "Receive possible causes, remedies, precautions, and doctor recommendations.",
      icon: CheckCircle,
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ animation: "slideInUp 0.6s ease-out" }}
          >
            How It Works
          </h2>
          <p
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
            style={{ animation: "slideInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}
          >
            Three simple steps to get health insights powered by AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative"
                style={{ animation: `slideInUp 0.6s ease-out ${0.3 + index * 0.1}s forwards`, opacity: 0 }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[180%] h-1 bg-gradient-to-r from-primary to-transparent opacity-30"></div>
                )}

                <div className="relative z-10 bg-card rounded-xl p-8 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-lg">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-foreground/60">{step.description}</p>
                </div>
              </div>
            )
          })}
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
