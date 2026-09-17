import { Layout } from "@/components/layout/Layout";
import { Cloud, Sun, Users, Globe, Award, Heart, Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/about/ContactForm";
import SocialLinks from "@/components/about/SocialLinks";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sun className="w-12 h-12 text-primary animate-float" />
            <Cloud className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">SkyGuide</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to revolutionize travel planning by putting weather at the center of every journey.
          </p>
        </div>

        {/* Story */}
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              SkyGuide was born from a simple frustration: planning the perfect vacation only to arrive 
              and find unexpected weather ruining the experience. We've all been there – packing for 
              sunshine and finding rain, or expecting cool breezes and facing scorching heat.
            </p>
            <p>
              Founded in 2024, our team of travel enthusiasts and weather data scientists came together 
              to create a platform that puts weather conditions first. We believe that the best travel 
              experiences happen when the weather aligns with your plans.
            </p>
            <p>
              Today, SkyGuide helps thousands of travelers worldwide discover destinations that match 
              their ideal weather preferences, ensuring every trip is perfectly planned from the start.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-6 text-center">
            <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold text-foreground">500+</p>
            <p className="text-muted-foreground">Destinations</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Users className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold text-foreground">50K+</p>
            <p className="text-muted-foreground">Happy Travelers</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Award className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold text-foreground">99%</p>
            <p className="text-muted-foreground">Accuracy Rate</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Heart className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold text-foreground">4.9</p>
            <p className="text-muted-foreground">User Rating</p>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Alex Chen", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
              { name: "Emma Wilson", role: "Head of Data", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
              { name: "Marcus Johnson", role: "Lead Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
            ].map((member) => (
              <div key={member.name} className="glass-card p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send us a Message</h3>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="glass-card p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Weather Lane<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      hello@skyguide.com<br />
                      support@skyguide.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +1 (555) 123-4567<br />
                      Mon-Fri: 9AM - 6PM PST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
            <SocialLinks />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
