import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Star, Quote, Plus, Building2, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import PartnershipDialog from "@/components/PartnershipDialog";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "New York, USA",
    rating: 5,
    text: "SkyGuide helped me find the perfect sunny destination for my winter getaway! The weather filters are incredibly accurate and the recommendations were spot on.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    type: "customer",
  },
  {
    id: 2,
    name: "James Liu",
    location: "London, UK",
    rating: 5,
    text: "As an avid hiker, finding destinations with the right weather conditions is crucial. SkyGuide made this so easy! Found my dream hiking spot in the Swiss Alps.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    type: "customer",
  },
  {
    id: 3,
    name: "Maria Garcia",
    location: "Barcelona, Spain",
    rating: 5,
    text: "Amazing tool for planning family vacations. The kids loved every destination we picked using SkyGuide. Will definitely use it again!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    type: "customer",
  },
  {
    id: 4,
    name: "TravelMax Agency",
    location: "Toronto, Canada",
    rating: 5,
    text: "We've integrated SkyGuide into our booking platform and our customers love it. The B2B API is robust and well-documented.",
    avatar: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&q=80",
    type: "client",
  },
  {
    id: 5,
    name: "Adventure Tours Co.",
    location: "Sydney, Australia",
    rating: 5,
    text: "SkyGuide has transformed how we plan adventure tours. Weather accuracy is crucial for our outdoor activities and SkyGuide delivers every time.",
    avatar: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&q=80",
    type: "client",
  },
  {
    id: 6,
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 4,
    text: "Great platform for discovering new travel destinations. The temperature filter helped me find comfortable spots during the summer heat.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    type: "customer",
  },
];

const Testimonials = () => {
  const [filter, setFilter] = useState<"all" | "customer" | "client">("all");
  const [showForm, setShowForm] = useState(false);
  const [showPartnershipDialog, setShowPartnershipDialog] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    location: "",
    review: "",
    rating: 5,
    type: "customer" as "customer" | "client",
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.review) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you for your review!");
    setReviewForm({ name: "", location: "", review: "", rating: 5, type: "customer" });
    setShowForm(false);
  };

  const filteredTestimonials = testimonials.filter((t) => {
    if (filter === "all") return true;
    return t.type === filter;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Travelers</span> Say
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join thousands of happy travelers who discovered their perfect weather destinations
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* Filter Toggle */}
          <div className="glass-card p-1 flex gap-1">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button
              variant={filter === "customer" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("customer")}
              className="flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Customers
            </Button>
            <Button
              variant={filter === "client" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("client")}
              className="flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              Clients
            </Button>
          </div>

          {/* Add Review Button */}
          <Button variant="hero" onClick={() => setShowForm(!showForm)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Review
          </Button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="glass-card p-6 max-w-xl mx-auto mb-12 animate-scale-in">
            <h3 className="text-lg font-semibold mb-4">Share Your Experience</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              {/* Review Type Toggle */}
              <div className="space-y-2">
                <Label>Review as</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant={reviewForm.type === "customer" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setReviewForm({ ...reviewForm, type: "customer" })}
                    className="flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Customer
                  </Button>
                  <Button
                    type="button"
                    variant={reviewForm.type === "client" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setReviewForm({ ...reviewForm, type: "client" })}
                    className="flex items-center gap-2"
                  >
                    <Building2 className="w-4 h-4" />
                    Client
                  </Button>
                </div>
              </div>

              {/* Star Rating */}
              <div className="space-y-2">
                <Label>Rating</Label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        className={cn(
                          "w-6 h-6 transition-colors",
                          star <= reviewForm.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="review-name">
                  Your Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="review-name"
                  placeholder="Enter your name"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="review-location">Location</Label>
                <Input
                  id="review-location"
                  placeholder="City, Country"
                  value={reviewForm.location}
                  onChange={(e) => setReviewForm({ ...reviewForm, location: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="review-text">
                  Your Review <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="review-text"
                  placeholder="Tell us about your experience..."
                  className="min-h-[120px]"
                  value={reviewForm.review}
                  onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                />
              </div>

              <Button variant="hero" type="submit" className="w-full">
                Submit Review
              </Button>
            </form>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-card p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    {testimonial.name}
                    {testimonial.type === "client" && (
                      <Building2 className="w-4 h-4 text-primary" />
                    )}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Client CTA */}
        <div className="navy-card text-center max-w-2xl mx-auto">
          <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Become a Client</h2>
          <p className="text-accent-foreground/80 mb-6">
            Partner with SkyGuide to offer weather-based travel planning to your customers. 
            Access our powerful API and white-label solutions.
          </p>
          <Button variant="hero" size="lg" onClick={() => setShowPartnershipDialog(true)}>
            Request Partnership
          </Button>
        </div>

        <PartnershipDialog 
          open={showPartnershipDialog} 
          onOpenChange={setShowPartnershipDialog} 
        />
      </div>
    </Layout>
  );
};

export default Testimonials;
