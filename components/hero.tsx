"use client"

import { ArrowRight, Upload } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animation: "pulse 4s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animation: "pulse 4s ease-in-out infinite 0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animation: "slideInUp 0.6s ease-out" }}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-glow"></span>
            <span className="text-sm text-primary font-medium">AI-Powered Health Detection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
            <span
              className="inline-block text-foreground"
              style={{ animation: "slideInUp 0.6s ease-out 0.1s forwards", opacity: 0 }}
            >
              Detect.{" "}
            </span>
            <span
              className="inline-block text-foreground"
              style={{ animation: "slideInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}
            >
              Understand.{" "}
            </span>
            <span
              className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              style={{ animation: "slideInUp 0.6s ease-out 0.3s forwards", opacity: 0 }}
            >
              Heal
            </span>
            <span
              className="inline-block text-foreground"
              style={{ animation: "slideInUp 0.6s ease-out 0.4s forwards", opacity: 0 }}
            >
              {" "}
              — with AI.
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-foreground/70 max-w-2xl"
            style={{ animation: "slideInUp 0.6s ease-out 0.5s forwards", opacity: 0 }}
          >
            Upload a photo or describe your symptoms. MediMind AI analyzes your health concerns and suggests possible
            causes, remedies, and doctor recommendations.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: "slideInUp 0.6s ease-out 0.6s forwards", opacity: 0 }}
          >
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 hover:scale-105 transition-all font-medium duration-200">
              <Upload size={20} />
              Try Demo
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/5 hover:scale-105 transition-all font-medium duration-200">
              Learn More
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Hero Image Placeholder */}
          <div
            className="mt-12 w-full max-w-4xl"
            style={{ animation: "slideInUp 0.6s ease-out 0.7s forwards", opacity: 0 }}
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border flex items-center justify-center hover:border-primary/50 transition-colors duration-300">
              <div className="text-center">
                <div
                  className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ animation: "float 3s ease-in-out infinite" }}
                >
                  <Upload size={40} className="text-primary" />
                </div>
                <p className="text-foreground/50">Hero visualization</p>
              </div>
            </div>
          </div>
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
