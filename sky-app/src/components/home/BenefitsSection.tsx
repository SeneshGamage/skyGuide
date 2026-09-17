import { BookOpen, Lightbulb, Trophy, Users, Smile } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Education",
    description: "We provide essential resources and learning opportunities to help aspiring travelers grow their skills and knowledge.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We encourage creative thinking and innovative approaches to travel planning, pushing boundaries in the industry.",
  },
  {
    icon: Trophy,
    title: "Achievement",
    description: "We celebrate and support our community members in reaching their goals and transforming passion into successful journeys.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We foster a collaborative environment where travelers can work together, share knowledge, and build meaningful connections.",
  },
  {
    icon: Smile,
    title: "Enjoyment",
    description: "We believe that learning and creating should be fun, engaging, and rewarding for all community members.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">SkyGuide</span>?
          </h2>
          <p className="text-navy max-w-2xl mx-auto">
            Experience travel planning like never before with our unique approach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-navy rounded-2xl p-6 text-center 
                         hover:scale-105 smooth-transition animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-white/10 group-hover:bg-primary/20 smooth-transition">
                  <benefit.icon className="w-6 h-6 text-white group-hover:text-primary smooth-transition" />
                </div>
              </div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
