import React from "react";
import styles from "./sheduleItem.module.scss";
import Image from "next/image";
import { TourData } from "@/types/tour";

type DayData = {
  dayNumber: number;
  title: string;
  image?: string;
  titleTwo?: string;
  description: string;
  activities: string[];
  accommodation?: string;
};

export const SheduleItem = ({ dayData }: { dayData: DayData }) => {
  return (
    <>
      <div className={styles.card}>
        <div
          className={styles.imageSection}
          style={{
    background: `linear-gradient(270deg, rgba(47, 158, 234, 0) 45.99%, #2F9EEA 69.11%), url(${dayData.image}) center/cover no-repeat`
  }}
        >
          <div className={styles.textBlock}>
            <div className={styles.dayBox}>День {dayData.dayNumber}</div>
            <h3 className={styles.title}>{dayData.title}</h3>
            {dayData.titleTwo ? (
              <p className={styles.subtitle}>{dayData.titleTwo}</p>
            ) : null}
          </div>
        </div>
        <div className={styles.content}>
          <p>{dayData.description || "Описание дня будет добавлено позже."}</p>
          <div className={styles.activBox}>
            <div className={styles.activities}>
              <strong>Активности:</strong>
              <ul>
                {dayData.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
            <div className={styles.hotelBox}>
              Проживание: <br /> {dayData.accommodation}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
