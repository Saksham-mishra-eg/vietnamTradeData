"use client";

import { Card, CardContent, CardHeader } from "components/ui/card";
import { TimelineContent } from "components/ui/timeline-animation";
import NumberFlow from "@number-flow/react";
import { Database, Ship, TrendingUp, CheckCircle2, Globe, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { usePricing } from "contexts/PricingContext";

const plans = [
  {
    name: "Starter",
    description:
      "Perfect for small businesses and startups exploring Vietnam trade data",
    price: 250,
    yearlyPrice: 1400,
    buttonText: "Buy Now",
    buttonVariant: "outline" as const,
    features: [
      { text: "50,000 shipment records/month", icon: <Ship size={20} /> },
      { text: "Basic search & filters", icon: <Database size={20} /> },
      { text: "Standard data exports", icon: <FileText size={20} /> },
    ],
    includes: [
      "Starter includes:",
      "Email support",
      "Monthly data updates",
      "Basic analytics dashboard",
      "CSV/Excel export",
    ],
  },
  {
    name: "Essential",
    description:
      "Best value for growing businesses needing comprehensive trade insights",
    price: 500,
    yearlyPrice: 4000,
    buttonText: "Buy Now",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "Unlimited shipment records", icon: <Ship size={20} /> },
      { text: "Advanced analytics & trends", icon: <TrendingUp size={20} /> },
      { text: "API access included", icon: <Globe size={20} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Priority email & chat support",
      "Real-time data updates",
      "Custom reports & dashboards",
      "Competitor intelligence",
      "Market trend analysis",
    ],
  },
  {
    name: "Expert",
    description:
      "Advanced solution with dedicated support for large teams and enterprises",
    price: 1200,
    yearlyPrice: 9000,
    buttonText: "Buy Now",
    buttonVariant: "outline" as const,
    features: [
      { text: "Unlimited everything", icon: <Ship size={20} /> },
      { text: "Dedicated account manager", icon: <Globe size={20} /> },
      { text: "Custom integrations", icon: <TrendingUp size={20} /> },
    ],
    includes: [
      "Everything in Essential, plus:",
      "24/7 phone & priority support",
      "White-label solutions",
      "Custom data fields",
      "Multi-user management",
      "SLA guarantees",
      "On-premise deployment option",
    ],
  },
  {
    name: "Customized Plan",
    description:
      "Tailored solution designed specifically for your unique business requirements",
    price: 0,
    yearlyPrice: 0,
    customPrice: "Custom",
    buttonText: "Buy Now",
    buttonVariant: "outline" as const,
    features: [
      { text: "Flexible data volume", icon: <Database size={20} /> },
      { text: "Custom feature development", icon: <TrendingUp size={20} /> },
      { text: "Dedicated infrastructure", icon: <Globe size={20} /> },
    ],
    includes: [
      "Customized includes:",
      "Bespoke pricing model",
      "Custom data requirements",
      "Specialized training",
      "Integration consulting",
      "Volume-based discounts",
    ],
  },
];

const PricingSwitch = () => {
  const { billingCycle, setBillingCycle } = usePricing();

  const handleSwitch = (value: string) => {
    setBillingCycle(value === "0" ? "monthly" : "annually");
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-50 mx-auto flex w-fit rounded-full bg-neutral-50 border border-gray-200 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            billingCycle === "monthly"
              ? "text-white"
              : "text-muted-foreground hover:text-black"
          }`}
        >
          {billingCycle === "monthly" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-12 h-8 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            billingCycle === "annually"
              ? "text-white"
              : "text-muted-foreground hover:text-black"
          }`}
        >
          {billingCycle === "annually" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-black">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const { isYearly } = usePricing();
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div className="px-4 py-20 mx-auto relative bg-gradient-to-b from-gray-50 to-white" ref={pricingRef}>
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <TimelineContent
            as="h2"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="md:text-5xl sm:text-4xl text-3xl font-bold text-gray-900 mb-4"
          >
            Choose the Perfect Plan for Your{" "}
            <TimelineContent
              as="span"
              animationNum={1}
              timelineRef={pricingRef}
              customVariants={revealVariants}
              className="border border-dashed border-blue-500 px-3 py-1 rounded-xl bg-blue-100 capitalize inline-block"
            >
              Business
            </TimelineContent>
          </TimelineContent>

          <TimelineContent
            as="p"
            animationNum={2}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="sm:text-lg text-base text-gray-600 sm:w-[80%] w-[90%] mx-auto"
          >
            Flexible pricing options for businesses of all sizes. Start with a 7-day free trial, no credit card required.
          </TimelineContent>
        </div>

        <TimelineContent
          as="div"
          animationNum={3}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch />
        </TimelineContent>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 mx-auto">
          {plans.map((plan, index) => (
            <TimelineContent
              key={plan.name}
              as="div"
              animationNum={4 + index}
              timelineRef={pricingRef}
              customVariants={revealVariants}
            >
              <Card
                className={`relative border-neutral-200 h-full flex flex-col ${
                  plan.popular ? "ring-2 ring-blue-500 bg-blue-50" : "bg-white "
                }`}
              >
                <CardHeader className="text-left">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-4 min-h-[3rem]">{plan.description}</p>
                  <div className="flex items-baseline">
                    {plan.customPrice ? (
                      <span className="text-3xl font-semibold text-gray-900">
                        {plan.customPrice}
                      </span>
                    ) : (
                      <>
                        <span className="text-3xl font-semibold text-gray-900">
                          $
                          <NumberFlow
                            value={isYearly ? plan.yearlyPrice : plan.price}
                            className="text-3xl font-semibold"
                          />
                        </span>
                        <span className="text-gray-600 ml-1 text-sm">
                          /{isYearly ? "year" : "month"}
                        </span>
                      </>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col">
                  <button
                    className={`w-full mb-6 p-3 text-base font-semibold rounded-xl transition-all ${
                      plan.popular
                        ? "bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50 border border-blue-400 text-white hover:shadow-blue-500/70"
                        : "bg-gradient-to-t from-neutral-900 to-neutral-700 shadow-lg shadow-neutral-900/50 border border-neutral-700 text-white hover:shadow-neutral-900/70"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                  
                  <ul className="space-y-2.5 font-medium py-4 border-b border-neutral-200">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-neutral-800 grid place-content-center mt-0.5 mr-3 flex-shrink-0">
                          {feature.icon}
                        </span>
                        <span className="text-sm text-gray-700">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 pt-4 flex-1">
                    <h4 className="font-semibold text-sm text-gray-900 mb-3">
                      {plan.includes[0]}
                    </h4>
                    <ul className="space-y-2.5">
                      {plan.includes.slice(1).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="h-5 w-5 bg-green-50 border border-blue-500 rounded-full grid place-content-center mt-0.5 mr-2.5 flex-shrink-0">
                            <CheckCircle2 className="h-3 w-3 text-blue-500" />
                          </span>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TimelineContent>
          ))}
        </div>
      </div>
    </div>
  );
}
