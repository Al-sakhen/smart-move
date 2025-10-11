'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Briefcase, Palette, TrendingUp, Star, Users, Trophy, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Quantum Web Development',
      description: 'AI-powered websites with neural interfaces and quantum processing capabilities',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Holographic Mobile Apps',
      description: 'Next-gen AR/VR mobile applications with brain-computer interfaces',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Briefcase,
      title: 'AI Business Automation',
      description: 'Autonomous business systems powered by advanced machine learning',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Palette,
      title: 'Neural Design Systems',
      description: 'AI-generated interfaces that adapt to user consciousness and emotions',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Quantum Marketing',
      description: 'Predictive marketing using quantum algorithms and consciousness mapping',
      gradient: 'from-indigo-500 to-purple-600'
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
    <div className="min-h-screen bg-transparent transition-colors duration-300">
      {/* Futuristic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Holographic company name */}
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent filter drop-shadow-2xl">
                SMART MOVE
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent opacity-50 blur-sm"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                SMART MOVE
              </motion.div>
            </motion.h1>
            
            {/* Futuristic tagline */}
            <motion.p 
              className="text-xl md:text-3xl text-cyan-300 mb-4 font-light tracking-wider"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              NEXT-GEN IT SOLUTIONS
            </motion.p>
            
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              POWERED BY AI & INNOVATION
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Experience the future of digital transformation with our quantum-powered solutions, 
              AI-driven development, and immersive technologies that redefine what's possible in 2030.
            </motion.p>
            
            {/* Futuristic CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold overflow-hidden group"
                >
                  <span className="relative z-10">EXPLORE SOLUTIONS</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-cyan-400 opacity-20 animate-pulse" />
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 136, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
                >
                  <span className="relative z-10">VIEW PROJECTS</span>
                  <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Futuristic Services Section */}
      <section className="py-20 bg-slate-900 transition-colors duration-300 relative overflow-hidden">
        {/* Holographic grid background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 255, 136, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              QUANTUM SERVICES
            </h2>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto font-light">
              Advanced AI-powered solutions designed for the digital future
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
                className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group overflow-hidden"
              >
                {/* Holographic glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 relative z-10`}>
                  <service.icon className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-blue-500/50 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-100 relative z-10">{service.title}</h3>
                <p className="text-slate-300 mb-6 relative z-10">{service.description}</p>
                <Link href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-cyan-400 font-semibold flex items-center space-x-2 hover:text-cyan-300 transition-colors relative z-10"
                  >
                    <span>EXPLORE</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
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
      <section className="py-20 bg-gray-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-colors duration-300"
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
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let&apos;s discuss your project and bring your digital vision to life. 
              Contact us today for a free consultation.
            </p>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300 inline-flex items-center space-x-2"
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
