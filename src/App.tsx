import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/MobileNav";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <SidebarProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <Header />
              <main className="container mx-auto px-4 pt-20 pb-20">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/support" element={<Support />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <MobileNav />
            </div>
          </BrowserRouter>
        </SidebarProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
