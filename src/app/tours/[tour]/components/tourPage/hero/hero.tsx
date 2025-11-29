"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./hero.module.scss";
import { useModal } from "@/hooks/useModal";
import { BookingModal } from "@/components/shared/BookingModal";
import { TourData } from "@/types/tour";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Hero = ({ tourData }: { tourData: TourData }) => {
  const { isOpen, open, close } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const slug = usePathname();

  function getPersonWord(n: number) {
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return "человек";
    }

    if (lastDigit === 1) {
      return "человека";
    }

    return "человек";
  }

  function getDayWord(n: number) {
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return "дней";
    if (lastDigit === 1) return "день";
    if (lastDigit >= 2 && lastDigit <= 4) return "дня";
    return "дней";
  }

  function getNightWord(n: number) {
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return "ночей";
    if (lastDigit === 1) return "ночь";
    if (lastDigit >= 2 && lastDigit <= 4) return "ночи";
    return "ночей";
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <header className={styles.header}>
            <Link href="/">
              <Image
                src="/images/footer/footerLogo.svg"
                alt="Pellion Odyssey логотип"
                className={styles.logo}
                width={100}
                height={50}
              />
            </Link>

            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link href={`/`}>Главная</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href={`${slug}#program`}>Программа тура</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href={`${slug}#dates`}>Даты</Link>
                </li>
                <li className={styles.navItem}>
                  <Link href={`${slug}#contacts`}>Контакты</Link>
                </li>
              </ul>
            </nav>

            <button
              className={`${styles.burgerButton} ${
                menuOpen ? styles.open : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
            </button>
          </header>

          <div
            className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}
          >
            <ul className={styles.mobileNavList}>
              <li className={styles.navItem}>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Главная
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href={`${slug}#program`} onClick={() => setMenuOpen(false)}>
                  Программа тура
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href={`${slug}#dates`} onClick={() => setMenuOpen(false)}>
                  Даты
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href={`${slug}#contacts`} onClick={() => setMenuOpen(false)}>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <h1 className={styles.title}>
            <span className={styles.titleTop}>
              {tourData.tourPageTitle.part1}
            </span>
            <strong className={styles.titleBottom}>
              {tourData.tourPageTitle.part2}
            </strong>
          </h1>
          <p className={styles.subtitle}>{tourData.tourPageTitle.part3}</p>
          <div className={styles.tourInfo}>
            <div className={`${styles.infoItem} ${styles.durationItem}`}>
              <span className={styles.infoLabel}>Продолжительность:</span>
              <span className={styles.infoValue}>
                {tourData.duration.days} {getDayWord(tourData.duration.days)} /{" "}
                {tourData.duration.nights}{" "}
                {getNightWord(tourData.duration.nights)}
              </span>
            </div>
            <div className={`${styles.infoItem} ${styles.groupSizeItem}`}>
              <span className={styles.infoLabel}>Размер группы:</span>
              <span className={styles.infoValue}>
                до {tourData.group} {getPersonWord(tourData.group)}
              </span>
            </div>
            <div className={`${styles.infoItem} ${styles.difficultyItem}`}>
              <span className={styles.infoLabel}>Сложность тура:</span>
              <span className={styles.infoValue}>{tourData.difficulty}</span>
            </div>
          </div>
          <div className={styles.tourBooking}>
            <button className={styles.bookBtn} onClick={open}>
              Забронировать тур
            </button>
            <BookingModal isOpen={isOpen} onClose={close} />
            <div className={styles.tourPriceInfo}>
              <span className={styles.priceLabel}>Стоимость</span>
              <span className={styles.priceValue}>от ${tourData.price}</span>
            </div>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={tourData.image}
            alt={tourData.title}
            className={styles.heroImage}
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
};
