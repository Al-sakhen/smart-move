'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Briefcase, Palette, TrendingUp, Star, Users, Trophy, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies',
      gradient: 'from-[#167dc1] to-[#125a91]'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      gradient: 'from-[#125a91] to-[#0f4a7a]'
    },
    {
      icon: Briefcase,
      title: 'Business Solutions',
      description: 'Custom business automation and management systems to streamline operations',
      gradient: 'from-[#0f4a7a] to-[#0d3d64]'
    },
    {
      icon: Palette,
      title: 'Design Services',
      description: 'Beautiful, user-centered designs that enhance user experience and engagement',
      gradient: 'from-indigo-500 to-[#167dc1]'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to grow your online presence and reach',
      gradient: 'from-[#167dc1] to-indigo-600'
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Trophy, number: '1000+', label: 'Projects Completed' },
    { icon: Star, number: '99%', label: 'Client Satisfaction' },
    { icon: Clock, number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      rating: 5,
      text: 'Smart Move transformed our business with their innovative web solutions. Highly recommended!'
    },
    {
      name: 'Sarah Johnson',
      company: 'StartupXYZ',
      rating: 5,
      text: 'Outstanding mobile app development. They delivered exactly what we needed, on time and on budget.'
    },
    {
      name: 'Mike Davis',
      company: 'Enterprise Solutions',
      rating: 5,
      text: 'Professional team with excellent communication. Our business processes are now much more efficient.'
    }
  ];

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden tech-bg-animated floating-elements pt-20 sm:pt-16">
        <div className="absolute inset-0 tech-grid-bg opacity-60"></div>
        <div className="absolute inset-0 tech-lines opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo and Company name */}
            <motion.div
              className="flex flex-col items-center mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring" }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-6"
              >
                <Image
                  src="/smart-move-logo.svg"
                  alt="Smart Move Logo"
                  width={120}
                  height={120}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-30 lg:h-30"
                />
              </motion.div>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold relative"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-[#167dc1] via-[#125a91] to-[#0f4a7a] bg-clip-text text-transparent filter drop-shadow-sm">
                  SMART MOVE
                </span>
              </motion.h1>
            </motion.div>
            
            {/* Professional tagline */}
            <motion.p 
              className="text-sm sm:text-lg md:text-xl lg:text-3xl text-[#167dc1] mb-4 font-light tracking-wider"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              PROFESSIONAL IT SOLUTIONS
            </motion.p>
            
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-[#167dc1] to-[#0f4a7a] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              EMPOWERING YOUR DIGITAL SUCCESS
            </motion.h2>
            
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Transform your business with our comprehensive IT solutions. From web development to mobile apps, 
              we deliver innovative technology solutions that drive growth and success.
            </motion.p>
            
            {/* Modern CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -3px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gradient-to-r from-[#167dc1] to-[#125a91] text-white px-10 py-4 rounded-full text-lg font-semibold overflow-hidden hover:from-[#125a91] hover:to-[#0f4a7a] transition-all duration-300"
                >
                  <span className="relative z-10">EXPLORE SERVICES</span>
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -3px rgba(59, 130, 246, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative border-2 border-[#167dc1] text-[#167dc1] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#167dc1] hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10">VIEW PROJECTS</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modern Services Section */}
      <section className="py-20 bg-gray-50 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-70"></div>
        <div className="absolute inset-0 hex-pattern opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#167dc1] to-[#0f4a7a] bg-clip-text text-transparent">
              OUR SERVICES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Comprehensive IT solutions designed to drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group overflow-hidden modern-card shadow-sm hover:shadow-lg"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 relative z-10`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">{service.title}</h3>
                <p className="text-gray-600 mb-6 relative z-10">{service.description}</p>
                <Link href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-[#167dc1] font-semibold flex items-center space-x-2 hover:text-[#125a91] transition-colors relative z-10"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#167dc1] to-[#125a91]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white transition-colors duration-300 relative decorative-shapes">
        <div className="absolute inset-0 geometric-pattern opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#167dc1] to-[#0f4a7a] bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don&apos;t just take our word for it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 transition-colors duration-300 modern-card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#167dc1] to-[#125a91] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Let&apos;s discuss your project and bring your digital vision to life. 
              Contact us today for a free consultation.
            </p>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#167dc1] px-12 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300 inline-flex items-center space-x-2 hover:bg-blue-50"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
