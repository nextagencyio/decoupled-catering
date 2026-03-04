'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { UtensilsCrossed, Calendar, Users, Truck, Star, Award, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const commitmentItems = [
  { icon: UtensilsCrossed, title: 'Culinary Excellence', description: 'Award-winning chefs crafting exquisite menus with locally sourced, seasonal ingredients.' },
  { icon: Calendar, title: 'Full Event Planning', description: 'Comprehensive event coordination from concept to execution, ensuring every detail is perfect.' },
  { icon: Users, title: 'Professional Service', description: 'Trained service staff delivering impeccable hospitality for events of any scale.' },
  { icon: Truck, title: 'Reliable Delivery', description: 'On-time setup and delivery with our own fleet, ensuring freshness and presentation.' },
  { icon: Star, title: 'Custom Menus', description: 'Tailored menus designed to match your vision, dietary needs, and budget requirements.' },
  { icon: Award, title: 'Award-Winning', description: 'Recognized as the region\'s top catering service for three consecutive years.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop', alt: 'Fine dining presentation' },
  { src: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=600&q=80&fit=crop', alt: 'Catering buffet setup' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80&fit=crop', alt: 'Wedding reception table' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&fit=crop', alt: 'Gourmet plated dish' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Our Commitment Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Why Choose Sterling Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring together culinary artistry, impeccable service, and meticulous planning to create unforgettable events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitmentItems.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Our Culinary Creations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into the artistry and attention to detail that defines every Sterling Events experience.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Large 5-Column Footer */}
      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {/* About Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                  <UtensilsCrossed className="w-5 h-5 text-accent-400" />
                </div>
                <span className="text-lg font-bold text-white font-display">Sterling Events</span>
              </div>
              <p className="text-primary-300 text-sm mb-4 leading-relaxed">
                Bringing culinary excellence to your most important moments since 2006.
              </p>
              <div className="space-y-2 text-sm text-primary-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>450 Culinary Drive<br />Nashville, TN 37203</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>(555) 890-1234</span>
                </div>
              </div>
            </div>

            {/* Menus Column */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Menus</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/packages" className="hover:text-white transition-colors">All Packages</Link></li>
                <li><a href="/packages" className="hover:text-white transition-colors">Wedding Menus</a></li>
                <li><a href="/packages" className="hover:text-white transition-colors">Corporate Menus</a></li>
                <li><a href="/packages" className="hover:text-white transition-colors">Cocktail Reception</a></li>
                <li><a href="/packages" className="hover:text-white transition-colors">Brunch & Breakfast</a></li>
              </ul>
            </div>

            {/* Events Column */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Events</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/events" className="hover:text-white transition-colors">Event Types</Link></li>
                <li><a href="/events" className="hover:text-white transition-colors">Weddings</a></li>
                <li><a href="/events" className="hover:text-white transition-colors">Corporate Events</a></li>
                <li><a href="/events" className="hover:text-white transition-colors">Private Parties</a></li>
                <li><a href="/events" className="hover:text-white transition-colors">Galas & Fundraisers</a></li>
              </ul>
            </div>

            {/* About Column */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">Our Chefs</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Get Started</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Request a Quote</Link></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Schedule Tasting</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
              <div className="mt-4 p-3 bg-accent-500/20 border border-accent-500/30 rounded-lg">
                <p className="text-accent-300 text-xs font-bold">Call for Availability</p>
                <p className="text-accent-200 text-xs">(555) 890-1234</p>
              </div>
            </div>
          </div>

          {/* Newsletter Row */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-white font-bold mb-1">Stay Inspired</h4>
                <p className="text-primary-300 text-sm">Get menu ideas, event tips, and seasonal offerings delivered to your inbox.</p>
              </div>
              <NewsletterForm />
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-400">
            <p>&copy; {new Date().getFullYear()} Sterling Events Catering. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/about" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/about" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="/about" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="px-4 py-2.5 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-primary-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 w-full md:w-64"
      />
      <button
        type="submit"
        className="px-6 py-2.5 bg-primary-600 text-white rounded-r-lg hover:bg-primary-500 transition-colors font-bold text-sm whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  )
}
