import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo';

export function GlowingEffectShowcase() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Glowing Effect Showcase
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our new interactive glowing effects that respond to your cursor movement
          </p>
        </div>
        <GlowingEffectDemo />
      </div>
    </section>
  );
}