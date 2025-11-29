'use client';
import React from "react";
import styles from "./booking.module.scss";
import { TourData } from "@/types/tour";
import { useModal } from "@/hooks/useModal";
import { BookingModal } from "@/components/shared/BookingModal";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const Booking = ({ tourData }: { tourData: TourData }) => {
  const { isOpen, open, close } = useModal();

  return (
    <section className={styles.booking}>
      <SectionTitle className={styles.title}>Готовы к приключению?</SectionTitle>
      <p className={styles.bookingText}>
        Забронируйте тур прямо сейчас и получите незабываемые впечатления!
      </p>
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
      <p className={styles.bookingNote}>
        * При бронировании за 30 дней до начала тура - скидка 10%
      </p>
    </section>
  );
};
