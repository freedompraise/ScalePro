import logo from "@/assets/logo.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="bg-black text-[#BCBCBC] text-sm py-10 text-center"
      id="socials"
    >
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={logo}
            height={60}
            alt="ScalePro logo"
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="">Welcome</Link>
          <Link href="">The Problem</Link>
          <Link href="">ScalePro's Solution</Link>
          <Link href="">Book a Free call</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
        </div>
        <p className="mt-6">
          &copy; 2025 ScalePro Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
