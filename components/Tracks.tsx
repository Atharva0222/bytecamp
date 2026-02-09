import React, { useState } from 'react';
import { TRACKS_CARDS } from '../constants';
import { motion } from 'framer-motion';

// UNO Card Flip Component using provided images for both front and back
function UnoCard({
  title,
  cardImage,
  cardBackImage,
  index
}: {
  title: string;
  cardImage: string;
  cardBackImage: string;
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="w-full"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-[450px] cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front of Card - UNO Image */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <img
            src={cardImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back of Card - Back Image */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <img
            src={cardBackImage}
            alt={`${title} - Details`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Problem Tracks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Choose your arena. Hover over the cards to reveal the challenge details.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRACKS_CARDS.map((card, index) => (
            <UnoCard
              key={index}
              title={card.title}
              cardImage={card.cardImage}
              cardBackImage={card.cardBackImage}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}