import ContactForm from "@/components/forms/contactForm";
import { Phone, MapPin, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to transform your educational vision into reality? Get in touch with our team of EdTech experts.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              We&apos;re here to help you build the perfect EdTech platform. 
              Whether you have questions about our services or want to discuss your project, 
              we&apos;d love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Office Address</h3>
                <p className="text-muted-foreground">
                AXOL Ltd<br />
                  9 York Place<br />
                  Leeds, LS1 2DS<br />
                  United Kingdom
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a 
                  href="tel:+443333399157" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +44 3333 399157
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Linkedin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/company/axol-team/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @axol-team
                </a>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 5:30 PM GMT</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
