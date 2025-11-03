"use client"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    content:
      "MediMind AI helped me identify a skin issue early. The recommendations were accurate and the doctor suggestions were spot-on.",
    image: "👩‍⚕️",
  },
  {
    name: "Dr. Michael Chen",
    role: "Dermatologist",
    content: "Impressed by the accuracy of MediMind AI. It serves as a great preliminary screening tool for patients.",
    image: "👨‍⚕️",
  },
  {
    name: "Emma Rodriguez",
    role: "Health Advocate",
    content:
      "Finally, accessible healthcare information at my fingertips. This tool is revolutionizing preventative medicine.",
    image: "👩‍🦰",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ animation: "slideInUp 0.6s ease-out" }}
          >
            Testimonials
          </h2>
          <p
            className="text-lg text-foreground/60"
            style={{ animation: "slideInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}
          >
            What our users and partners say about MediMind AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              style={{ animation: `slideInUp 0.6s ease-out ${0.3 + index * 0.1}s forwards`, opacity: 0 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground/70 italic leading-relaxed">"{testimonial.content}"</p>
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
