import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Theme from './components/Theme';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Team from './components/Team';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Theme />
        <Tracks />
        <Timeline />
        <Prizes />
        <Team />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;