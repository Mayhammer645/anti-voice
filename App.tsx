import React from 'react';
import Navbar from './components/Navbar';
import VoiceHero from './components/VoiceHero';
import Services from './components/Services';
import VoiceDemo from './components/VoiceDemo';
import ROICalculator from './components/ROICalculator';
import ContactForm from './components/ContactForm'; // Re-using existing, might need slight tweak for style
import { useVoiceControl } from './utils/useVoiceControl';

const App: React.FC = () => {
  const { isListening, transcript, isSpeaking, speak, startListening, stopListening, supported } = useVoiceControl();

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <Navbar />

      <main>
        <VoiceHero />

        {/* Trusted By Banner (Simple Stripe) */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

        <Services />

        <VoiceDemo />

        <ROICalculator />

        {/* Contact Section */}
        <section id="contact-form" className="py-20 relative">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Ready to automate?</h2>
            <p className="text-gray-400">Book a call or send us a message.</p>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2024 Raya Nova. All rights reserved.</p>
      </footer>

      {/* Voice Control Floating Button (Optional / for access anywhere) */}
      {supported && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* We could put a global mic button here, but the demo has one inline. 
               Let's keep it clean for now. */}
        </div>
      )}
    </div>
  );
};

export default App;
