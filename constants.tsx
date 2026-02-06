import React from 'react';
import { Brain, Globe, Cpu, HeartPulse, Trophy, Clock, MapPin, Users, Calendar, Shield, Zap } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Theme', href: '#theme' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Location', href: '#location' },
];

export const TRACKS_CARDS = [
  {
    title: 'Generative AI',
    description: 'Push the boundaries of creativity and logic using LLMs, diffusion models, and next-gen AI tools.',
    icon: <Brain className="w-6 h-6" />,
    color: 'text-purple-400',
    border: 'hover:border-purple-500/50',
    bg: 'hover:bg-purple-500/10'
  },
  {
    title: 'FinTech Revolution',
    description: 'Reimagine the future of finance, blockchain payments, and decentralized economies.',
    icon: <Globe className="w-6 h-6" />,
    color: 'text-green-400',
    border: 'hover:border-green-500/50',
    bg: 'hover:bg-green-500/10'
  },
  {
    title: 'Health & Wellness',
    description: 'Develop solutions that improve patient care, mental health, or fitness tracking using IoT.',
    icon: <HeartPulse className="w-6 h-6" />,
    color: 'text-red-400',
    border: 'hover:border-red-500/50',
    bg: 'hover:bg-red-500/10'
  },
  {
    title: 'Open Innovation',
    description: 'Have a wild idea? This track is for projects that defy categories and break the mold.',
    icon: <Cpu className="w-6 h-6" />,
    color: 'text-cyan-400',
    border: 'hover:border-cyan-500/50',
    bg: 'hover:bg-cyan-500/10'
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

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    features: ['Basic Analytics', '5 Projects', 'Community Support', '1GB Storage'],
    buttonText: 'Get Started',
    highlight: false,
    description: 'Perfect for individuals and hobbyists.'
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/mo',
    features: ['Advanced Analytics', 'Unlimited Projects', 'Priority Support', '10GB Storage'],
    buttonText: 'Start Free Trial',
    highlight: true,
    description: 'Best for growing teams and startups.'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Custom Solutions', 'Dedicated Support', 'SLA Guarantee', 'Unlimited Storage'],
    buttonText: 'Contact Sales',
    highlight: false,
    description: 'For large organizations with specific needs.'
  }
];