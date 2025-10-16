import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">About Us</h1>

      <Card>
        <CardHeader>
          <CardTitle>Welcome to VapeShop</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We are your trusted destination for premium vaping products. With years of
            experience in the industry, we pride ourselves on offering high-quality devices,
            e-liquids, and accessories to satisfy every vaper's needs.
          </p>
          <p>
            Our mission is to provide excellent customer service and a carefully curated
            selection of products from the most reputable brands in the market.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why Choose Us?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Extensive range of products from leading brands</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Competitive prices and regular special offers</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Fast and reliable delivery service</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Expert customer support team</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Commitment to quality and customer satisfaction</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Values</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            <strong className="text-foreground">Quality:</strong> We only stock products
            that meet our high standards for quality and safety.
          </p>
          <p>
            <strong className="text-foreground">Customer Service:</strong> Your satisfaction
            is our priority. We're here to help with any questions or concerns.
          </p>
          <p>
            <strong className="text-foreground">Responsibility:</strong> We promote
            responsible vaping and comply with all relevant regulations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
