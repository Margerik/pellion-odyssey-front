import React from "react";
import styles from "./shedule.module.scss";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TourData } from "@/types/tour";
import { SheduleItem } from "./sheduleItem/sheduleItem";

export const Shedule = ({ tourData }: { tourData: TourData }) => {
  return (
    <section className={styles.schedule} id="program">
      <SectionTitle className={styles.title}>Программа тура</SectionTitle>
      <div className={styles.scheduleList}>

        {tourData.program.map((dayData, index) => (
          <SheduleItem key={index} dayData={dayData} />
        ))}
      </div>
     
    </section>
  );
};
