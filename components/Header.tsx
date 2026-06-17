"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href?: string;
  children?: { group?: string; items: { label: string; href: string }[] }[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Stays",
    children: [
      {
        group: "Accommodation Types",
        items: [
          { label: "Luxury Villas", href: "/stays?type=villa" },
          { label: "Penthouses", href: "/stays?type=penthouse" },
          { label: "Serviced Apartments", href: "/stays?type=serviced_apartment" },
          { label: "Long-Term Stays", href: "/stays?type=long_term" },
          { label: "Corporate Accommodation", href: "/stays?type=corporate" },
        ],
      },
      {
        group: "UK Locations",
        items: [
          { label: "London", href: "/destinations/united-kingdom/london" },
          { label: "Manchester", href: "/destinations/united-kingdom/manchester" },
          { label: "Birmingham", href: "/destinations/united-kingdom/birmingham" },
          { label: "Liverpool", href: "/destinations/united-kingdom/liverpool" },
          { label: "Edinburgh", href: "/destinations/united-kingdom/edinburgh" },
        ],
      },
      {
        group: "European Locations",
        items: [
          { label: "Paris", href: "/destinations/france/paris" },
          { label: "Monaco", href: "/destinations/france/monaco" },
          { label: "Nice", href: "/destinations/france/nice" },
          { label: "Barcelona", href: "/destinations/spain/barcelona" },
          { label: "Madrid", href: "/destinations/spain/madrid" },
          { label: "Lisbon", href: "/destinations/portugal/lisbon" },
          { label: "Milan", href: "/destinations/italy/milan" },
          { label: "Rome", href: "/destinations/italy/rome" },
          { label: "Amsterdam", href: "/destinations/netherlands/amsterdam" },
          { label: "Geneva", href: "/destinations/switzerland/geneva" },
          { label: "Mykonos", href: "/destinations/greece/mykonos" },
          { label: "Santorini", href: "/destinations/greece/santorini" },
        ],
      },
    ],
  },
  {
    label: "Destinations",
    children: [
      {
        group: "United Kingdom",
        items: [
          { label: "London", href: "/destinations/united-kingdom/london" },
          { label: "Manchester", href: "/destinations/united-kingdom/manchester" },
          { label: "Birmingham", href: "/destinations/united-kingdom/birmingham" },
          { label: "Liverpool", href: "/destinations/united-kingdom/liverpool" },
          { label: "Edinburgh", href: "/destinations/united-kingdom/edinburgh" },
        ],
      },
      {
        group: "France",
        items: [
          { label: "Paris", href: "/destinations/france/paris" },
          { label: "Nice", href: "/destinations/france/nice" },
          { label: "Cannes", href: "/destinations/france/cannes" },
          { label: "Monaco Region", href: "/destinations/france/monaco" },
        ],
      },
      {
        group: "Spain",
        items: [
          { label: "Barcelona", href: "/destinations/spain/barcelona" },
          { label: "Madrid", href: "/destinations/spain/madrid" },
          { label: "Marbella", href: "/destinations/spain/marbella" },
        ],
      },
      {
        group: "Portugal",
        items: [
          { label: "Lisbon", href: "/destinations/portugal/lisbon" },
          { label: "Porto", href: "/destinations/portugal/porto" },
          { label: "Algarve", href: "/destinations/portugal/algarve" },
        ],
      },
      {
        group: "Italy",
        items: [
          { label: "Milan", href: "/destinations/italy/milan" },
          { label: "Rome", href: "/destinations/italy/rome" },
          { label: "Florence", href: "/destinations/italy/florence" },
          { label: "Lake Como", href: "/destinations/italy/lake-como" },
        ],
      },
      {
        group: "Netherlands & Switzerland",
        items: [
          { label: "Amsterdam", href: "/destinations/netherlands/amsterdam" },
          { label: "Geneva", href: "/destinations/switzerland/geneva" },
          { label: "Zurich", href: "/destinations/switzerland/zurich" },
        ],
      },
      {
        group: "Greece",
        items: [
          { label: "Mykonos", href: "/destinations/greece/mykonos" },
          { label: "Santorini", href: "/destinations/greece/santorini" },
        ],
      },
    ],
  },
  {
    label: "Drive",
    children: [
      {
        group: "Chauffeur Services",
        items: [
          { label: "Airport Transfers", href: "/drive#airport-transfers" },
          { label: "Executive Travel", href: "/drive#executive-travel" },
          { label: "Corporate Travel", href: "/drive#corporate-travel" },
          { label: "Event Transportation", href: "/drive#event-transportation" },
        ],
      },
      {
        group: "Self Drive Collection",
        items: [
          { label: "Executive Cars", href: "/drive#executive-cars" },
          { label: "Luxury Cars", href: "/drive#luxury-cars" },
          { label: "Sports Cars", href: "/drive#sports-cars" },
          { label: "SUVs", href: "/drive#suvs" },
        ],
      },
      {
        group: "Fleet Collections",
        items: [
          { label: "Executive Fleet", href: "/drive#executive-fleet" },
          { label: "Luxury Fleet", href: "/drive#luxury-fleet" },
          { label: "VIP Fleet", href: "/drive#vip-fleet" },
        ],
      },
    ],
  },
  {
    label: "Aviation",
    children: [
      {
        group: "Private Jet Charter",
        items: [
          { label: "Light Jets", href: "/aviation#light-jets" },
          { label: "Mid-Size Jets", href: "/aviation#midsize-jets" },
          { label: "Heavy Jets", href: "/aviation#heavy-jets" },
          { label: "Long Range Jets", href: "/aviation#long-range-jets" },
        ],
      },
      {
        group: "Helicopter Transfers",
        items: [
          { label: "Airport Transfers", href: "/aviation#helicopter-airport" },
          { label: "City Transfers", href: "/aviation#helicopter-city" },
          { label: "Resort Transfers", href: "/aviation#helicopter-resort" },
        ],
      },
      {
        group: "VIP Airport Services",
        items: [
          { label: "Meet and Greet", href: "/aviation#meet-greet" },
          { label: "Fast Track", href: "/aviation#fast-track" },
          { label: "Lounge Access", href: "/aviation#lounge-access" },
        ],
      },
    ],
  },
  {
    label: "Security",
    children: [
      {
        group: "Executive Protection",
        items: [
          { label: "Personal Bodyguards", href: "/security#bodyguards" },
          { label: "Executive Security", href: "/security#executive" },
          { label: "Celebrity Protection", href: "/security#celebrity" },
        ],
      },
      {
        group: "Travel Security",
        items: [
          { label: "Airport Security", href: "/security#airport" },
          { label: "Travel Escorts", href: "/security#escorts" },
          { label: "International Protection", href: "/security#international" },
        ],
      },
      {
        group: "Residential & Event",
        items: [
          { label: "Villa Protection", href: "/security#villa" },
          { label: "Residence Security", href: "/security#residence" },
          { label: "Private Events", href: "/security#private-events" },
          { label: "Corporate Events", href: "/security#corporate-events" },
          { label: "VIP Events", href: "/security#vip-events" },
        ],
      },
    ],
  },
  {
    label: "Concierge",
    children: [
      {
        group: "Lifestyle Services",
        items: [
          { label: "Private Chef", href: "/concierge#private-chef" },
          { label: "Housekeeping", href: "/concierge#housekeeping" },
          { label: "Photography", href: "/concierge#photography" },
          { label: "Personal Shopping", href: "/concierge#personal-shopping" },
          { label: "Wellness & Spa", href: "/concierge#wellness-spa" },
        ],
      },
      {
        group: "Premium Services",
        items: [
          { label: "Event Planning", href: "/concierge#event-planning" },
          { label: "Airport Meet & Greet", href: "/concierge#airport-meet-greet" },
          { label: "VIP Reservations", href: "/concierge#vip-reservations" },
        ],
      },
      {
        group: "Bespoke Services",
        items: [
          { label: "Yacht Charter", href: "/concierge#yacht-charter" },
          { label: "Luxury Requests", href: "/concierge#luxury-requests" },
          { label: "Lifestyle Management", href: "/concierge#lifestyle-management" },
        ],
      },
    ],
  },
  {
    label: "Experiences",
    children: [
      {
        group: "Luxury Experiences",
        items: [
          { label: "Fine Dining", href: "/experiences#fine-dining" },
          { label: "Yacht Experiences", href: "/experiences#yacht" },
          { label: "Luxury Tours", href: "/experiences#tours" },
          { label: "Spa Retreats", href: "/experiences#spa" },
        ],
      },
      {
        group: "Travel Experiences",
        items: [
          { label: "Cultural Experiences", href: "/experiences#cultural" },
          { label: "City Experiences", href: "/experiences#city" },
        ],
      },
      {
        group: "VIP Experiences",
        items: [
          { label: "Exclusive Events", href: "/experiences#exclusive-events" },
          { label: "Fashion Events", href: "/experiences#fashion-events" },
          { label: "Private Access Experiences", href: "/experiences#private-access" },
        ],
      },
    ],
  },
  {
    label: "Partners",
    children: [
      {
        group: "Partner Categories",
        items: [
          { label: "Property Partners", href: "/partners#property" },
          { label: "Vehicle Partners", href: "/partners#vehicle" },
          { label: "Aviation Partners", href: "/partners#aviation" },
          { label: "Security Partners", href: "/partners#security" },
          { label: "Concierge Partners", href: "/partners#concierge" },
          { label: "Become A Partner", href: "/partners#apply" },
        ],
      },
    ],
  },
  {
    label: "Affiliates",
    children: [
      {
        group: "Programme",
        items: [
          { label: "Affiliate Programme", href: "/affiliates#overview" },
          { label: "Benefits", href: "/affiliates#benefits" },
          { label: "Commission Structure", href: "/affiliates#commission" },
          { label: "Join Programme", href: "/affiliates#join" },
          { label: "Dashboard", href: "/affiliates#dashboard" },
        ],
      },
    ],
  },
  {
    label: "About",
    children: [
      {
        group: "Company",
        items: [
          { label: "Our Story", href: "/about#story" },
          { label: "Vision", href: "/about#vision" },
          { label: "Luxury Standards", href: "/about#standards" },
          { label: "Careers", href: "/about#careers" },
          { label: "Press", href: "/about#press" },
        ],
      },
    ],
  },
  {
    label: "Contact",
    children: [
      {
        group: "Get In Touch",
        items: [
          { label: "Contact Us", href: "/contact" },
          { label: "Concierge Support", href: "/contact#concierge" },
          { label: "Business Enquiries", href: "/contact#business" },
          { label: "Partner Support", href: "/contact#partner" },
        ],
      },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white border-outline-variant/30 shadow-sm"
          : "glass-nav border-white/20"
      }`}
    >
      <div ref={dropdownRef} className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/logo-opulent-vault.png"
            alt="Opulent Vault"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {NAV.slice(0, 8).map((item) => (
            <div key={item.label} className="relative group">
              {item.href && !item.children ? (
                <Link
                  href={item.href}
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200 uppercase pb-1"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.label ? null : item.label)
                  }
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200 uppercase pb-1 flex items-center gap-1"
                >
                  {item.label}
                  <span className="material-symbols-outlined text-[14px]">expand_more</span>
                </button>
              )}

              {/* Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 glass-panel border border-outline-variant/30 shadow-lg min-w-[640px] p-6 z-50">
                  <div className="grid grid-cols-3 gap-6">
                    {item.children.map((group) => (
                      <div key={group.group}>
                        {group.group && (
                          <p className="font-label-caps text-label-caps text-on-surface-variant mb-3 uppercase border-b border-outline-variant/30 pb-2">
                            {group.group}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {group.items.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                onClick={() => setActiveDropdown(null)}
                                className="font-sans text-sm text-on-surface hover:text-secondary transition-colors duration-200"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden xl:flex items-center gap-3">
          <Link
            href="/contact"
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase"
          >
            Contact
          </Link>
          <Link
            href="/stays"
            className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 hover:bg-secondary transition-colors uppercase tracking-widest"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="xl:hidden glass-panel border-t border-outline-variant/30 max-h-[80vh] overflow-y-auto">
          <div className="px-margin-mobile py-6 space-y-1">
            {NAV.map((item) => (
              <div key={item.label}>
                {item.href && !item.children ? (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-label-caps text-label-caps text-on-surface py-3 border-b border-outline-variant/20 uppercase"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                      className="w-full flex justify-between items-center font-label-caps text-label-caps text-on-surface py-3 border-b border-outline-variant/20 uppercase"
                    >
                      {item.label}
                      <span className="material-symbols-outlined text-sm">
                        {activeDropdown === item.label ? "expand_less" : "expand_more"}
                      </span>
                    </button>
                    {activeDropdown === item.label && item.children && (
                      <div className="pl-4 py-2 space-y-3 bg-surface-container-low">
                        {item.children.map((group) => (
                          <div key={group.group}>
                            {group.group && (
                              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-1">
                                {group.group}
                              </p>
                            )}
                            {group.items.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => { setActiveDropdown(null); setMobileOpen(false); }}
                                className="block text-sm text-on-surface py-1 hover:text-secondary transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/stays"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-4 text-center uppercase tracking-widest"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
