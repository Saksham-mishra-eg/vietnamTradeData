"use client";

import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useRouter } from 'next/navigation';

export default function FloatingCTA(){
  const [visible, setVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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
      gclid: "",
      url: typeof window !== 'undefined' ? window.location?.href : "",
    }
  });

  useEffect(()=>{
    const onScroll = ()=> setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  // Capture gclid from URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const gclid = params.get("gclid");
      if (gclid) {
        setValue("gclid", gclid);
      }
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
      message: data.message || "Free Trial Request - Floating CTA",
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
      setShowPopup(false);
      reset();

    } catch (error) {
      // Error handling
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    reset();
    setShowPopup(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setShowPopup(true)}
        aria-label="Start free trial" 
        className={`fixed right-6 bottom-24 z-50 ${visible? 'block':'hidden'}`}
      >
        <div className="tt-cta-gradient text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
          Start Free Trial
        </div>
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-md w-full relative animate-slideUp max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close popup"
              disabled={loading}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Form Content */}
            <h3 className="text-gray-900 text-2xl font-semibold mb-2">Schedule A Demo</h3>
            <p className="text-gray-600 text-sm mb-6">Fill out the form and our team will get back to you shortly.</p>
            
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <input 
                    type="text"
                    {...register("firstName", { required: "First name is required" })}
                    placeholder="First name" 
                    className={`border rounded-lg px-4 py-2.5 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 ${
                      errors.firstName ? "border-red-500" : "border-gray-200"
                    }`}
                    disabled={loading}
                  />
                  {errors.firstName && (
                    <span className="text-xs text-red-500">{errors.firstName.message as string}</span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <input 
                    type="text"
                    {...register("lastName", { required: "Last name is required" })}
                    placeholder="Last name" 
                    className={`border rounded-lg px-4 py-2.5 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 ${
                      errors.lastName ? "border-red-500" : "border-gray-200"
                    }`}
                    disabled={loading}
                  />
                  {errors.lastName && (
                    <span className="text-xs text-red-500">{errors.lastName.message as string}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <input 
                  type="email"
                  {...register("workEmail", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  placeholder="Work Email ID" 
                  className={`border rounded-lg px-4 py-2.5 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 ${
                    errors.workEmail ? "border-red-500" : "border-gray-200"
                  }`}
                  disabled={loading}
                />
                {errors.workEmail && (
                  <span className="text-xs text-red-500">{errors.workEmail.message as string}</span>
                )}
              </div>

              <div className="flex flex-col gap-1">
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
              </div>

              <div className="flex flex-col gap-1">
                <input 
                  type="text"
                  {...register("companyName", { required: "Company name is required" })}
                  placeholder="Company Name" 
                  className={`border rounded-lg px-4 py-2.5 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 ${
                    errors.companyName ? "border-red-500" : "border-gray-200"
                  }`}
                  disabled={loading}
                />
                {errors.companyName && (
                  <span className="text-xs text-red-500">{errors.companyName.message as string}</span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <textarea 
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  placeholder="Message"
                  rows={3}
                  className={`border rounded-lg px-4 py-2.5 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  }`}
                  disabled={loading}
                />
                {errors.message && (
                  <span className="text-xs text-red-500">{errors.message.message as string}</span>
                )}
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg px-8 py-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Request For Demo"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .phone-input-container .react-tel-input .form-control {
          width: 100%;
        }
      `}</style>
    </>
  );
}
