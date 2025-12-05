import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from './eppComponents/scrollToTop';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import HeaderSection from './eppComponents/headerSection';
import NavBarSection from './eppComponents/navBarSection';
import { PosterSection } from './eppComponents/posterSection';
import  ProfileCarousel  from './eppComponents/profileCarousel';
import WhyEppCardsComponent from './eppComponents/whyEppCardsComponent';
import VideoComponent from './eppComponents/videoComponent';
import JourneyWithUsComponent from './eppComponents/journeyWithUsComponent';
import PackagesHomeComponent from './eppComponents/packagesHomeComponent';
import HappyStoriesComponent from './eppComponents/happyStoriesComponent';
import AppInfoComponent from './eppComponents/appInfoComponent';
import SearchingTypeComponent from './eppComponents/searchingTypeComponent';
import FooterComponent from './eppComponents/footerComponent';


import PackagesComponent from './eppComponents/packagesComponent';
import EventsComponent from './eppComponents/eventsComponent';
import BranchsComponent from './eppComponents/branchesComponent';
import SuccessStoryComponent from './eppComponents/successStoryComponent';
import BlogPageComponent from './eppComponents/blogPageComponent';
import AboutUsComponent from './eppComponents/aboutUsComponent';
import ContactUsComponent from './eppComponents/contactUsComponent';


// Home Page Structure
function HomePage() {
  return (
    <>
      <HeaderSection />
      <NavBarSection />
      <PosterSection />
      <ProfileCarousel />
      <WhyEppCardsComponent />
      <VideoComponent />
      <JourneyWithUsComponent />
      <PackagesHomeComponent />
      <HappyStoriesComponent />
      <AppInfoComponent />
      <SearchingTypeComponent />
      <FooterComponent />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
      <ScrollToTop />
      <Routes>
        
        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* PACKAGES PAGE */}
        <Route path="/packages" element={ <PackagesComponent /> } />
        
        {/* EVENTS PAGE */}
        <Route path="/events" element={<EventsComponent />} />
        
        {/* BRANCHES PAGE */}
        <Route path="/branches" element={ <BranchsComponent /> } />

        {/* SUCCESS STORY PAGE */}
        <Route path="/success" element={ <SuccessStoryComponent /> } />

        {/* BLOG PAGE */}
        <Route path="/blog" element={ <BlogPageComponent /> } />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<AboutUsComponent />} />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={ <ContactUsComponent /> } />



      </Routes>
      <FooterComponent />
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
