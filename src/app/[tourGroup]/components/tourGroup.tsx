import { Header } from "@/components/screens/header";
import React from "react";
import style from "./tourGroup.module.scss";
import { LittleCard } from "@/components/shared/LittleCard";
import { TourGroup as ITourGroup } from "@/types/tourGroup";

const TourGroup = ({ tourGroupData }: { tourGroupData: ITourGroup }) => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <h1 className={style.title}>{tourGroupData?.title || "Група турів"}</h1>
        <div className={style.tours}>
          {tourGroupData?.tours.map((tour, index) => (
            <LittleCard key={index} item={tour} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TourGroup;
