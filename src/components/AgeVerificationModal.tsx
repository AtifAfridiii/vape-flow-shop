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
      <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pb-20 overflow-y-auto sm:items-center">
        <div className="w-full max-w-sm rounded-lg bg-card shadow-2xl mb-6 sm:mb-1 ">
          {/* Modal Content */}
          <div className="flex flex-col items-center gap-5 p-6">
            {/* Logo */}
            <img
              src="https://www.no1ukvapesupplier.co.uk/cdn/shop/files/logo_220x@2x.png?v=1722962006"
              alt="VapeShop Logo"
              className="h-16 w-auto"
            />

            {/* Title */}
            <h2 className="text-center text-2xl font-bold text-foreground">
              You Must Be 18 or Over to Enter This Site
            </h2>
            {/* Warning */}
            <p className="text-center text-xs font-medium text-destructive">
              This product contains nicotine. Nicotine is an addictive chemical and harmful to your health.
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
                className="flex-1 bg-primary hover:bg-blue-700"
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

