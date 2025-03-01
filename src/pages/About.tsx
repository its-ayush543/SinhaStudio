import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const teamMembers = [
  {
    id: 1,
    name: 'Aditya Sinha',
    role: 'Founder & Lead Photographer',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    bio: 'With over 15 years of experience, Aditya has a keen eye for detail and a passion for storytelling through photography.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Portrait Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    bio: 'Priya specializes in portrait photography, bringing out the unique personality of each subject in her stunning images.'
  },
  {
    id: 3,
    name: 'Rahul Verma',
    role: 'Wedding Photographer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    bio: 'Rahul has a talent for capturing the most emotional and joyful moments of wedding celebrations.'
  }
];

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-serif font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Sinha Studio
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We are a team of passionate photographers dedicated to capturing life's most precious moments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
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
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
                alt="Our Story"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <div>
              <SectionTitle
                title="Our Story"
                subtitle="How Sinha Studio came to be and our journey in photography."
              />
              <motion.div
                className="space-y-4 text-neutral-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p>
                  Founded in 2015 by Aditya Sinha, our studio began as a small passion project that quickly grew into a 
                  full-service photography business. What started as a love for capturing moments has evolved into a 
                  dedicated team of professionals committed to visual storytelling.
                </p>
                <p>
                  Over the years, we've had the privilege of working with hundreds of clients, from couples celebrating 
                  their special day to businesses looking to showcase their products and services. Each project has 
                  contributed to our growth and refined our artistic vision.
                </p>
                <p>
                  Today, Sinha Studio is recognized for its distinctive style, attention to detail, and commitment to 
                  exceeding client expectations. We continue to push creative boundaries while staying true to our 
                  founding principles of authenticity and excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <SectionTitle
                title="Our Approach"
                subtitle="How we work to create stunning images that tell your story."
              />
              <motion.div
                className="space-y-4 text-neutral-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p>
                  At Sinha Studio, we believe that great photography is about more than just technical skill—it's about 
                  connection, emotion, and storytelling. Our approach combines technical expertise with a genuine interest 
                  in our clients and their stories.
                </p>
                <p>
                  Before every shoot, we take the time to understand your vision, preferences, and expectations. This 
                  collaborative process ensures that the final images not only meet but exceed your expectations.
                </p>
                <p>
                  During the shoot, we create a comfortable and relaxed environment that allows for authentic moments to 
                  unfold naturally. Our post-production process is meticulous, with each image carefully edited to enhance 
                  its natural beauty while maintaining authenticity.
                </p>
              </motion.div>
            </div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Our Approach"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Meet the Team"
            subtitle="The talented photographers behind Sinha Studio."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-neutral-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-neutral-600 mb-4">{member.role}</p>
                  <p className="text-neutral-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our work and relationships."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-medium mb-3">Excellence</h3>
              <p className="text-neutral-300">
                We strive for excellence in every aspect of our work, from the initial consultation to the final delivery.
              </p>
            </motion.div>
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-medium mb-3">Integrity</h3>
              <p className="text-neutral-300">
                We operate with honesty, transparency, and respect in all our client relationships.
              </p>
            </motion.div>
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-medium mb-3">Creativity</h3>
              <p className="text-neutral-300">
                We embrace innovation and creative thinking to deliver unique and compelling visual stories.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;