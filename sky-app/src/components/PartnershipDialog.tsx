import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/Supabaseclient";

interface PartnershipDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const industries = [
  "Travel Agency",
  "Tour Operator",
  "Hotel & Hospitality",
  "Airlines",
  "Technology",
  "Other",
];

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

const PartnershipDialog = ({ open, onOpenChange }: PartnershipDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    industry: "",
    companySize: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    if (!formData.name || !formData.email || !formData.companyName || !formData.industry || !formData.companySize) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.from("partnership_leads").insert({
      contact_name: formData.name,
      email: formData.email,
      company_name: formData.companyName,
      industry: formData.industry,
      company_size: formData.companySize,
      message: formData.message || null,
    });
    setIsSubmitting(false);

    if (error) {
      toast.error("Couldn't submit your request. Please try again.");
      console.error(error);
      return;
    }

    toast.success("Partnership request submitted! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      companyName: "",
      industry: "",
      companySize: "",
      message: "",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-accent">
            Business Inquiry
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Your Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">
              Company Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="companyName"
              placeholder="Your Company Inc."
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>
                Industry <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.industry}
                onValueChange={(value) =>
                  setFormData({ ...formData, industry: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>
                Company Size <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) =>
                  setFormData({ ...formData, companySize: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {companySizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your business and how we can work together..."
              className="min-h-[100px]"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Submit Inquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PartnershipDialog;