"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Send, Clock, ChevronRight, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useRouter } from 'next/navigation';
import { Label } from 'components/ui/label';

export default function ContactHero() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      countryCode: "",
      contactNumber: "",
      workEmail: "",
      message: "",
      url: typeof window !== 'undefined' ? window.location?.href : "",
    }
  });

  // Capture current URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setValue("url", window.location.href);
    }
  }, [setValue]);

  const handlePhoneChange = (value: string, country: { dialCode?: string }) => {
    const dialCode = country?.dialCode || "1";
    setValue("contactNumber", value);
    setValue("countryCode", dialCode);
  };

  const onSubmit = async (data: {
    firstName: string;
    lastName: string;
    companyName: string;
    countryCode: string;
    contactNumber: string;
    workEmail: string;
    message: string;
    url: string;
  }) => {
    setLoading(true);

    const emailPayload = {
      firstName: data.firstName,
      lastName: data.lastName,
      companyName: data.companyName,
      countryCode: data.countryCode,
      contactNumber: data.contactNumber,
      workEmail: data.workEmail,
      message: data.message || "Contact Form Inquiry",
      url: data.url
    };

    try {
      const response = await fetch("https://fjgjyxhtdds.marketinsidedata.com/api/send-email-eg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailPayload),
      });

      if (!response.ok) {
        throw new Error("Email API failed");
      }

      // Success → redirect to thank you page
      router.push("/thankyou");
      reset();

    } catch (error) {
      // Error handling
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    { icon: Phone, label: 'Phone', value: '+91 8003 8003 57', href: 'tel:+918003800357' },
    { icon: Mail, label: 'Email', value: 'info@exportgenius.in', href: 'mailto:info@exportgenius.in' },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-ttblue-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-3xl"
      />

      {/* Floating decorative shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-1/4 w-20 h-20 border-2 border-ttblue-300/30 rounded-lg"
      />

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left side - Header & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-ttblue-100 text-ttblue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <MessageSquare className="w-4 h-4" />
              We&apos;re here to help
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Get in{' '}
              <span className="bg-gradient-to-r from-ttblue-600 to-ttblue-500 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-slate-600 mb-10 leading-relaxed"
            >
              We are here to help you unlock the power of Vietnam trade data. Whether you have questions, need a demo, or want to discuss custom solutions, our team is ready to assist you.
            </motion.p>

            {/* Contact Details Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contact Details</h3>

              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <motion.a
                    key={index}
                    href={detail.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 hover:border-ttblue-300 transition-all group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-ttblue-500 to-ttblue-600 flex items-center justify-center text-white shadow-md flex-shrink-0"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-500 font-medium">{detail.label}</div>
                      <div className="text-slate-900 font-semibold group-hover:text-ttblue-600 transition-colors">
                        {detail.value}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-ttblue-600 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Quick info badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                Available 24/7
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
                <Clock className="w-4 h-4" />
                Response within 4 hours
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 max-w-2xl w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ttblue-500 via-ttblue-600 to-ttblue-500" />

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="firstname" className="text-slate-700 font-medium">First Name</Label>
                    <input
                      type="text"
                      id="firstname"
                      {...register("firstName", { required: "First name is required" })}
                      placeholder="John"
                      className={`w-full border rounded-lg px-4 py-2.5 transition-all focus:border-ttblue-500 focus:ring-2 focus:ring-ttblue-500 focus:ring-opacity-20 ${errors.firstName ? "border-red-500" : "border-slate-300"
                        }`}
                      disabled={loading}
                    />
                    {errors.firstName && (
                      <span className="text-xs text-red-500">{errors.firstName.message as string}</span>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="lastname" className="text-slate-700 font-medium">Last Name</Label>
                    <input
                      type="text"
                      id="lastname"
                      {...register("lastName", { required: "Last name is required" })}
                      placeholder="Doe"
                      className={`w-full border rounded-lg px-4 py-2.5 transition-all focus:border-ttblue-500 focus:ring-2 focus:ring-ttblue-500 focus:ring-opacity-20 ${errors.lastName ? "border-red-500" : "border-slate-300"
                        }`}
                      disabled={loading}
                    />
                    {errors.lastName && (
                      <span className="text-xs text-red-500">{errors.lastName.message as string}</span>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-2"
                >
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                  <input
                    type="email"
                    id="email"
                    {...register("workEmail", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    placeholder="john.doe@company.com"
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all focus:border-ttblue-500 focus:ring-2 focus:ring-ttblue-500 focus:ring-opacity-20 ${errors.workEmail ? "border-red-500" : "border-slate-300"
                      }`}
                    disabled={loading}
                  />
                  {errors.workEmail && (
                    <span className="text-xs text-red-500">{errors.workEmail.message as string}</span>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="space-y-2"
                >
                  <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                  <PhoneInput
                    country={"us"}
                    value={watch("contactNumber")}
                    onChange={handlePhoneChange}
                    containerClass="phone-input-container w-full"
                    inputClass={`!w-full !h-[42px] !text-base rounded-lg border transition-all focus:border-ttblue-500 focus:ring-2 focus:ring-ttblue-500 focus:ring-opacity-20 ${errors.contactNumber ? "!border-red-500" : "!border-slate-300"
                      }`}
                    inputProps={{
                      name: "contactNumber",
                      required: true,
                      disabled: loading,
                    }}
                  />
                  {errors.contactNumber && (
                    <span className="text-xs text-red-500">{errors.contactNumber.message as string}</span>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-2"
                >
                  <Label htmlFor="company" className="text-slate-700 font-medium">Company Name</Label>
                  <input
                    type="text"
                    id="company"
                    {...register("companyName", { required: "Company name is required" })}
                    placeholder="Your Company"
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all focus:border-ttblue-500 focus:ring-2 focus:ring-ttblue-500 focus:ring-opacity-20 ${errors.companyName ? "border-red-500" : "border-slate-300"
                      }`}
                    disabled={loading}
                  />
                  {errors.companyName && (
                    <span className="text-xs text-red-500">{errors.companyName.message as string}</span>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 }}
                  className="space-y-2"
                >
                  <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    placeholder="Tell us more about your inquiry..."
                    rows={3}
                    className={`w-full border rounded-lg px-4 py-2.5 transition-all focus:border-ttblue-500 focus:ring-2 focus:ring-ttblue-500 focus:ring-opacity-20 resize-none ${errors.message ? "border-red-500" : "border-slate-300"
                      }`}
                    disabled={loading}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500">{errors.message.message as string}</span>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-ttblue-600 to-ttblue-500 hover:from-ttblue-700 hover:to-ttblue-600 text-white font-semibold py-6 text-base shadow-lg hover:shadow-xl transition-all group rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting ...
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.div>

                {/* Privacy note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.95 }}
                  className="text-xs text-slate-500 text-center"
                >
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </motion.p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
