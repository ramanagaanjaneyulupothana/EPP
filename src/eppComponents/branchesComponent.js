import React from "react";
import HeaderSection from "./headerSection";
import NavBarSection from "./navBarSection";
import { PosterSection } from "./posterSection";
import WhiteBox from "./whiteBox";
import AppInfoComponent from "./appInfoComponent";
import FooterComponent from "./footerComponent";

export default function BranchsComponent(){
    return(
        <div>
            <HeaderSection />
            <NavBarSection />
            <PosterSection />
            <WhiteBox />
            <AppInfoComponent />
        </div>
    )
}