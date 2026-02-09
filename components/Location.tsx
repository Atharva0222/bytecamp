import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center">
          {/* Placeholder for video - replace src with actual video URL */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            poster=""
          >
            {/* Add video source when available */}
            {/* <source src="/path/to/video.mp4" type="video/mp4" /> */}
          </video>
          {/* Fallback animated gradient if no video */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
        </div>
        <div className="absolute inset-0 bg-zinc-900/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative z-10">
        <div className="space-y-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white">Where It Happens</h2>
          <p className="text-gray-400 text-lg">
            Join us at the SIES Graduate School of Technology in Nerul, Navi Mumbai. A vibrant campus ready to host 24 hours of non-stop innovation.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-black/50 border border-white/5 rounded-2xl backdrop-blur-sm">
              <MapPin className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold mb-1">SIES GST</h3>
                <p className="text-gray-400">Sri Chandrasekarendra Saraswati Vidyapuram,<br />Sector-V, Nerul, Navi Mumbai,<br />Maharashtra 400706</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-black/50 border border-white/5 rounded-2xl backdrop-blur-sm">
              <Mail className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold mb-1">Email</h3>
                <p className="text-gray-400">hello@bytecamp.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-black/50 border border-white/5 rounded-2xl backdrop-blur-sm">
              <Phone className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold mb-1">Phone</h3>
                <p className="text-gray-400">
                  +91 98765 43210<br />
                  +91 98765 43211
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="h-[400px] lg:h-auto w-full rounded-2xl overflow-hidden relative border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4987654321!2d73.0180!3d19.0434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd4f0e1d8d5e8c0!2sSIES%20Graduate%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '400px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SIES GST Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1.5 rounded-lg text-sm text-white pointer-events-none">
            📍 Navi Mumbai
          </div>
        </div>
      </div>
    </section>
  );
}