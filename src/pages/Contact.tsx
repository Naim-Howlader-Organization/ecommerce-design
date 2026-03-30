import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => (
  <Layout>
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold">Get in Touch</h1>
        <p className="mt-2 text-muted-foreground">We'd love to hear from you</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="How can we help?" rows={5} />
          </div>
          <Button type="submit" className="rounded-full px-8" size="lg">
            Send Message
          </Button>
        </form>

        <div className="space-y-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p>123 Commerce Street, Suite 400<br />San Francisco, CA 94102</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p>hello@luxestore.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-2">Business Hours</h3>
            <p className="text-muted-foreground">Monday – Friday: 9am – 6pm PST<br />Saturday – Sunday: 10am – 4pm PST</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
