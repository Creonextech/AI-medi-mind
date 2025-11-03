"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div style={{ animation: "slideInUp 0.6s ease-out" }}>
            <h2 className="text-4xl font-bold text-foreground mb-6">About MediMind AI</h2>

            <div className="space-y-4 mb-8">
              <div style={{ animation: "slideInUp 0.6s ease-out 0.1s forwards", opacity: 0 }}>
                <h3 className="text-lg font-semibold text-primary mb-2">Our Mission</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Making healthcare accessible through AI. We believe everyone deserves early detection and preventative
                  care.
                </p>
              </div>

              <div style={{ animation: "slideInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}>
                <h3 className="text-lg font-semibold text-primary mb-2">Our Vision</h3>
                <p className="text-foreground/70 leading-relaxed">
                  A world where early detection saves lives. By democratizing health insights, we empower people to take
                  control of their wellness.
                </p>
              </div>
            </div>

            <div className="flex gap-4" style={{ animation: "slideInUp 0.6s ease-out 0.3s forwards", opacity: 0 }}>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 transition-all font-medium">
                Learn More
              </button>
              <button className="px-6 py-2 border border-primary/30 text-primary rounded-lg hover:bg-primary/5 hover:border-primary/50 transition-all font-medium">
                Our Team
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div
            className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border aspect-square flex items-center justify-center hover:border-primary/50 transition-colors duration-300"
            style={{ animation: "slideInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <span className="text-4xl">🏥</span>
              </div>
              <p className="text-foreground/50">About MediMind</p>
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
