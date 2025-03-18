"use client";
import { useState, useRef, useEffect } from "react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import TemplateSelector from "../components/TemplateSelector";
import { templates } from "../data/templates";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

export default function Home() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      linkedIn: "",
      website: "",
    },
    summary: "",
    experience: [{ id: 1, company: "", position: "", startDate: "", endDate: "", description: "" }],
    education: [{ id: 1, institution: "", degree: "", field: "", graduationDate: "", gpa: "" }],
    skills: [""],
    projects: [{ id: 1, title: "", description: "", technologies: "", link: "" }],
  });

  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [currentStep, setCurrentStep] = useState("form");

  // Ref for PDF generation
  const pdfRef = useRef(null);
  const [html2pdf, setHtml2pdf] = useState(null);

  // Dynamically import html2pdf.js on the client side
  useEffect(() => {
    import("html2pdf.js").then((module) => {
      setHtml2pdf(() => module.default);
    });
  }, []);

  const updateResumeData = (newData) => {
    setResumeData(newData);
  };

  const selectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const nextStep = () => {
    setCurrentStep((prev) => (prev === "form" ? "preview" : "download"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev === "preview" ? "form" : "preview"));
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  const downloadPdf = () => {
    if (!html2pdf) return;

    const element = pdfRef.current;

    const options = {
      margin: 10,
      filename: "Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-8 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <FaFilePdf className="text-4xl text-white mr-3" />
            <h1 className="text-3xl font-bold">Resume Builder</h1>
          </div>
          <p className="text-lg hidden md:block">Create, customize, and download your professional resume</p>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="container mx-auto mt-4">
        <div className="flex justify-between items-center text-sm md:text-base">
          <div className={`w-full text-center py-2 rounded-t-lg ${currentStep === "form" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
            Step 1: Fill Information
          </div>
          <div className={`w-full text-center py-2 rounded-t-lg ${currentStep === "preview" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
            Step 2: Preview
          </div>
          <div className={`w-full text-center py-2 rounded-t-lg ${currentStep === "download" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
            Step 3: Download
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6 md:p-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          {currentStep === "form" && (
            <>
              <h2 className="text-3xl font-semibold mb-6 text-center">Enter Your Information</h2>
              <ResumeForm
                resumeData={resumeData}
                updateResumeData={updateResumeData}
                onNext={nextStep}
              />
            </>
          )}

          {currentStep === "preview" && (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-semibold text-center mb-6">Choose a Template</h2>
                <TemplateSelector
                  templates={templates}
                  selectedTemplate={selectedTemplate}
                  onSelectTemplate={selectTemplate}
                />
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-semibold text-center mb-4">Preview Your Resume</h2>
                <div ref={pdfRef}>
                  <ResumePreview
                    resumeData={resumeData}
                    template={templates.find((t) => t.id === selectedTemplate)}
                  />
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={prevStep}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Back to Edit
                </button>
                <button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
                >
                  Download PDF
                </button>
              </div>
            </>
          )}

          {currentStep === "download" && (
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-6">Your Resume is Ready!</h2>
              <div ref={pdfRef}>
                <ResumePreview
                  resumeData={resumeData}
                  template={templates.find((t) => t.id === selectedTemplate)}
                />
              </div>

              <div className="mt-8">
                <button
                  onClick={downloadPdf}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg transition-all duration-300"
                  disabled={!html2pdf}
                >
                  {html2pdf ? "Download as PDF" : "Loading..."}
                </button>
              </div>
              <button
                onClick={prevStep}
                className="mt-6 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-8 rounded-lg transition-all duration-300"
              >
                Back to Preview
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}