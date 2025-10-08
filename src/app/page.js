'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Briefcase, Palette, TrendingUp, Star, Users, Trophy, Clock } from 'lucide-react';
import Link from 'next/link';
import ThreeBackground from '@/components/ThreeBackground';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Briefcase,
      title: 'Business Solutions',
      description: 'Custom software solutions to streamline your business processes',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'Design Services',
      description: 'Beautiful UI/UX designs that captivate and convert users',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Social media management and marketing strategies that drive results',
      gradient: 'from-indigo-500 to-purple-500'
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
    <div className="min-h-screen">
      <ThreeBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Smart Move
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Your Trusted Partner for
            </p>
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Complete IT Solutions
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              From web development to mobile apps, business solutions to digital marketing - 
              we bring your digital vision to life with cutting-edge technology and creative design.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700"
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
      <section className="py-20 bg-gray-50">
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
              Don't just take our word for it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
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
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
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
              Let's discuss your project and bring your digital vision to life. 
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
