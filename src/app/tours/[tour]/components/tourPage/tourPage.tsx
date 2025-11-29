"use client";
import React from "react";
import styles from "./tour.module.scss";
import { Hero } from "./hero/hero";
import { Description } from "./description/description";
import { Includes } from "./includes/includes";
import { Shedule } from "./shedule/shedule";
import { Gallery } from "./gallery/gallery";
import { Founders } from "./founders/founders";
import { Testimonials } from "./testimonials/testimonials";
import { Faq } from "./faq/faq";
import { Booking } from "./booking/booking";
import { Dates } from "./dates/dates";
import { TourData } from "@/types/tour";
import { Join } from "@/components/screens/join/join";

interface tourProps {
  tourData: TourData;
}

export default function TourPage({ tourData }: tourProps) {

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <Hero tourData={tourData} />
      <div className={styles.content}>
        {/* Description Section */}
        <Description tourData={tourData} />

        {/* What's Included Section */}
        <Includes tourData={tourData} />

        {/* Schedule Section */}
        <Shedule tourData={tourData} />

        {/* Gallery Section */}
        <Gallery tourData={tourData} />

        {/* Founders Section */}
        <Founders />
      </div>
      {/* Testimonials Section */}
      <Testimonials tourData={tourData} />

      <div className={styles.content}>
        <Dates tourData={tourData} />

        {/* Join Section */}
        <Join/>
        
        {/* FAQ Section */}
        <Faq tourData={tourData} />
      </div>

      {/* Booking Section */}
      <Booking tourData={tourData} />
    </div>
  );
}
