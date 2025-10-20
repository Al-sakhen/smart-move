'use client';

import { motion } from 'framer-motion';
import { Code, CheckCircle, ArrowRight, Globe, Smartphone, Zap, Shield, Search, Users } from 'lucide-react';
import Link from 'next/link';

export default function WebDevelopment() {
  const features = [
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Websites that look perfect on all devices and screen sizes'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized for speed with advanced caching and compression'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and regular updates'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Search engine friendly structure and content optimization'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Intuitive user experience and accessibility compliance'
    },
    {
      icon: Code,
      title: 'Modern Technologies',
      description: 'Built with the latest frameworks and development tools'
    }
  ];

  const technologies = [
    { name: 'React', color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
    { name: 'Vue.js', color: 'from-green-400 to-emerald-500' },
    { name: 'Angular', color: 'from-red-500 to-pink-500' },
    { name: 'Node.js', color: 'from-green-600 to-lime-500' },
    { name: 'TypeScript', color: 'from-[#167dc1] to-indigo-600' },
    { name: 'Tailwind CSS', color: 'from-cyan-400 to-[#167dc1]' },
    { name: 'MongoDB', color: 'from-green-500 to-green-700' }
  ];

  const services = [
    {
      title: 'Custom Web Applications',
      description: 'Tailored web applications built to your specific business requirements',
      included: ['Custom functionality', 'Database integration', 'User authentication', 'Admin dashboard']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing and inventory management',
      included: ['Shopping cart', 'Payment gateway', 'Order management', 'Analytics dashboard']
    },
    {
      title: 'Content Management Systems',
      description: 'Easy-to-use CMS for managing your website content and media',
      included: ['Content editor', 'Media library', 'User roles', 'SEO tools']
    },
    {
      title: 'API Development',
      description: 'RESTful APIs and GraphQL endpoints for seamless data integration',
      included: ['REST APIs', 'GraphQL', 'Documentation', 'Testing suite']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your business goals, target audience, and technical requirements.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes to visualize the final product.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your website using modern technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Rigorous testing followed by deployment and performance monitoring.'
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
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-[#167dc1] to-cyan-500 flex items-center justify-center mx-auto mb-8">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#167dc1] to-cyan-600 bg-clip-text text-transparent">
                Web Development
              </span>
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Create powerful, scalable web applications that drive business growth 
              and deliver exceptional user experiences.
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
                  className="bg-gradient-to-r from-[#167dc1] to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#167dc1] text-[#167dc1] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#167dc1] hover:text-white transition-all duration-300"
                  aria-label="View our web development portfolio and completed projects"
                >
                  View Our Web Development Portfolio
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
              Why Choose Our Web Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build websites that not only look great but perform exceptionally well
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#167dc1] to-cyan-500 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest and most reliable technologies to build your web solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-r ${tech.color} rounded-2xl p-6 text-center text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                {tech.name}
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
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web solutions tailored to your business needs
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures project success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#167dc1] to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#167dc1] to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Let&apos;s create a powerful web presence that drives your business forward. 
              Contact us today for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#167dc1] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300 inline-flex items-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#167dc1] transition-all duration-300"
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