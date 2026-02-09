import React from 'react';
import { Brain, Globe, Cpu, HeartPulse, Trophy, Clock, MapPin, Users, Calendar, Shield, Zap, Diamond, Star, Award } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Theme', href: '#theme' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Sponsors', href: '#pricing' }, // Updated link
  { label: 'Location', href: '#location' },
];

export const TRACKS_CARDS = [
  {
    title: 'Gen AI',
    description: 'Push the boundaries of creativity and logic using LLMs, diffusion models, and next-gen AI tools.',
    icon: <Brain className="w-8 h-8" />,
    color: 'teal',
    colorClass: 'text-teal-400',
    cardImage: '/assets/uno-cards/Gen-ai.png',
    cardBackImage: '/assets/uno-cards/Gen-ai-back.png',
    borderColor: 'border-teal-500'
  },
  {
    title: 'FinTech',
    description: 'Reimagine the future of finance, blockchain payments, and decentralized economies.',
    icon: <Globe className="w-8 h-8" />,
    color: 'green',
    colorClass: 'text-green-400',
    cardImage: '/assets/uno-cards/Fintech.png',
    cardBackImage: '/assets/uno-cards/Fintech-back.png',
    borderColor: 'border-green-500'
  },
  {
    title: 'Sustainability',
    description: 'Build eco-friendly solutions that tackle climate change, renewable energy, and sustainable living.',
    icon: <Cpu className="w-8 h-8" />,
    color: 'yellow',
    colorClass: 'text-yellow-400',
    cardImage: '/assets/uno-cards/Sustainability.png',
    cardBackImage: '/assets/uno-cards/Sustainability-back.png',
    borderColor: 'border-yellow-500'
  },
  {
    title: 'HealthTech',
    description: 'Develop solutions that improve patient care, mental health, and healthcare accessibility.',
    icon: <HeartPulse className="w-8 h-8" />,
    color: 'red',
    colorClass: 'text-red-400',
    cardImage: '/assets/uno-cards/Healthtech.png',
    cardBackImage: '/assets/uno-cards/Healthtech-back.png',
    borderColor: 'border-red-500'
  }
];



export const TIMELINE_EVENTS = [
  {
    time: '09:00 AM',
    title: 'Check-in & Registration',
    description: 'Grab your ID, find your team, and get settled.'
  },
  {
    time: '11:00 AM',
    title: 'Opening Ceremony',
    description: 'Keynote speakers, track announcements, and official kickoff.'
  },
  {
    time: '12:00 PM',
    title: 'Hacking Begins',
    description: 'Start your engines! 24 hours of innovation starts now.'
  },
  {
    time: '06:00 PM',
    title: 'Mentorship Sessions',
    description: 'Industry experts available to help unblock your challenges.'
  },
  {
    time: '12:00 AM',
    title: 'Midnight Chai & Vada Pav',
    description: 'Recharge with Mumbai\'s favorite late-night fuel and gaming.'
  },
  {
    time: '12:00 PM (Day 2)',
    title: 'Submission Deadline',
    description: 'Hands off keyboards! Submit your projects to DevPost.'
  }
];

export const PRIZES = [
  {
    place: '2nd Place',
    amount: '₹30,000',
    items: [
      'Silver Medal',
      'Gaming Peripherals',
      'Cloud Credits',
      'Internship Interviews'
    ],
    highlight: false
  },
  {
    place: '1st Place',
    amount: '₹50,000',
    items: [
      'Gold Trophy',
      'Latest Tech Gadgets',
      'VC Introductions',
      'Startup Incubation'
    ],
    highlight: true
  },
  {
    place: '3rd Place',
    amount: '₹15,000',
    items: [
      'Bronze Medal',
      'Smart Home Tech',
      'Subscription Packs',
      'Swag Kits'
    ],
    highlight: false
  }
];

export const CONSULTING_CARDS = [
  {
    title: 'Strategic Consulting',
    description: 'We help you define your technical roadmap and identify growth opportunities.',
    icon: <Globe className="w-6 h-6 text-white" />
  },
  {
    title: 'Security Audits',
    description: 'Protect your infrastructure with our comprehensive security assessments.',
    icon: <Shield className="w-6 h-6 text-white" />
  },
  {
    title: 'Cloud Optimization',
    description: 'Maximize performance and minimize costs with our cloud expertise.',
    icon: <Zap className="w-6 h-6 text-white" />
  }
];

export const SOLUTIONS_CARDS = [
  {
    title: 'Enterprise Security',
    description: 'End-to-end security solutions for large-scale organizations.',
    color: 'text-blue-400',
    action: 'Learn More'
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights for your business.',
    color: 'text-purple-400',
    action: 'View Specs'
  },
  {
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps built for performance.',
    color: 'text-green-400',
    action: 'Get Started'
  }
];

export const SPONSORSHIP_TIERS = [
  {
    name: 'Silver',
    price: '₹20,000',
    features: ['Logo on Website', 'Social Media Shoutout', '1 Mentor Pass', 'Swag Distribution', 'Discord Role'],
    icon: Shield,
    color: 'text-gray-300',
    gradient: 'from-gray-500 to-slate-300',
    border: 'border-gray-500/30'
  },
  {
    name: 'Gold',
    price: '₹50,000',
    features: ['Booth Space (10x10)', 'Speaking Slot (5min)', 'Resume Database Access', '3 Mentor Passes', 'Custom Challenge'],
    icon: Zap,
    color: 'text-yellow-400',
    gradient: 'from-yellow-500 to-amber-300',
    border: 'border-yellow-500/30',
    highlight: true
  },
  {
    name: 'Platinum',
    price: '₹1,00,000',
    features: ['Title Sponsor Status', 'Keynote Session', 'Jury Member Seat', 'Private Interview Room', 'Brand in Aftermovie'],
    icon: Diamond,
    color: 'text-cyan-300',
    gradient: 'from-cyan-500 to-blue-300',
    border: 'border-cyan-500/30'
  }
];
