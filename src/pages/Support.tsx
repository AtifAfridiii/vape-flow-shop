import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Support = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Customer Support</h1>

      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Our customer support team is here to help you with any questions or concerns.
            Feel free to reach out to us through any of the following channels:
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground">support@vapeshop.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground">+44 20 1234 5678</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                <p className="text-sm text-muted-foreground">Mon-Fri: 9AM - 6PM</p>
                <p className="text-sm text-muted-foreground">Sat-Sun: 10AM - 4PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                <p className="text-sm text-muted-foreground">123 High Street</p>
                <p className="text-sm text-muted-foreground">London, UK</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              How long does delivery take?
            </h3>
            <p className="text-muted-foreground">
              Standard delivery takes 2-3 business days. Express delivery options are
              available at checkout.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              What is your return policy?
            </h3>
            <p className="text-muted-foreground">
              We offer a 14-day return policy for unopened products in their original
              packaging. Please contact our support team to initiate a return.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              Do you offer warranty on products?
            </h3>
            <p className="text-muted-foreground">
              Yes, all devices come with a manufacturer's warranty. Duration varies by
              product - please check individual product descriptions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              Are your products genuine?
            </h3>
            <p className="text-muted-foreground">
              Absolutely. We only source products directly from authorized distributors and
              manufacturers to guarantee authenticity.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;
