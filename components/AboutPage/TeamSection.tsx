"use client";

import React from 'react';
import { TeamSection } from 'components/ui/team-section';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function TeamSectionWrapper() {
  const teamMembers = [
    {
      name: "John Anderson",
      designation: "CEO & Founder",
      imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      socialLinks: [
        { icon: Linkedin, href: "#" },
        { icon: Twitter, href: "#" },
      ],
    },
    {
      name: "Sarah Mitchell",
      designation: "Chief Technology Officer",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      socialLinks: [
        { icon: Linkedin, href: "#" },
        { icon: Mail, href: "#" },
      ],
    },
    {
      name: "David Chen",
      designation: "Head of Data Operations",
      imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
      socialLinks: [
        { icon: Linkedin, href: "#" },
        { icon: Twitter, href: "#" },
      ],
    },
  ];

  const mainSocialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Mail, href: "mailto:contact@vietnamtradedata.com" },
  ];

  return (
    <TeamSection
      title="LEADERSHIP TEAM"
      description="Our leadership team brings decades of combined experience in international trade, data analytics, and technology innovation. We're committed to providing the most accurate and comprehensive Vietnam trade intelligence to help your business make informed decisions and discover new opportunities in the global marketplace."
      members={teamMembers}
      // logo="VietnamTradeData"
      socialLinksMain={mainSocialLinks}
    />
  );
}
