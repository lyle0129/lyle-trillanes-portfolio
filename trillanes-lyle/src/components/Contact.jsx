import { useState } from "react";
import { Mail, Linkedin, Github, FileText, Send, CheckCircle, AlertCircle } from "lucide-react";
import resume from '../assets/Resume_Trillanes.pdf'; 

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleDownload = () => {
    fetch(resume).then(res =>
      res.blob().then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'Resume_Trillanes.pdf';
        link.click();
      })
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const token = import.meta.env.VITE_API_TOKEN;
    const myEmail = import.meta.env.VITE_COMPANY_EMAIL;
    const senderEmail = import.meta.env.VITE_EMAIL_FROM;

    if (!token || !myEmail || !senderEmail || token === "your_mailtrap_token_here") {
      setStatus("error");
      setErrorMessage("Please configure your Mailtrap credentials (Token, Company Email, and Sender Email) in the .env file.");
      return;
    }

    try {
      // 1. Send email to yourself (the portfolio owner)
      const responseToMe = await fetch(`/api/mailtrap`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: { email: senderEmail, name: formData.name },
          to: [{ email: myEmail }],
          subject: `New Portfolio Message from ${formData.name}`,
          text: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
              <h2 style="color: #8b5e34; margin-top: 0; border-bottom: 2px solid #fdf8f3; padding-bottom: 16px;">New Message Received</h2>
              <p style="color: #4b5563; font-size: 15px;"><strong>From:</strong> ${formData.name}</p>
              <p style="color: #4b5563; font-size: 15px;"><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #8b5e34; text-decoration: none;">${formData.email}</a></p>
              
              <div style="margin-top: 24px; padding: 20px; background-color: #fdf8f3; border-left: 4px solid #8b5e34; border-radius: 6px;">
                <p style="margin: 0; white-space: pre-wrap; color: #3e2f1c; line-height: 1.6;">${formData.message}</p>
              </div>
            </div>
          `,
          category: "Portfolio Contact"
        })
      });

      if (!responseToMe.ok) {
        const errorText = await responseToMe.text();
        console.error("Mailtrap Error (To Me):", responseToMe.status, errorText);
        let errorMsg = "Failed to send message.";
        try {
           const errJson = JSON.parse(errorText);
           errorMsg = errJson.errors?.[0] || errorText;
        } catch(e) {
           errorMsg = errorText || `HTTP Error ${responseToMe.status}`;
        }
        throw new Error(errorMsg);
      }

      // 2. Send confirmation to the sender
      const responseToSender = await fetch(`/api/mailtrap`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: { email: senderEmail, name: "Lyle Denzell C. Trillanes" },
          to: [{ email: formData.email }],
          subject: `Thank you for reaching out, ${formData.name}!`,
          text: `Hi ${formData.name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nHere is a copy of your message:\n${formData.message}\n\nBest regards,\nLyle Denzell C. Trillanes`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #374151;">
              <h2 style="color: #8b5e34; margin-top: 0;">Hi ${formData.name},</h2>
              <p style="font-size: 16px; line-height: 1.6;">Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
              
              <p style="font-size: 14px; color: #6b7280; margin-top: 32px; margin-bottom: 8px;">Here is a copy of what you sent:</p>
              <div style="padding: 20px; background-color: #fdf8f3; border-left: 4px solid #8b5e34; border-radius: 6px;">
                <p style="margin: 0; white-space: pre-wrap; font-style: italic; color: #5b4636; line-height: 1.6;">${formData.message}</p>
              </div>
              
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;" />
              <p style="margin: 0; font-size: 15px;">Best regards,</p>
              <p style="margin: 4px 0 0 0; font-weight: 600; font-size: 16px; color: #8b5e34;">Lyle Denzell C. Trillanes</p>
            </div>
          `,
          category: "Portfolio Auto-Reply"
        })
      });

      if (!responseToSender.ok) {
        console.warn("Failed to send auto-reply to sender, but message to owner succeeded.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
      
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "An error occurred while sending the message.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#8b5e34] dark:text-[#d7b693]">
            Get in Touch
          </h2>
          <p className="text-[#5b4636] dark:text-[#f4e9dc]/80 max-w-lg mx-auto">
            Feel free to reach out for collaborations, project inquiries, or just to say hi 👋
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Form Side */}
          <div className="flex-1 w-full bg-white/40 dark:bg-[#292524]/40 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-[#8b5e34]/10 dark:border-[#d7b693]/10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#5b4636] dark:text-[#f4e9dc]/80 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-[#1c1917]/80 border border-[#8b5e34]/20 dark:border-[#d7b693]/20 focus:outline-none focus:ring-2 focus:ring-[#8b5e34] dark:focus:ring-[#d7b693] transition-colors text-[#3e2f1c] dark:text-[#f4e9dc]"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#5b4636] dark:text-[#f4e9dc]/80 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-[#1c1917]/80 border border-[#8b5e34]/20 dark:border-[#d7b693]/20 focus:outline-none focus:ring-2 focus:ring-[#8b5e34] dark:focus:ring-[#d7b693] transition-colors text-[#3e2f1c] dark:text-[#f4e9dc]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#5b4636] dark:text-[#f4e9dc]/80 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-[#1c1917]/80 border border-[#8b5e34]/20 dark:border-[#d7b693]/20 focus:outline-none focus:ring-2 focus:ring-[#8b5e34] dark:focus:ring-[#d7b693] transition-colors text-[#3e2f1c] dark:text-[#f4e9dc] resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 mt-2 px-6 py-3 bg-[#8b5e34] hover:bg-[#734b2b] dark:bg-[#d7b693] dark:hover:bg-[#c9a97d] text-white dark:text-[#1c1917] font-semibold rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                {status === "loading" ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm mt-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800/30">
                  <CheckCircle size={16} />
                  <span>Message sent successfully! I will get back to you soon.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800/30">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </div>

          {/* Social Links Side */}
          <div className="flex-1 w-full flex flex-col justify-center items-center md:items-start py-8">
            <h3 className="text-2xl font-bold mb-8 text-[#8b5e34] dark:text-[#d7b693]">
              Let's Connect
            </h3>
            <p className="text-[#5b4636] dark:text-[#f4e9dc]/80 text-center md:text-left mb-8 max-w-sm">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="flex gap-6">
              {/* Email */}
              <div className="relative group">
                <a
                  href="mailto:lyledenzell29@gmail.com"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-[#1c1917] border border-[#8b5e34]/20 dark:border-[#d7b693]/20 text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34] dark:hover:bg-[#d7b693] hover:text-white dark:hover:text-[#1c1917] transition-all transform hover:scale-110 shadow-sm"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs bg-[#8b5e34] dark:bg-[#d7b693] text-white dark:text-[#1c1917] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  Email
                </span>
              </div>

              {/* LinkedIn */}
              <div className="relative group">
                <a
                  href="https://www.linkedin.com/in/lyle-denzell-trillanes-593364293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-[#1c1917] border border-[#8b5e34]/20 dark:border-[#d7b693]/20 text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34] dark:hover:bg-[#d7b693] hover:text-white dark:hover:text-[#1c1917] transition-all transform hover:scale-110 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs bg-[#8b5e34] dark:bg-[#d7b693] text-white dark:text-[#1c1917] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  LinkedIn
                </span>
              </div>

              {/* GitHub */}
              <div className="relative group">
                <a
                  href="https://github.com/lyle0129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-[#1c1917] border border-[#8b5e34]/20 dark:border-[#d7b693]/20 text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34] dark:hover:bg-[#d7b693] hover:text-white dark:hover:text-[#1c1917] transition-all transform hover:scale-110 shadow-sm"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs bg-[#8b5e34] dark:bg-[#d7b693] text-white dark:text-[#1c1917] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  GitHub
                </span>
              </div>

              {/* Resume Download */}
              <div className="relative group">
                <button
                  onClick={handleDownload}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-[#1c1917] border border-[#8b5e34]/20 dark:border-[#d7b693]/20 text-[#8b5e34] dark:text-[#d7b693] hover:bg-[#8b5e34] dark:hover:bg-[#d7b693] hover:text-white dark:hover:text-[#1c1917] transition-all transform hover:scale-110 shadow-sm cursor-pointer"
                  aria-label="Resume"
                >
                  <FileText size={24} />
                </button>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs bg-[#8b5e34] dark:bg-[#d7b693] text-white dark:text-[#1c1917] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  Download Resume
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
