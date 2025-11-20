import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";



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
import FooterComponent from './eppComponents/footerComponent';
import SearchingTypeComponent from './eppComponents/searchingTypeComponent';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HeaderSection />
      <NavBarSection />
      <PosterSection />
      <ProfileCarousel />
      <WhyEppCardsComponent />
      <AppInfoComponent />
      <SearchingTypeComponent />
      <FooterComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
