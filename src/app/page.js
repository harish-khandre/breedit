"use client"

import React from "react";
import Fade from "../app/Components/Fade";
import Navbar from "../app/Components/Navbar";
import Features from "../app/Components/Landing Page/Features";
import Content from "../app/Components/Landing Page/Content";
import CTA from "../app/Components/Landing Page/CTA";
import Gallery from "../app/Components/Landing Page/Gallery";
import Blog from "../app/Components/Landing Page/Blog";
import Testimonials from "../app/Components/Landing Page/Testimonials";
import Contact from "../app/Components/Landing Page/Contact";
import Footer from "../app/Components/Footer";
import { useCookies } from "react-cookie";
import Hero from "../app/Components/Landing Page/Hero";

 export default function Page () {

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const authToken = cookies.AuthToken;

  return (
    <>
      <Navbar authToken={authToken} minimal={false} />
      <Hero />
      <Fade delay={500}>
        <Content />
      </Fade>
      <Fade delay={500}>
        <Features />
      </Fade>
      <Fade delay={500}>
        <CTA />
      </Fade>
      <Fade delay={500}>
        <Gallery />
      </Fade>
      <Fade delay={500}>
        <Blog />
      </Fade>
      <Fade delay={500}>
        <Testimonials />
      </Fade>
      <Fade delay={500}>
        <Contact />
      </Fade>
      <Fade delay={500}>
        <Footer />
      </Fade>
    </>
  );
};

