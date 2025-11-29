"use client";

import React, { useState } from "react";
import styles from "./photos.module.scss";
import Image from "next/image";
import { Header } from "@/components/screens/header";
import { Report } from "@/types/report";

const Photos = ({ photosData }: { photosData: Report }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{photosData.subtitle}</h1>
        <h2 className={styles.subtitle}>{photosData.title}</h2>
        <p className={styles.description}>{photosData.description}</p>
        <div className={styles.gallery}>
          {photosData.gallery.map((image, index) => (

              <Image
                key={index || image.url}
                src={image.url}
                alt={image.alt ?? `Фото ${index + 1}`}
                width={600}
                height={400}
                className={styles.image}
              />
          ))}
        </div>
      </div>
    </>
  );
};

export default Photos;
