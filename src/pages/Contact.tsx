import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Send,
  CheckCircle
} from 'lucide-react';
import { ContactMessage } from '../types';
import SEO from '../components/SEO';

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedMessages, setSubmittedMessages] = useState<ContactMessage[]>([]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.fullName || !contactForm.email || !contactForm.message) return;

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      fullName: contactForm.fullName,
      email: contactForm.email,
      subject: contactForm.subject || 'General Inquiry',
      message: contactForm.message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setSubmittedMessages(prev => [newMessage, ...prev]);
    setFormSubmitted(true);

    // Reset Form fields
    setContactForm({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });

    // Auto fade submission box after 6 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO 
        title="Contact Style Hub | Customer Support" 
        description="Have custom wardrobe design ideas, fit queries or order adjustments? Connect with Style Hub headquarters instantly via our live interactive response form." 
      />

      {/* Contact Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] tracking-[0.2em] font-mono text-[#8C6D58] uppercase font-bold block mb-2">Interactive Support</span>
        <h1 className="text-4xl md:text-5xl font-serif font-black text-stone-900 tracking-tight animate-fadeIn">Contact Us</h1>
        <div className="h-1 w-16 bg-[#8C6D58] mx-auto mt-4 rounded-full"></div>
        <p className="text-sm text-stone-500 mt-4">We would love to hear from you. Leave feedback, secure special orders, or resolve size problems instantly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Coordinates details & hours */}
        <div className="lg:col-span-5 text-left space-y-8">
          
          <div className="bg-[#FAF8F4] p-8 rounded-3xl border border-stone-200/50 space-y-6">
            <h3 className="font-serif font-extrabold text-stone-900 text-xl pb-3 border-b border-stone-200">Get in Touch</h3>
            
            <div className="flex items-start gap-4">
              <div className="bg-white p-2.5 rounded-lg border border-stone-200 text-[#8C6D58] shrink-0 mt-1">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-stone-400">Headquarters Address</p>
                <p className="text-sm font-semibold text-stone-800 mt-0.5">125 Fashion Avenue, New Delhi, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-2.5 rounded-lg border border-stone-200 text-[#8C6D58] shrink-0 mt-1">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-stone-400">Customer Helpline</p>
                <a href="tel:+919876543210" className="text-sm font-semibold text-stone-850 hover:text-[#8C6D58] transition duration-200 mt-0.5 block">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-2.5 rounded-lg border border-stone-200 text-[#8C6D58] shrink-0 mt-1">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-stone-400">Electronic Support</p>
                <a href="mailto:info@stylehub.com" className="text-sm font-semibold text-stone-850 hover:text-[#8C6D58] transition duration-200 mt-0.5 block font-medium">
                  info@stylehub.com
                </a>
              </div>
            </div>
          </div>

          {/* Operations Hours */}
          <div className="bg-stone-950 text-stone-200 p-8 rounded-3xl space-y-4">
            <h3 className="font-serif font-black text-white text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-500" />
              <span>Customer Support Hours</span>
            </h3>
            <div className="h-[1px] bg-stone-800"></div>
            
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-stone-400">Monday – Friday:</span>
                <span className="text-white font-bold">9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Saturday:</span>
                <span className="text-white font-bold">10:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Sunday:</span>
                <span className="text-stone-500 italic">Closed</span>
              </div>
            </div>
          </div>

          {/* Social Handles */}
          <div className="p-4 bg-white rounded-2xl border border-stone-200 text-center">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-3">Follow Us</span>
            <div className="flex justify-center gap-4 text-stone-700">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-50 rounded-full hover:bg-amber-100 hover:text-[#8C6D58] transition duration-200" aria-label="Style Hub Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-50 rounded-full hover:bg-amber-100 hover:text-[#8C6D58] transition duration-200" aria-label="Style Hub Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-50 rounded-full hover:bg-amber-100 hover:text-[#8C6D58] transition duration-200" aria-label="Style Hub Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="text-[11px] text-stone-400 font-mono mt-2 flex justify-center items-center gap-1 font-medium">
              <span>@StyleHubOfficial</span>
            </div>
          </div>

        </div>

        {/* Right Column Interactive Message Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-md text-left">
            <h3 className="font-serif font-black text-stone-900 text-2xl mb-2">Send Us a Message</h3>
            <p className="text-xs text-stone-500 mb-6 font-medium">Our average team response latency sits below 3 hours.</p>

            <form onSubmit={handleContactSubmit} className="space-y-5">
              
              <div>
                <label className="text-xs uppercase font-mono tracking-wider font-bold text-stone-500 block mb-1">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={contactForm.fullName}
                  onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                  className="bg-[#fafafa] focus:bg-white border border-stone-350 focus:border-[#8C6D58] rounded-xl px-4 py-3 text-sm font-medium w-full outline-none transition"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-mono tracking-wider font-bold text-stone-500 block mb-1">
                  Email Address <span className="text-rose-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="johndoe@example.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="bg-[#fafafa] focus:bg-white border border-stone-350 focus:border-[#8C6D58] rounded-xl px-4 py-3 text-sm font-medium w-full outline-none transition"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-mono tracking-wider font-bold text-stone-500 block mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Size Sizing / Special custom orders"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="bg-[#fafafa] focus:bg-white border border-stone-350 focus:border-[#8C6D58] rounded-xl px-4 py-3 text-sm font-medium w-full outline-none transition"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-mono tracking-wider font-bold text-stone-500 block mb-1">
                  Message <span className="text-rose-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you look stylish?"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="bg-[#fafafa] focus:bg-white border border-stone-350 focus:border-[#8C6D58] rounded-xl px-4 py-3 text-sm font-medium w-full outline-none transition resize-none"
                ></textarea>
              </div>

              {formSubmitted && (
                <div className="bg-teal-50 border border-teal-200 text-teal-800 p-4 rounded-xl flex items-center gap-3 animate-fadeIn">
                  <CheckCircle className="h-5 w-5 text-teal-600 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Thank you, message transmitted!</p>
                    <p className="text-xs text-teal-700 font-mono mt-0.5 font-medium">Please check our live admin submission log below to inspect parameters.</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-stone-900 hover:bg-[#8C6D58] text-[#FDFCF7] font-bold py-3 px-5 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 shadow-sm uppercase text-xs tracking-wider"
              >
                <Send className="h-4 w-4" />
                <span>Submit Message</span>
              </button>

            </form>
          </div>

          {/* REAL-TIME CONTACT SUBMISSION MONITORING log (to show beautiful interactive behavior) */}
          {submittedMessages.length > 0 && (
            <div className="mt-8 bg-stone-100 p-6 rounded-3xl border border-stone-200 text-left animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                <h4 className="font-serif font-bold text-stone-900 text-base">Active Transmitted Inquiries ({submittedMessages.length})</h4>
                <span className="text-[10px] uppercase tracking-wider font-mono bg-[#8C6D58] text-white px-2 py-0.5 rounded font-bold">Store Admin Log</span>
              </div>
              
              <div className="space-y-4 max-h-[240px] overflow-y-auto">
                {submittedMessages.map((msg) => (
                  <div key={msg.id} className="bg-white p-4 rounded-xl border border-stone-150 relative shadow-sm">
                    <span className="absolute top-3 right-3 text-[10px] text-stone-400 font-mono italic">{msg.timestamp}</span>
                    <div className="font-bold text-xs text-stone-900">{msg.fullName} <span className="font-normal font-mono text-stone-500">({msg.email})</span></div>
                    <div className="text-xs font-semibold text-[#8C6D58] mt-1">Sub: {msg.subject}</div>
                    <p className="text-xs text-stone-600 mt-2 bg-stone-50 p-2.5 rounded border border-stone-100 whitespace-pre-line leading-relaxed">{msg.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
