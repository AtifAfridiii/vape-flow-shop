import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/contexts/CartContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/layout/Header";
import SinglePageLayout from "@/components/layout/SinglePageLayout";
import AgeVerificationModal from "@/components/AgeVerificationModal";
import DiscountBanner from "@/components/ui/DiscountBanner";
import ChatIcon from "@/components/ui/chatWith";
import AuthModal, { type AuthTab } from "@/components/AuthModal";

const queryClient = new QueryClient();

const App = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<AuthTab>("signup");

  const openAuth = (tab: AuthTab = "signup") => {
    setAuthTab(tab);
    setAuthOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <CartProvider>
            <SidebarProvider>
            <Toaster />
            <Sonner />
            <AgeVerificationModal />
            <DiscountBanner onOpenAuth={openAuth} />
            <AuthModal open={authOpen} onOpenChange={setAuthOpen} tab={authTab} onTabChange={setAuthTab} />
            <ChatIcon />
            <div className="min-h-screen bg-background">
              <Header />
              <SinglePageLayout />
            </div>
            </SidebarProvider>
          </CartProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
