"use client";

import React from 'react';
import { Check, X } from 'lucide-react';
import { usePricing } from 'contexts/PricingContext';

export default function ComparisonTable() {
  const { billingCycle } = usePricing();

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 250,
      yearlyPrice: 1400,
    },
    {
      name: 'Essential',
      monthlyPrice: 500,
      yearlyPrice: 4000,
      popular: true,
    },
    {
      name: 'Expert',
      monthlyPrice: 1200,
      yearlyPrice: 9000,
    },
    {
      name: 'Customized',
      monthlyPrice: 0,
      yearlyPrice: 0,
      customPrice: 'Custom',
    },
  ];

  const features = [
    {
      category: 'Price',
      items: [
        {
          name: 'Monthly Price',
          starter: '$250',
          essential: '$500',
          expert: '$1200',
          customized: 'Custom',
        },
        {
          name: 'Annual Price',
          starter: '$1400',
          essential: '$4000',
          expert: '$9000',
          customized: 'Custom',
        },
      ],
    },
    {
      category: 'Data Coverage',
      items: [
        {
          name: 'Countries Covered',
          starter: '11 Countries',
          essential: '31 Countries',
          expert: '62 Countries',
          customized: 'Custom Coverage',
          description: 'Vietnam, Thailand, Indonesia, Philippines, and more',
        },
        {
          name: 'Historical Data Access',
          starter: 'Jan 2020 Onwards',
          essential: 'Jan 2019 Onwards',
          expert: 'Jan 2010 Onwards',
          customized: 'Custom Period',
        },
        {
          name: 'Data Update Frequency',
          starter: '30 Days',
          essential: '30 Days',
          expert: '30 Days',
          customized: 'Real-time',
        },
      ],
    },
    {
      category: 'Search & Analytics',
      items: [
        {
          name: 'Advanced Searches',
          starter: '500 Per Month',
          essential: 'Unlimited',
          expert: 'Unlimited',
          customized: 'Unlimited',
        },
        {
          name: 'Shipment Records View',
          starter: 'Unlimited',
          essential: 'Unlimited',
          expert: 'Unlimited',
          customized: 'Unlimited',
        },
        {
          name: 'Visualize & Charts',
          starter: true,
          essential: true,
          expert: true,
          customized: true,
        },
        {
          name: 'Company Profile View',
          starter: 'Unlimited',
          essential: 'Unlimited',
          expert: 'Unlimited',
          customized: 'Unlimited',
        },
        {
          name: 'Trade Relationship Analysis',
          starter: true,
          essential: true,
          expert: true,
          customized: true,
        },
        {
          name: 'Market Trend Analysis',
          starter: false,
          essential: true,
          expert: true,
          customized: true,
        },
        {
          name: 'Competitor Intelligence',
          starter: false,
          essential: true,
          expert: true,
          customized: true,
        },
      ],
    },
    {
      category: 'Data Export & Downloads',
      items: [
        {
          name: 'Trade Data Excel Download',
          starter: '360,000 Points',
          essential: '1,080,000 Points',
          expert: '2,400,000 Points',
          customized: 'Custom Points',
        },
        {
          name: 'Contact Information Points',
          starter: '5,000 Points',
          essential: '10,000 Points',
          expert: '30,000 Points',
          customized: 'Custom Points',
          description: 'Email and Phone Number',
        },
        {
          name: 'Add to Favourite Shipments',
          starter: 'Unlimited',
          essential: 'Unlimited',
          expert: 'Unlimited',
          customized: 'Unlimited',
        },
        {
          name: 'Roll Over Points to Next Year',
          starter: false,
          essential: true,
          expert: true,
          customized: true,
        },
        {
          name: 'Export Formats',
          starter: 'CSV, Excel',
          essential: 'CSV, Excel, PDF',
          expert: 'CSV, Excel, PDF, API',
          customized: 'All Formats',
        },
      ],
    },
    {
      category: 'Account & Users',
      items: [
        {
          name: 'User License',
          starter: '1 User',
          essential: '5 Users',
          expert: '10 Users',
          customized: 'Unlimited',
        },
        {
          name: 'Account Validity',
          starter: '1 Year',
          essential: '1 Year',
          expert: '1 Year',
          customized: 'Flexible',
        },
        {
          name: 'Multi-User Management',
          starter: false,
          essential: true,
          expert: true,
          customized: true,
        },
      ],
    },
    {
      category: 'Support & Services',
      items: [
        {
          name: 'Customer Support',
          starter: 'Email',
          essential: 'Email, Chat & Phone',
          expert: 'Priority 24/7',
          customized: 'Dedicated Manager',
        },
        {
          name: 'Dedicated Account Manager',
          starter: false,
          essential: false,
          expert: true,
          customized: true,
        },
        {
          name: 'Training & Onboarding',
          starter: 'Self-Service',
          essential: 'Basic Training',
          expert: 'Full Training',
          customized: 'Custom Training',
        },
        {
          name: 'SLA Guarantees',
          starter: false,
          essential: false,
          expert: true,
          customized: true,
        },
      ],
    },
    {
      category: 'Advanced Features',
      items: [
        {
          name: 'API Access',
          starter: false,
          essential: false,
          expert: true,
          customized: true,
        },
        {
          name: 'Custom Reports & Dashboards',
          starter: false,
          essential: true,
          expert: true,
          customized: true,
        },
        {
          name: 'White-Label Solutions',
          starter: false,
          essential: false,
          expert: false,
          customized: true,
        },
        {
          name: 'On-Premise Deployment',
          starter: false,
          essential: false,
          expert: false,
          customized: true,
        },
        {
          name: 'Custom Integrations',
          starter: false,
          essential: false,
          expert: true,
          customized: true,
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detailed Pricing Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare all features and choose the perfect plan for your Vietnam trade data needs
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50 z-10">
                  Features
                </th>
                {plans.map((plan) => (
                  <th key={plan.name} className="px-6 py-4 text-center min-w-[200px]">
                    <div className="flex flex-col items-center">
                      {plan.popular && (
                        <span className="mb-2 inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Most Popular
                        </span>
                      )}
                      <div className="text-lg font-bold text-gray-900">{plan.name}</div>
                      <div className="mt-2">
                        {plan.customPrice ? (
                          <span className="text-3xl font-bold text-gray-900">{plan.customPrice}</span>
                        ) : (
                          <>
                            <span className="text-3xl font-bold text-gray-900">
                              ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                            </span>
                            <span className="text-gray-600 text-sm ml-1">
                              /{billingCycle === 'monthly' ? 'month' : 'year'}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {features.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  {/* Category Header */}
                  <tr className="bg-gray-50">
                    <td
                      colSpan={5}
                      className="px-6 py-3 text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50"
                    >
                      {category.category}
                    </td>
                  </tr>

                  {/* Category Items */}
                  {category.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700 sticky left-0 bg-white">
                        <div>
                          <div className="font-medium">{item.name}</div>
                          {item.description && (
                            <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-sm">
                        {typeof item.starter === 'boolean' ? (
                          item.starter ? (
                            <Check className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{item.starter}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm">
                        {typeof item.essential === 'boolean' ? (
                          item.essential ? (
                            <Check className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700 font-medium">{item.essential}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm">
                        {typeof item.expert === 'boolean' ? (
                          item.expert ? (
                            <Check className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{item.expert}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm">
                        {typeof item.customized === 'boolean' ? (
                          item.customized ? (
                            <Check className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-700">{item.customized}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            All plans include unlimited shipment record views, visualizations, and charts.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Need a custom solution?{' '}
            <a href="/contact-us" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
