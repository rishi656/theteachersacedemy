import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInUp, SplitTextReveal, StaggerContainer } from './AnimatedReveal';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    exam: 'TET-2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', phone: '', exam: 'TET-2', message: '' });
      }, 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExploreCourses = () => {
    const element = document.querySelector('#courses');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-offWhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Call Actions */}
          <div className="lg:col-span-5 text-left">
            <FadeInUp delay={0.1}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-2">
                START TODAY
              </span>
            </FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deepIndigo tracking-tight mb-4">
              <SplitTextReveal text="Ready to Start Your Preparation?" delay={0.2} />
            </h2>
            <FadeInUp delay={0.5}>
              <p className="text-sm sm:text-base text-brand-mutedText leading-relaxed mb-8 font-semibold">
                Connect with The Teachers' Academy and find the right preparation path for your exam. Reach out directly via call or WhatsApp.
              </p>
            </FadeInUp>

            {/* Direct Contacts Grid with Stagger */}
            <StaggerContainer staggerInterval={0.08} delay={0.6} className="space-y-4 mb-8">
              
              {/* Call Support 1 */}
              <motion.a
                href="tel:6355910277"
                variants={{
                  hidden: { opacity: 0, x: -15 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-brand-indigo/5 shadow-sm transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-brand-indigo/10 text-brand-indigo group-hover:bg-brand-indigo group-hover:text-white transition-colors duration-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <span className="text-[10px] font-bold text-brand-mutedText uppercase block">Primary Contact</span>
                    <span className="text-base font-extrabold text-brand-deepIndigo group-hover:text-brand-indigo transition-colors">6355910277</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-brand-indigo">Call Now</span>
              </motion.a>

              {/* Call Support 2 */}
              <motion.a
                href="tel:8849130427"
                variants={{
                  hidden: { opacity: 0, x: -15 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-brand-indigo/5 shadow-sm transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-brand-indigo/10 text-brand-indigo group-hover:bg-brand-indigo group-hover:text-white transition-colors duration-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <span className="text-[10px] font-bold text-brand-mutedText uppercase block">Secondary Contact</span>
                    <span className="text-base font-extrabold text-brand-deepIndigo group-hover:text-brand-indigo transition-colors">8849130427</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-brand-indigo">Call Now</span>
              </motion.a>

              {/* WhatsApp Support */}
              <motion.a
                href="https://wa.me/916355910277?text=Hello%20The%20Teachers%20Academy,%20I%20want%20to%20inquire%20about%20your%20TET/TAT%20coaching%20classes."
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, x: -15 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 border border-emerald-500/10 shadow-sm transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-[#25D366]/15 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-200">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div className="leading-tight">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase block">WhatsApp Support</span>
                    <span className="text-base font-extrabold text-emerald-950 font-sans">Chat with Hardik Sir</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#25D366]">Message</span>
              </motion.a>

            </StaggerContainer>

            {/* Explore Courses helper link */}
            <FadeInUp delay={0.9}>
              <button
                onClick={handleExploreCourses}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-brand-indigo/20 text-brand-indigo font-bold text-sm hover:bg-brand-lavender/30 shadow-sm transition-all"
              >
                Explore Course List
              </button>
            </FadeInUp>
          </div>

          {/* Right Column: Sleek Callback Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-7 bg-white p-8 rounded-[2rem] border border-brand-indigo/5 shadow-premium-lg relative text-left"
          >
            <h3 className="font-extrabold text-lg text-brand-deepIndigo mb-2">
              Request a Callback
            </h3>
            <p className="text-xs text-brand-mutedText mb-6 font-semibold">
              Fill in your contact details below and Hardik Sir's team will get back to you shortly.
            </p>

            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-extrabold text-brand-deepIndigo text-lg mb-1">
                  Callback Requested!
                </h4>
                <p className="text-xs text-brand-mutedText font-semibold">
                  We have received your details. Hardik Sir's support desk will call you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-xs font-bold text-brand-deepIndigo block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-brand-indigo/10 bg-brand-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-indigo text-sm font-semibold transition-all"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="phone" className="text-xs font-bold text-brand-deepIndigo block mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl border border-brand-indigo/10 bg-brand-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-indigo text-sm font-semibold transition-all"
                  />
                </div>

                {/* Exam Target */}
                <div>
                  <label htmlFor="exam" className="text-xs font-bold text-brand-deepIndigo block mb-1">
                    Target Examination
                  </label>
                  <select
                    id="exam"
                    name="exam"
                    value={formData.exam}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-indigo/10 bg-brand-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-indigo text-sm font-bold text-brand-deepIndigo transition-all"
                  >
                    <option value="TET-1">TET-1 (Primary Exam)</option>
                    <option value="TET-2">TET-2 (Upper Primary)</option>
                    <option value="TAT(S)">TAT Secondary (Secondary School)</option>
                    <option value="TAT(HS)">TAT Higher Secondary (Higher Secondary)</option>
                    <option value="General">Other Exam Guidance</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-xs font-bold text-brand-deepIndigo block mb-1">
                    Your Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your questions or queries..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-indigo/10 bg-brand-offWhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-indigo text-sm font-semibold transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-indigo to-brand-magenta hover:brightness-110 shadow-md shadow-brand-indigo/10 hover:shadow-lg transition-all duration-300 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Callback</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
