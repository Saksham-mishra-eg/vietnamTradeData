"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type BillingCycle = 'monthly' | 'annually';

interface PricingContextType {
  billingCycle: BillingCycle;
  setBillingCycle: (cycle: BillingCycle) => void;
  isYearly: boolean;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export function PricingProvider({ children }: { children: ReactNode }) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annually');

  return (
    <PricingContext.Provider
      value={{
        billingCycle,
        setBillingCycle,
        isYearly: billingCycle === 'annually',
      }}
    >
      {children}
    </PricingContext.Provider>
  );
}

export function usePricing() {
  const context = useContext(PricingContext);
  if (context === undefined) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return context;
}
