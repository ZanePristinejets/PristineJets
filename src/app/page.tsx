import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}
