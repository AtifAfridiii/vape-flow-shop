import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const AgeVerificationModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already verified their age in this session
    const ageVerified = sessionStorage.getItem("ageVerified");

    if (!ageVerified) {
      // Show the modal on first visit
      setIsVisible(true);
    }
  }, []);

  const handleYes = () => {
    // Store verification in sessionStorage
    sessionStorage.setItem("ageVerified", "true");
    setIsVisible(false);
  };

  const handleNo = () => {
    // Redirect to a blank page or show access denied
    window.location.href = "about:blank";
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/70" />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg bg-card shadow-2xl">
          {/* Modal Content */}
          <div className="flex flex-col items-center gap-6 p-8">
            {/* Logo */}
            <img
              src="https://www.no1ukvapesupplier.co.uk/cdn/shop/files/logo_220x@2x.png?v=1722962006"
              alt="VapeShop Logo"
              className="h-20 w-auto"
            />

            {/* Title */}
            <h2 className="text-center text-2xl font-bold text-foreground">
              You Must Be 18 or Over to Enter This Site
            </h2>

            {/* Description */}
            <p className="text-center text-sm text-muted-foreground">
              By clicking "Yes", you confirm that you are 18 years of age or older and agree to our terms of service.
            </p>

            {/* Buttons */}
            <div className="flex w-full gap-4">
              <Button
                onClick={handleNo}
                variant="outline"
                className="flex-1"
              >
                No
              </Button>
              <Button
                onClick={handleYes}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Yes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeVerificationModal;

