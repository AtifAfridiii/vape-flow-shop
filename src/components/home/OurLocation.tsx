import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const OurLocation = () => {
  return (
    <section className="scroll-mt-32 animate-in fade-in duration-500">
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold text-foreground pb-3 border-b-2 border-accent/30 inline-block transition-all duration-300 hover:border-accent">
          Our Location
        </h2>

        <Card className="border-border shadow-md hover:shadow-xl transition-all duration-300 group">
          <CardHeader className="border-b border-border bg-gradient-to-r from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-colors duration-300">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              Find Us Here
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-foreground mb-4">
                  Visit our flagship store located in the heart of London. Our location is easily accessible by public transport, with multiple bus routes and underground stations nearby.
                </p>

                <div className="space-y-3 text-foreground">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Address:</span>
                    <span>123 High Street, London, UK</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Nearest Tube:</span>
                    <span>Oxford Circus Station (Central, Bakerloo, and Victoria lines)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Bus Routes:</span>
                    <span>14, 19, 38, 43, 73, 98, 159, 176, 189, 205, 274, 453</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Parking:</span>
                    <span>Several public car parks available within a 5-minute walk</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-center ">
                <div className="relative w-full max-w-2xl border-transparent ">
                  <img
                    src="https://img.freepik.com/premium-vector/geolocation-with-dollar-currency-symbols-dashed-line-arrow-route-path-location-pin-with-winding-vect_833685-2978.jpg?w=2000"
                    alt="Our location with geolocation route and currency symbols"
                    className="rounded-lg shadow-lg w-full h-auto object-cover border-2 border-border"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg pointer-events-none"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>


      </div>
    </section>
  );
};

export default OurLocation;