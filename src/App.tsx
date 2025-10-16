import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/contexts/CartContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import Header from "@/components/layout/Header";
import SinglePageLayout from "@/components/layout/SinglePageLayout";
import AgeVerificationModal from "@/components/AgeVerificationModal";
import DiscountBanner from "@/components/ui/DiscountBanner";
import ChatIcon from "@/components/ui/chatWith";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <SidebarProvider>
          <Toaster />
          <Sonner />
          <AgeVerificationModal />
          <DiscountBanner />
          <ChatIcon />
          <div className="min-h-screen bg-background">
            <Header />
            <SinglePageLayout />
          </div>
        </SidebarProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
