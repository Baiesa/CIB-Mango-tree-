import React, { useState } from 'react';
import Navigation from './Component/Navigation';
import HomePage from './Component/HomePage';
import WhatIsCIBSection from './Component/WhatIsCIBSection';
import HowItWorksSection from './Component/HowItWorksSection';
import WhoCanUseSection from './Component/WhoCanUseSection';
import InspirationSection from './Component/InspirationSection';
import Footer from './Component/Footer';

const CIBMangoTreeWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="flex flex-col min-h-screen bg-mango text-gray-800">
      {/* Sticky Navigation */}
      <Navigation setActiveSection={setActiveSection} />

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {activeSection === 'home' && <HomePage />}
        {activeSection === 'what-is-cib' && <WhatIsCIBSection />}
        {activeSection === 'how-it-works' && <HowItWorksSection />}
        {activeSection === 'who-can-use' && <WhoCanUseSection />}
        {activeSection === 'inspiration' && <InspirationSection />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CIBMangoTreeWebsite;
