
import React from 'react';
import Navbar from '@/components/Navbar';
import TechSphere from '@/components/TechSphere';
import TechCard from '@/components/TechCard';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold text-tech-dark leading-tight mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-tech-blue via-tech-indigo to-tech-purple text-transparent bg-clip-text">G Murali Yadav</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Full Stack Developer & AI Enthusiast
          </p>
          <p className="text-gray-600 mb-8">
            Passionate technophile with expertise in payment domains and IoT developments. 
            Creating customized AI tools to solve complex problems and integrate systems seamlessly.
          </p>
          <div className="flex space-x-4">
            <Button 
              className="bg-gradient-to-r from-tech-blue to-tech-purple hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-tech-indigo text-tech-indigo hover:bg-tech-indigo/10"
              onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
            >
              View Projects
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0">
          <TechSphere />
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-tech-dark">About Me</h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-600 mb-4">
              I'm a full stack software developer currently working in the payment domain. As a technophile, 
              I'm constantly eager to learn about new technologies and have a special interest in IoT developments.
            </p>
            <p className="text-gray-600 mb-4">
              My passion lies in creating innovative solutions using cutting-edge technologies. I believe in the power
              of AI and how it can transform businesses and everyday life.
            </p>
            <p className="text-gray-600">
              When I'm not coding, I'm exploring new tech trends, contributing to open-source projects, and sharing my
              knowledge through my YouTube channel <strong>TechTalksVirtually</strong>.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 px-4 container mx-auto bg-gradient-to-r from-gray-50 to-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12 text-tech-dark">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TechCard 
            title="Customized AI Solutions"
            description="We develop tailored AI tools as per your specific requirements, helping you solve complex problems efficiently."
          />
          <TechCard 
            title="Rapid Development"
            description="Our team specializes in quick development cycles, delivering high-quality tools and solutions in record time."
          />
          <TechCard 
            title="AI Integration"
            description="With our AI Universe Cloud platform, we make system integration easier than ever before."
          />
          <TechCard 
            title="IoT Development"
            description="Expertise in creating innovative IoT solutions that connect the physical and digital worlds."
          />
          <TechCard 
            title="Full Stack Development"
            description="End-to-end development services covering both frontend and backend technologies."
          />
          <TechCard 
            title="Payment Solutions"
            description="Specialized knowledge in payment systems and financial technology integration."
          />
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-tech-dark">Current Projects</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-tech-indigo">AI Universe Cloud</h3>
          <p className="text-gray-600 mb-6">
            Our flagship project aims to simplify system integration using AI. The AI Universe Cloud platform
            makes it easy to connect different systems and services, regardless of their underlying architecture.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h4 className="font-medium text-tech-dark mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Seamless integration between disparate systems</li>
              <li>AI-powered automated workflows</li>
              <li>Real-time data synchronization</li>
              <li>Customizable integration templates</li>
              <li>Comprehensive API management</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 container mx-auto bg-gradient-to-r from-gray-50 to-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12 text-tech-dark">What We've Achieved</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TechCard 
            title="AI Model Development"
            description="We've successfully created multiple AI models that are currently being used in production environments."
            className="bg-gradient-to-br from-white to-gray-50"
          />
          <TechCard 
            title="System Integration"
            description="Completed numerous successful system integrations using our proprietary AI Universe Cloud platform."
            className="bg-gradient-to-br from-white to-gray-50"
          />
          <TechCard 
            title="Payment Solutions"
            description="Developed secure and efficient payment processing systems for various clients in the financial sector."
            className="bg-gradient-to-br from-white to-gray-50"
          />
          <TechCard 
            title="IoT Innovations"
            description="Created innovative IoT solutions that bridge the gap between physical devices and digital systems."
            className="bg-gradient-to-br from-white to-gray-50"
          />
        </div>
      </section>
      
      {/* Collaboration Section */}
      <section id="collaborate" className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-tech-dark">Let's Collaborate</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <p className="text-gray-600 mb-6 text-center">
            We're currently looking for testers to help us improve our AI models and provide valuable feedback.
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-gradient-to-r from-tech-blue to-tech-purple hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Join as a Tester
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 container mx-auto bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-tech-dark">Get in Touch</h2>
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-tech-dark">Contact Information</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Name:</span> G Murali Yadav
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Email:</span> techtalksvritually.gmail.com
              </p>
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3 text-tech-dark">Connect with me:</h4>
                <div className="flex space-x-4">
                  <a href="https://twitter.com/gmuraliyadav6" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-tech-blue transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="https://instagram.com/_muralig" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-tech-purple transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/gmuraliyadav" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-tech-indigo transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://www.youtube.com/@TechTalksVirtually" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#FF0000] transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleContactSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-purple focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-purple focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-purple focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-tech-blue to-tech-purple hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-tech-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 TechTalksVirtually. All rights reserved.</p>
          <p className="text-gray-400">Created by G Murali Yadav</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
