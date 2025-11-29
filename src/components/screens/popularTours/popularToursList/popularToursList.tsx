"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import style from "./popularToursList.module.scss";
import "@splidejs/react-splide/css/skyblue";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { LittleCard, LittleCardStyles } from "@/components/shared/LittleCard";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { allPopularToursQuery } from "@/lib/queries";
import Loader from "@/components/shared/Loader";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const PopularToursList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Get all tours from cms
  useEffect(() => {
    const getTours = async () => {
      try {
        const data = await fetchSanityData(allPopularToursQuery);
        setTours(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

  // Показуємо лоадер, поки завантажуємо дані
  if (loading) {
    return (
      <section className={style.popularToursList}>
        <Loader />
      </section>
    );
  }

  // Якщо даних немає - не рендеримо нічого
  if (!tours.length) return null;

  return (
    <section className={style.popularToursList} id="popularTours">
      <SectionTitle className={style.title}>Популярные туры</SectionTitle>
      <p className={style.scrollHint}>← Листай туры →</p>
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          arrows: true,
          pagination: true,
          gap: "2rem",
          breakpoints: {
            1290: {
              perPage: 1,
              drag: true,
            },
            500: {
              arrows: false,
            },
          },
        }}
        className={style.slider}
      >
        {tours.map((item, index) => (
          <SplideSlide key={index}>
            <LittleCard item={item} />
          </SplideSlide>
        ))}
      </Splide>

      <Link
        href={"/tours"}
        className={`${LittleCardStyles.detailsButton} ${style.button}`}
      >
        Смотреть все
      </Link>
    </section>
  );
};
