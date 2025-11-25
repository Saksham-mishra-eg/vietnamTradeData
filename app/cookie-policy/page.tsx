"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function CookiePolicyPage() {
  const sections = [
    {
      title: "Introduction",
      content: `Vietnam Trade Data Cookie Notice describes how Vietnam Trade Data ("Vietnam Trade Data", "we", "us" or "our") uses third-party cookies on our Website, and the choices users have.

If users do not accept these cookies or similar technologies, they can disable them by following the instructions in this policy below or by changing their browser settings so that cookies or similar technologies from the Website cannot be placed on their computer or mobile device.

This Cookie Notice provides visitors with clear and comprehensive information about the cookies used and the purposes for using them. To review the privacy policies that apply to users of our website, please read our privacy policy, which is available at /privacy-policy.`
    },
    {
      title: "What does cookie mean",
      content: `A cookie is a small data file that is sent to the device of users when users first visit a website. Cookies usually include an identification number that is unique to the device or browser of user is using. Such identifier can help us better understand our users and how they are using the Website. Cookies also enable recognition of users when they re-visit the Website, keeping their settings and preferences and ability to offer customized features. If users prefer, however, at any time users can reset their browser, so it refuses all cookies, or notifies users when a cookie is being sent.`
    },
    {
      title: "How cookies are categorized",
      subsections: [
        {
          subtitle: "On-site cookies",
          content: "On-site cookies are cookies, which are served directly by us to computer or device of users."
        },
        {
          subtitle: "Cookies from external sources",
          content: "Third-party cookies are cookies, which are served by a third party on our behalf. We use third-party cookies for functionality, performance/analytics, and social media purposes.\n\nCookies can remain on computer or mobile device of users for different periods of time. Some cookies are 'session (essential) cookies', meaning that they exist only while their browser is open. These are deleted automatically once users close their browser."
        },
        {
          subtitle: "Lifetime Cookies",
          content: "Lifetime cookies survive after browser of users is closed. These can be used by the Website to recognize computer activity of users when they open their browser and visit the webpage again.\n\nWe also use cookies and similar technologies in some emails, SMS and push notifications which enable us to understand whether users have opened the message we sent to them or via our services to their recipients and how the recipient interacted with it. If users have enabled images, cookies will also be set on their computer or mobile device and will also be set if they click on any link within the email."
        },
        {
          subtitle: "How users can change cookie settings",
          content: `We use cookies on this Website to make sure users can use the Website easily and enjoy the services. Some of these cookies are essential and we can't provide our service without them, but there are others that can be turned off. Users have the right to choose whether to accept or not these optional cookies and they may remove the cookies by following the instructions of their device preferences. However, please note that if users choose to refuse or disable cookies, they may not be able to use the full functionality of our Website and their online experience may be limited.

Users can also change their preferences by changing the settings in their browser. Most browsers will allow users to select the level of privacy settings they desire. This lets users to control their cookie settings so that they can:

• See what cookies or other locally stored data they've got and delete all non-essential cookies on a collective basis
• Block third party cookies or similar technology
• Block cookies or similar technology from particular websites
• Block all cookies or similar technologies from being set
• Delete all cookies or similar technologies when they close their browser

These settings are usually found in the 'options' or 'preferences' menu of their internet browser.

Deleting cookies means that any preference settings users have made on a Website will be lost. If users have set their preferences to opt out of cookies, this setting will be lost too, as that information is stored in a cookie. If users choose to reject cookies, as noted above, they may not be able to use certain features of our Website. We do not recommend turning off all cookies when using our Website as we cannot guarantee that user's experience on our Website will be as good as it could otherwise be.`
        }
      ]
    },
    {
      title: "Cookie settings",
      subsections: [
        {
          subtitle: "Privacy preference point",
          content: "When users visit our Website, it may store or retrieve information on their browser, mostly in the form of cookies. This information might be about users, their preferences or their device and is mostly used to make the site work as they expect it to."
        },
        {
          subtitle: "Manage cookies based on preference",
          list: [
            {
              title: "Strictly necessary cookies",
              description: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by users which amount to a request for services, such as setting user's privacy preferences, logging in or filling in forms. Users can set their browser to block or alert users about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
            },
            {
              title: "Performance cookies",
              description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. They help us to know which pages are the most and least popular and see how users move around the website. All information these cookies collect is aggregated and therefore anonymous. If users do not allow these cookies we will not know when they have visited our website, and will not be able to monitor its performance."
            },
            {
              title: "Functional Cookies",
              description: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If users do not allow these cookies, then some or all these services may not function properly."
            },
            {
              title: "Targeting Cookies",
              description: "These cookies may be set through our website by our marketing partners. They may be used by those companies to build a profile of user's interests and show them relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying their browser and internet device. If users do not allow these cookies, they will experience less targeted advertising."
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),rgba(239,246,255,0.6))]" />

          <motion.div
            className="absolute top-20 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="relative z-10 container mx-auto max-w-5xl px-4 md:px-6 lg:px-8 py-20 md:py-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 text-blue-700 font-medium text-xs uppercase tracking-widest mb-6"
            >
              <Cookie className="w-4 h-4" />
              Cookie Policy
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Cookie </span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Notice
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Last updated: November 24, 2025
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    {section.title === "Introduction" && <Shield className="w-6 h-6 text-white" />}
                    {section.title === "What does cookie mean" && <Cookie className="w-6 h-6 text-white" />}
                    {section.title === "How cookies are categorized" && <Settings className="w-6 h-6 text-white" />}
                    {section.title === "Cookie settings" && <CheckCircle2 className="w-6 h-6 text-white" />}
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>

                    {section.content && (
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-4">
                        {section.content}
                      </p>
                    )}

                    {section.subsections && (
                      <div className="space-y-6 mt-6">
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="pl-4 border-l-2 border-blue-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                              {subsection.subtitle}
                            </h3>

                            {subsection.content && (
                              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                {subsection.content}
                              </p>
                            )}

                            {subsection.list && (
                              <div className="space-y-4 mt-4">
                                {subsection.list.map((item, itemIndex) => (
                                  <div key={itemIndex} className="bg-blue-50/50 rounded-xl p-4">
                                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                                      {item.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed pl-4">
                                      {item.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-2xl p-8 md:p-10 text-white shadow-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              If you have any questions or comments regarding our Cookie Notice, please contact us at:
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@vietnamtradedata.com"
                className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-lg px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>info@vietnamtradedata.com</span>
              </a>

              <a
                href="tel:+842400000000"
                className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-lg px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+84-24-000-0000</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
  );
}
