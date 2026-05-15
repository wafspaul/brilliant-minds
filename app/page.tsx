'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import { 
  Wifi, BookOpen, Briefcase, Award, 
  Users, Globe, Heart, BarChart4, 
  ArrowRight, Code, PenTool 
} from 'lucide-react';
import Image from 'next/image';

function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsVisible] = useState(false);
  const solutionsRef = useRef(null);
  const impactRef = useRef(null);
  const testimonialRef = useRef(null);

  const { scrollYProgress: solutionsScroll } = useScroll({
    target: solutionsRef,
    offset: ["start end", "end start"]
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { scrollYProgress: impactScroll } = useScroll({
    target: impactRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(solutionsScroll, [0, 1], [0, -100]);
  const opacityTransform = useTransform(solutionsScroll, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const solutions = [
    {
      title: "Digital Inclusion",
      description: "Breaking down barriers to technology access and ensuring everyone has the tools and skills needed to participate in the digital economy.",
      icon: <Wifi className="h-8 w-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-blue-500/20 to-blue-700/40"
    },
    {
      title: "E-Learning Revolution",
      description: "Transforming education through innovative digital platforms that make quality learning accessible to everyone, everywhere.",
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-green-500/20 to-green-700/40"
    },
    {
      title: "Gig Economy Integration",
      description: "Connecting freelancers and businesses through smart platforms that create sustainable economic opportunities for all.",
      icon: <Briefcase className="h-8 w-8 text-purple-500" />,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-purple-500/20 to-purple-700/40"
    },
    {
      title: "Skill Development",
      description: "Empowering individuals with cutting-edge skills and certifications that align with tomorrow's job market demands.",
      icon: <Award className="h-8 w-8 text-red-500" />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-rose-500/20 to-rose-700/40"
    }
  ];

  const impactMetrics = [
    {
      number: "6,000+",
      title: "People Reached",
      description: "Individuals reached across our programs to date",
      color: "text-blue-500"
    },
    {
      number: "2",
      title: "Live Platforms",
      description: "AI-powered tools built and deployed in production",
      color: "text-green-500"
    },
    {
      number: "47",
      title: "Counties Mapped",
      description: "All Kenya counties covered by the connectivity map",
      color: "text-purple-500"
    },
    {
      number: "Kenya",
      title: "Home Base",
      description: "Built in Nairobi, focused on East Africa first",
      color: "text-rose-500"
    }
  ];

  // Testimonials section removed — real stories coming as platforms grow

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solutions.length);
    }, 5000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (solutionsRef.current) {
      observer.observe(solutionsRef.current);
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [solutions.length]);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      
      <HeroSection 
        title="Revolutionizing Systems Through Technology—Solving Our Key Societal Challenges"
        subtitle="Empowering communities with innovative solutions that bridge gaps, create opportunities, and build a more inclusive future for everyone."
        primaryCTA={{
          text: "Explore Solutions",
          href: "/solutions"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "/about"
        }}
        backgroundType="video"
        backgroundSrc="/assets/vid.mp4"
      />

      {/* Solutions Section */}
      <section 
        id="solutions" 
        ref={solutionsRef}
        className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-navy-900 to-blue-900"
      >
        <motion.div 
          style={{ y: parallaxY }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              style={{ opacity: opacityTransform }}
              className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
            >
              <div className="relative h-[400px] md:h-[500px] overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center" 
                      style={{ backgroundImage: `url(${solutions[currentSlide].image})` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-tr ${solutions[currentSlide].color} opacity-70`}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-8 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-lg mb-6">
                          {solutions[currentSlide].icon}
                        </div>
                        <div className="bg-blue-500/40 rounded-xl p-2">
                        <h3 className="text-4xl font-bold text-white font- mb-4">{solutions[currentSlide].title}</h3>
                        <p className="text-white text-xl font-semibold max-w-md mx-auto">{solutions[currentSlide].description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutions.map((solution, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    onClick={() => setCurrentSlide(index)}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300
                      ${currentSlide === index 
                        ? 'bg-white/15 backdrop-blur-lg shadow-lg border border-white/20' 
                        : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm'}`}
                  >
                    <div className={`flex items-center mb-4 ${currentSlide === index ? 'text-white' : 'text-white/70'}`}>
                      {solution.icon}
                      <h3 className="ml-3 text-xl font-semibold">{solution.title}</h3>
                    </div>
                    <p className={`text-sm ${currentSlide === index ? 'text-white/90' : 'text-white/60'}`}>
                      {solution.description.substring(0, 80)}...
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium">
                      <span className={`${currentSlide === index ? 'text-blue-400' : 'text-blue-300'}`}>Learn More</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section 
        id="impact" 
        ref={impactRef}
        className="py-20 lg:py-32 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real numbers that demonstrate the positive change we&apos;re creating in communities worldwide.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className={`text-5xl font-bold mb-2 ${metric.color}`}>{metric.number}</h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{metric.title}</h4>
                <p className="text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 flex justify-center"
          >
            <a 
              href="#impact-details" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              <BarChart4 className="h-5 w-5 mr-2" />
              View Detailed Impact Report
            </a>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section
        id="community"
        ref={testimonialRef}
        className="py-20 lg:py-32 relative overflow-hidden bg-gray-50"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Community We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real people in Kenya navigating real challenges. Our platforms are built around their needs, not the other way round.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/bm-community.jpeg"
                alt="Community members we work with"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium text-blue-200">Nairobi, Kenya</p>
                <p className="text-lg font-bold">Where it starts.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">Built for Kenya. Scalable beyond it.</h3>
              <p className="text-gray-700 leading-relaxed">
                We started with a simple observation: the tools young Kenyans need to find work, build skills, and access the internet either don&apos;t exist or don&apos;t work for the context they live in.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kazi Pap does AI-powered job matching for Kenyan youth. The Kenya Connectivity Map makes the digital divide visible county by county. These aren&apos;t pilots. They&apos;re live platforms that real people use today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://kazipap.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-center"
                >
                  Try Kazi Pap
                </a>
                <a
                  href="https://kenya-connectivity-map.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors text-center"
                >
                  View Connectivity Map
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
      id="cta" 
      className="py-20 lg:py-32 relative text-white overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/2 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
          >
            Ready to Create Impact Together?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed"
          >
            Join our network of partners and help us solve the world&apos;s most pressing challenges through innovative technology solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/get-involved"
              className="px-10 py-5 rounded-full bg-white text-blue-900 font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              Become a Partner
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-10 py-5 rounded-full bg-transparent border-2 border-white/80 text-white font-bold text-lg hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              Schedule a Call
            </motion.a>
          </motion.div>

          {/* Additional Visual Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex justify-center items-center space-x-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">6,000+</div>
              <div className="text-sm text-white/70">People Reached</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">47</div>
              <div className="text-sm text-white/70">Counties Mapped</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2</div>
              <div className="text-sm text-white/70">Live Platforms</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* Features Grid Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Make a Difference</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to solving digital equity challenges
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Wifi className="h-6 w-6" />,
                title: "Digital Inclusion Programs",
                description: "Providing access to devices and internet connectivity for underserved communities"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Community Training",
                description: "On-site workshops and resources to build digital literacy skills"
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Global Partnerships",
                description: "Collaborating with organizations worldwide to maximize impact"
              },
              {
                icon: <Code className="h-6 w-6" />,
                title: "Technology Innovation",
                description: "Creating custom software solutions for specific community needs"
              },
              {
                icon: <PenTool className="h-6 w-6" />,
                title: "Content Creation",
                description: "Developing relevant educational resources in multiple languages"
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Volunteer Network",
                description: "Engaging passionate professionals to share their expertise"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Homepage;