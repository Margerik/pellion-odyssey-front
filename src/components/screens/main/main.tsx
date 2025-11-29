"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./main.module.scss";
import { useModal } from "@/hooks/useModal";
import { BookingModal } from "@/components/shared/BookingModal";

export const Main: React.FC = () => {
  const { isOpen, open, close } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <header className={styles.header}>
            <Image
              src="/images/footer/footerLogo.svg"
              alt="Pellion Odyssey логотип"
              className={styles.logo}
              width={100}
              height={50}
            />

            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="/">Главная</Link></li>
                <li className={styles.navItem}><Link href="/#popularTours">Популярные туры</Link></li>
                <li className={styles.navItem}><Link href="/#contacts">Контакты</Link></li>
              </ul>
            </nav>

            <button
              className={`${styles.burgerButton} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
            </button>
          </header>

          <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
            <ul className={styles.mobileNavList}>
              <li className={styles.navItem}><Link href="/" onClick={() => setMenuOpen(false)}>Главная</Link></li>
              <li className={styles.navItem}><Link href="/#popularTours" onClick={() => setMenuOpen(false)}>Популярные туры</Link></li>
              <li className={styles.navItem}><Link href="/#contacts" onClick={() => setMenuOpen(false)}>Контакты</Link></li>
            </ul>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleTop}>откройте для себя настоящую</span>
            <strong className={styles.titleBottom}>Грецию</strong>
          </h1>
          <p className={styles.subtitle}>
            Погрузитесь в атмосферу уюта, солнца и древних традиций на
            живописных берегах Эгейского моря.
          </p>
          <div className={styles.tourBooking}>
            <button className={styles.bookBtn} onClick={open}>
              Забронировать тур
            </button>
            <BookingModal isOpen={isOpen} onClose={close} />
          </div>
        </div>

        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/hero/tourImage.png"
            alt="Девушка на пляже"
            className={styles.heroImage}
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
};
