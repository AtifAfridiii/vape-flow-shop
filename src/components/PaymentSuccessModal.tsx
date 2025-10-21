import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaymentSuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  orderNumber?: string;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({
  open,
  onOpenChange,
  orderNumber = Math.random().toString(36).substring(2, 10).toUpperCase(),
}) => {
  useEffect(() => {
    if (open) {
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onOpenChange(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[92vw] max-w-md p-6 sm:p-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6 py-4">
          {/* Success Icon with Animation */}
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
            <div className="relative bg-green-500/10 p-4 rounded-full">
              <CheckCircle2 className="h-16 w-16 text-green-500 animate-in zoom-in duration-500" />
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <h2 className="text-2xl font-bold text-foreground">Payment Successful!</h2>
            <p className="text-muted-foreground">
              Your order has been placed successfully
            </p>
          </div>

          {/* Order Details */}
          <div className="w-full bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-lg p-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Order Number</span>
              <span className="text-base font-bold text-primary">#{orderNumber}</span>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-muted-foreground animate-in fade-in duration-500 delay-500">
            You will receive a confirmation email shortly
          </p>

          {/* Close Button */}
          <Button
            onClick={() => onOpenChange(false)}
            className="w-full bg-primary hover:bg-blue-600 text-primary-foreground font-semibold transition-all duration-200 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700"
          >
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentSuccessModal;
