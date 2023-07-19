import React from "react";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { Overview } from "../../Components/Overview/Overview";
import { AnotherSection } from "../../Components/AnotherSection/AnotherSection";
import { Quote } from "../../Components/Quote/Quote";
import { BookingSection } from "../../Components/Booking/Booking";
import { Newsletter } from "../../Components/Newsletter/Newletter";
import { Footer } from "../../Components/Footer/Footer";
export const LandingPage = () => {
    return(
        <>
        <div className="overflow-x-hidden">
        <HeroSection/>
        <Overview/>
        <AnotherSection/>
        <Quote/>
        <BookingSection/>
        <Newsletter/>
        </div>
        </>
    )
}