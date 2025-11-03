"use client"

import { Brain, Lightbulb, Users, Lock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Smart AI Detection",
    description: "Advanced machine learning algorithms analyze symptoms and images with medical precision.",
  },
  {
    icon: Lightbulb,
    title: "Personalized Remedies",
    description: "Get tailored home remedies and treatment suggestions based on your specific condition.",
  },
  {
    icon: Users,
    title: "Doctor Recommendations",
    description: "Connect with the right medical specialists for your detected health concerns.",
  },
  {
    icon: Lock,
    title: "Data Privacy & Security",
    description: "Your health data is encrypted and protected with industry-leading security standards.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ animation: "slideInUp 0.6s ease-out" }}
          >
            Features
          </h2>
          <p
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
            style={{ animation: "slideInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}
          >
            Powered by cutting-edge AI and medical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                style={{ animation: `slideInUp 0.6s ease-out ${0.3 + index * 0.1}s forwards`, opacity: 0 }}
              >
                <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
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
