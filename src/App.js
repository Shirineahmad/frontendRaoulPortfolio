import React from 'react';
import SkillsSection from './components/SkillsSection';
import Testimonials from './components/TestimonialsSection';
// import ReviewModal from './components/ReviewModal';
import './css/SkillsSection.css';
import './css/Testimonials.css';

function App() {
  return (
    <div>
      <SkillsSection />
      <Testimonials />
    </div>
  );
}

export default App;