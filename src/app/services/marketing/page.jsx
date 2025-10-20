'use client';

import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, ArrowRight, Target, Users, BarChart, Globe, Search, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function DigitalMarketing() {
  const features = [
    {
      icon: Target,
      title: 'Targeted Campaigns',
      description: 'Precise audience targeting for maximum ROI and engagement'
    },
    {
      icon: BarChart,
      title: 'Data-Driven Strategy',
      description: 'Analytics-backed decisions to optimize your marketing performance'
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Build and engage your community across all social platforms'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and organic visibility'
    },
    {
      icon: MessageSquare,
      title: 'Content Marketing',
      description: 'Compelling content that converts visitors into customers'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Approach',
      description: 'Integrated campaigns across all digital channels'
    }
  ];

  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience on all major social platforms',
      included: ['Content creation', 'Community management', 'Paid advertising', 'Analytics & reporting']
    },
    {
      title: 'Search Engine Optimization',
      description: 'Improve your search rankings and drive organic traffic to your website',
      included: ['Keyword research', 'On-page optimization', 'Technical SEO', 'Link building']
    },
    {
      title: 'Pay-Per-Click Advertising',
      description: 'Targeted ad campaigns that deliver immediate results and measurable ROI',
      included: ['Google Ads', 'Facebook Ads', 'Campaign optimization', 'Conversion tracking']
    },
    {
      title: 'Content Strategy',
      description: 'Create engaging content that resonates with your audience and drives action',
      included: ['Content planning', 'Blog writing', 'Video content', 'Email marketing']
    }
  ];

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-8">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Marketing
              </span>
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Grow your business with data-driven digital marketing strategies that increase 
              brand awareness, drive traffic, and boost conversions.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Marketing</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Why Choose Our Digital Marketing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity with analytics to deliver marketing that works
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing solutions to grow your online presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.included.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
              Let&apos;s create a digital marketing strategy that drives real results 
              and accelerates your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300 inline-flex items-center space-x-2"
                >
                  <span>Get Marketing Audit</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                  aria-label="View all IT services offered by Smart Move"
                >
                  Explore All Our IT Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}