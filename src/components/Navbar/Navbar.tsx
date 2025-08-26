"use client";
import { useState } from "react";
import { useLocation } from "react-router"; // ✅ import
import logo from "../../assets/images/logo.png";
import { BiSearch } from "react-icons/bi";
import { FaCartShopping, FaFacebook, FaTwitter } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import flagpic from "../../assets/images/image.svg";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { NavLinkType } from "@/Types";

const MenuIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks: NavLinkType[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    // {
    //   label: "Products",
    //   dropdown: [
    //     { href: "/products/fencinglist", label: "Fencing List" },
    //     { href: "/products/freesample", label: "Free Samples" },
    //   ],
    // },
    { href: "/gallery", label: "Gallery" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0A0A0A] h-[60px] flex items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-2">
          <FaInstagramSquare className="text-2xl md:text-3xl text-white" />
          <FaFacebook className="text-2xl md:text-3xl text-white" />
          <FaTwitter className="text-2xl md:text-3xl text-white" />
        </div>
        <div className="flex items-center gap-4">
          <p className="text-white text-sm md:text-base">
            Need Help? (207 555-0119)
          </p>
          <img src={flagpic} alt="flag" className="h-6 w-6 md:h-8 md:w-8" />
          <Select>
            <SelectTrigger className="w-[120px] md:w-[180px] bg-black text-white border-none text-sm md:text-base">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Countries</SelectLabel>
                <SelectItem value="bangladesh">Bangladesh</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white dark:bg-black sticky top-0 z-50 shadow-md">
        <div className="max-w-8xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <img className="w-[100px] md:w-[120px]" src={logo} alt="Logo" />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <Select key={link.label}>
                    <SelectTrigger className="text-lg font-medium text-gray-600 dark:text-gray-300 border-none shadow-none">
                      <SelectValue placeholder={link.label} />
                    </SelectTrigger>
                    <SelectContent>
                      {link.dropdown.map((item) => (
                        <SelectItem key={item.label} value={item.label}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-lg font-medium transition-colors ${
                      location.pathname === link.href
                        ? "text-green border-b-2 border-green"  
                        : "text-gray-600 dark:text-gray-300 hover:text-green"
                    }`}
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block relative">
                <BiSearch className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="border rounded-3xl pl-10 pr-4 py-2 w-40 md:w-64 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-green-600"
                />
              </div>

              <button className="hidden md:block p-3 rounded-full bg-lightgreen hover:bg-[#9DBF3B] hover:shadow-lg transition">
                <FaCartShopping className="h-5 w-5 text-green hover:text-white" />
              </button>
              <button className="hidden md:block p-3 rounded-full bg-lightgreen hover:bg-[#9DBF3B] hover:shadow-lg transition">
                <IoMdContact className="h-5 w-5 text-green hover:text-white" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300"
              >
                {isMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white dark:bg-black">
            {navLinks.map((link) =>
              link.dropdown ? (
                <Select key={link.label}>
                  <SelectTrigger className="w-full text-left px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800">
                    <SelectValue placeholder={link.label} />
                  </SelectTrigger>
                  <SelectContent>
                    {link.dropdown.map((item) => (
                      <SelectItem key={item.label} value={item.label}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`block px-3 py-2  transition ${
                    location.pathname === link.href
                      ? "text-green font-semibold border-b-2 border-green inline"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
