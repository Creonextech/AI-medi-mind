"use client"

import { useState } from "react"
import { Upload, Plus, Brain } from "lucide-react"

const bodyParts = ["Head", "Neck", "Chest", "Arm", "Hand", "Abdomen", "Leg", "Foot", "Back", "Skin"]

export default function Demo() {
  const [activeTab, setActiveTab] = useState("upload")
  const [selectedPart, setSelectedPart] = useState("")
  const [symptoms, setSymptoms] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = () => {
    if (symptoms || selectedPart) {
      setIsAnalyzing(true)
      // Simulate analysis delay
      setTimeout(() => {
        setIsAnalyzing(false)
        setShowResult(true)
      }, 1500)
    }
  }

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ animation: "slideInUp 0.6s ease-out" }}
          >
            Try MediMind AI
          </h2>
          <p
            className="text-lg text-foreground/60"
            style={{ animation: "slideInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}
          >
            Experience AI-powered health analysis (demo mockup)
          </p>
        </div>

        <div
          className="grid lg:grid-cols-2 gap-8"
          style={{ animation: "slideInUp 0.6s ease-out 0.3s forwards", opacity: 0 }}
        >
          {/* Input Panel */}
          <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors duration-300">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActiveTab("upload")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "upload"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-muted text-foreground/60 hover:text-foreground hover:bg-muted/80"
                }`}
              >
                <Upload size={18} />
                Upload Photo
              </button>
              <button
                onClick={() => setActiveTab("describe")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeTab === "describe"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-muted text-foreground/60 hover:text-foreground hover:bg-muted/80"
                }`}
              >
                <Plus size={18} />
                Body Parts
              </button>
            </div>

            {activeTab === "upload" ? (
              <div>
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center mb-6 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer group">
                  <Upload
                    size={40}
                    className="mx-auto text-primary/40 mb-2 group-hover:text-primary/60 transition-colors duration-300"
                  />
                  <p className="text-foreground/60 mb-2">Drag and drop your image here</p>
                  <p className="text-sm text-foreground/40">or click to browse (JPG, PNG)</p>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-foreground/60 mb-4 text-sm">Select affected body part:</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {bodyParts.map((part) => (
                    <button
                      key={part}
                      onClick={() => setSelectedPart(part)}
                      className={`py-2 px-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                        selectedPart === part
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                          : "bg-muted text-foreground hover:bg-muted/80 border border-transparent hover:border-primary/20"
                      }`}
                    >
                      {part}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Describe your symptoms</label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="E.g., Red rash on arm, itchy, appeared 2 days ago..."
                className="w-full h-24 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="w-full mt-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-70 transition-all font-medium flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                  Analyzing...
                </>
              ) : (
                "Analyze with AI"
              )}
            </button>
          </div>

          {/* Result Panel */}
          <div>
            {showResult ? (
              <div
                className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-8 animate-in fade-in"
                style={{ animation: "slideInUp 0.5s ease-out" }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 mb-4">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    <span className="text-sm text-primary font-medium">Analysis Complete</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Possible Issues</h3>
                </div>

                <div className="space-y-6">
                  {/* Issue */}
                  <div className="hover:translate-x-1 transition-transform duration-200">
                    <p className="text-sm text-foreground/60 mb-1">Primary Concern</p>
                    <p className="text-lg font-semibold text-foreground">Dermatitis or Skin Rash</p>
                  </div>

                  {/* Remedies */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">Recommended Remedies</p>
                    <ul className="space-y-2">
                      {["Aloe Vera Gel", "Hydration & Rest", "Topical Moisturizer"].map((remedy, idx) => (
                        <li
                          key={remedy}
                          className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-200"
                          style={{ animation: `slideInUp 0.4s ease-out ${0.1 + idx * 0.1}s forwards`, opacity: 0 }}
                        >
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-foreground/70">{remedy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Precautions */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">Precautions</p>
                    <ul className="space-y-2">
                      {["Avoid scratching", "Use gentle soap", "Keep area clean"].map((precaution, idx) => (
                        <li
                          key={precaution}
                          className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-200"
                          style={{ animation: `slideInUp 0.4s ease-out ${0.2 + idx * 0.1}s forwards`, opacity: 0 }}
                        >
                          <span className="text-accent mt-1">•</span>
                          <span className="text-foreground/70">{precaution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Doctor Recommendation */}
                  <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 hover:border-secondary/50 transition-colors duration-200">
                    <p className="text-sm font-semibold text-foreground mb-1">Recommended Specialist</p>
                    <p className="text-foreground">Dermatologist</p>
                  </div>

                  <button
                    onClick={() => {
                      setShowResult(false)
                      setSymptoms("")
                      setSelectedPart("")
                    }}
                    className="w-full py-2 border border-primary/30 text-primary rounded-lg hover:bg-primary/5 transition-all font-medium text-sm"
                  >
                    Try Another Analysis
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-muted/50 border border-border rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain size={32} className="text-primary/40" />
                  </div>
                  <p className="text-foreground/60">
                    Fill in your details and click "Analyze with AI" to see the results
                  </p>
                </div>
              </div>
            )}
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
