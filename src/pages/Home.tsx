import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import PhotoGrid from '../components/PhotoGrid';

const featuredPhotos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Wedding Bliss',
    category: 'Wedding'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    title: 'Urban Portrait',
    category: 'Portrait'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Scenic Landscape',
    category: 'Nature'
  }
];

const services = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Capturing your special day with elegance and emotion.',
    icon: '💍'
  },
  {
    id: 2,
    title: 'Portrait Sessions',
    description: 'Professional portraits that showcase your unique personality.',
    icon: '👤'
  },
  {
    id: 3,
    title: 'Commercial Photography',
    description: 'High-quality images for your business and products.',
    icon: '🏢'
  },
  {
    id: 4,
    title: 'Event Coverage',
    description: 'Comprehensive coverage for all your special events.',
    icon: '🎉'
  }
];

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Capturing Life's<br />Beautiful Moments
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-neutral-200 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional photography services that tell your unique story through stunning visuals.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/projects"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors inline-flex items-center"
            >
              View Portfolio
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="About Sinha Studio"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <div>
              <SectionTitle
                title="About Sinha Studio"
                subtitle="We are passionate about photography and dedicated to capturing the essence of every moment."
              />
              <motion.p
                className="text-neutral-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Founded in 2015, Sinha Studio has been at the forefront of creative photography, 
                delivering exceptional visual stories for clients across various industries. 
                Our team of skilled photographers brings a unique perspective to every project, 
                ensuring that each image tells a compelling story.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center text-black font-medium hover:underline"
                >
                  Learn more about us
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Services"
            subtitle="We offer a wide range of photography services to meet your needs."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Featured Work"
            subtitle="Explore some of our best photography projects."
            centered
          />
          <PhotoGrid photos={featuredPhotos} />
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Hear from the people who have experienced our services."
            centered
          />
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-neutral-800 p-8 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl italic mb-6">
                "Sinha Studio captured our wedding day perfectly. The attention to detail and the ability to capture 
                genuine emotions made our photos truly special. We couldn't be happier with the results!"
              </p>
              <div>
                <p className="font-medium">Priya & Rahul Sharma</p>
                <p className="text-neutral-400 text-sm">Wedding Photography</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to capture your story?
          </motion.h2>
          <motion.p
            className="text-neutral-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's create beautiful memories together. Contact us today to discuss your photography needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;