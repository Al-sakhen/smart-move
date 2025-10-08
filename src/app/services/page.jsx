'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Briefcase, Palette, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import ThreeBackground from '@/components/ThreeBackground';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Create modern, responsive websites that engage your audience and drive business growth.',
      features: ['React & Next.js', 'E-commerce Solutions', 'CMS Development', 'API Integration'],
      gradient: 'from-blue-500 to-cyan-500',
      href: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Build powerful mobile applications for iOS and Android with seamless user experiences.',
      features: ['Native iOS & Android', 'React Native', 'Flutter Development', 'App Store Optimization'],
      gradient: 'from-purple-500 to-pink-500',
      href: '/services/mobile-development'
    },
    {
      icon: Briefcase,
      title: 'Business Solutions',
      description: 'Streamline your operations with custom software solutions tailored to your business needs.',
      features: ['ERP Systems', 'CRM Solutions', 'Workflow Automation', 'Data Analytics'],
      gradient: 'from-green-500 to-emerald-500',
      href: '/services/business-solutions'
    },
    {
      icon: Palette,
      title: 'Design Services',
      description: 'Create stunning visual experiences that captivate users and represent your brand perfectly.',
      features: ['UI/UX Design', 'Brand Identity', 'Graphic Design', 'Prototyping'],
      gradient: 'from-orange-500 to-red-500',
      href: '/services/design'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Boost your online presence with data-driven marketing strategies and social media management.',
      features: ['Social Media Marketing', 'SEO Optimization', 'Content Strategy', 'Analytics & Reporting'],
      gradient: 'from-indigo-500 to-purple-500',
      href: '/services/marketing'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business goals, target audience, and project requirements through detailed consultation.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and roadmap tailored to your specific needs and objectives.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our creative team designs beautiful, user-friendly interfaces that align with your brand identity.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'We build robust, scalable solutions using the latest technologies and best practices.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures your solution works flawlessly across all devices and platforms.'
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We deploy your solution and provide ongoing support to ensure optimal performance.'
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              We offer comprehensive IT solutions designed to accelerate your business growth 
              and digital transformation journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={service.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow duration-300 flex items-center justify-center space-x-2`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project's success from start to finish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help transform your business with our comprehensive IT solutions.
            </p>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300 inline-flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}