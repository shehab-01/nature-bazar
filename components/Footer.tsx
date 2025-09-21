import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Contact from "./Contact";
import { SubTitle } from "./text";
import { quickLinksData, helpCenterData } from "@/constants/data";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-nature_dark_green">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="w-40" />
            <SubTitle className="text-xl hover:text-nature_light_white">
              নেচার জানে বেটার, <br /> প্রকৃতির ছোঁয়ায় সুস্থ থাকুন!!
            </SubTitle>
            <Contact />
          </div>
          <div className="mt-10">
            <SubTitle className="text-xl text-nature_bazar_light_green hover:text-nature_light_white">
              Useful Links
            </SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData.map((item) => (
                <li key={item.title}>
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-nature_bazar_light_green font-medium hover:text-nature_light_white"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <SubTitle className="text-xl text-nature_bazar_light_green hover:text-nature_light_white">
              Help Center
            </SubTitle>
            <ul className="space-y-3 mt-4">
              {helpCenterData.map((item) => (
                <li key={item.title}>
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-nature_bazar_light_green font-medium hover:text-nature_light_white"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <SubTitle className="text-xl text-nature_bazar_light_green hover:text-nature_light_white">
              Nature Bazar Social Media
            </SubTitle>
            <p className="text-nature_bazar_light_green py-4 hover:text-nature_light_white">
              Follow us on social media to stay updated with our latest offers.
            </p>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
