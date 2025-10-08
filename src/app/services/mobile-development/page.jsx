'use client';

import { motion } from 'framer-motion';
import { Smartphone, CheckCircle, ArrowRight, Users, Zap, Shield, Star, Globe, Code } from 'lucide-react';
import Link from 'next/link';
import ThreeBackground from '@/components/ThreeBackground';

export default function MobileDevelopment() {
  const features = [
    {
      icon: Smartphone,
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with React Native and Flutter'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized apps with smooth animations and fast loading times'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Built with security best practices and compliance standards'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces that users love and engage with'
    },
    {
      icon: Globe,
      title: 'Offline Capability',
      description: 'Apps that work seamlessly even without internet connection'
    },
    {
      icon: Star,
      title: 'App Store Optimization',
      description: 'Optimized for maximum visibility and downloads'
    }
  ];

  const platforms = [
    { 
      name: 'iOS Development', 
      description: 'Native iOS apps using Swift and Objective-C',
      icon: '📱',
      color: 'from-gray-600 to-gray-800'
    },
    { 
      name: 'Android Development', 
      description: 'Native Android apps using Kotlin and Java',
      icon: '🤖',
      color: 'from-green-500 to-green-700'
    },
    { 
      name: 'React Native', 
      description: 'Cross-platform apps with native performance',
      icon: '⚛️',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Flutter', 
      description: 'Beautiful, natively compiled applications',
      icon: '🎯',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const services = [
    {
      title: 'Native Mobile Apps',
      description: 'Platform-specific apps that leverage the full potential of iOS and Android',
      included: ['Native performance', 'Platform-specific UI', 'Hardware integration', 'App Store optimization']
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Single codebase apps that run perfectly on both iOS and Android',
      included: ['Cost-effective development', 'Faster time to market', 'Consistent UI/UX', 'Easy maintenance']
    },
    {
      title: 'Progressive Web Apps',
      description: 'Web apps that provide native app-like experience across devices',
      included: ['Offline functionality', 'Push notifications', 'App-like interface', 'Cross-platform compatibility']
    },
    {
      title: 'App Maintenance & Support',
      description: 'Ongoing support to keep your mobile apps running smoothly',
      included: ['Bug fixes', 'Performance optimization', 'OS updates compatibility', '24/7 monitoring']
    }
  ];

  return (
    <div className="min-h-screen">
      <ThreeBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-8">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mobile Development
              </span>
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Transform your ideas into powerful mobile applications that engage users 
              and drive business success across iOS and Android platforms.
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
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Your App</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  View Our Apps
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
              Why Choose Our Mobile Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create mobile experiences that users love and businesses depend on
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Platforms We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From native iOS and Android to cross-platform solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-r ${platform.color} rounded-2xl p-6 text-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-lg font-bold mb-2">{platform.name}</h3>
                <p className="text-sm opacity-90">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Our Mobile Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile solutions for every business need
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
              Let's bring your mobile app idea to life and reach millions of users 
              across iOS and Android platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300 inline-flex items-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}