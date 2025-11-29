import { Metadata } from "next";
import AllToursPage from "./AllToursPage";

export const metadata: Metadata = {
  title: 'Все туры | Путешествуйте вместе с Pelion Odyssey',
  description:
    'Выберите идеальное путешествие: групповые и VIP туры от Pelion Odyssey. Подходящие даты, уникальные маршруты и профессиональная организация.',
  keywords: 'туры, путешествия, Pelion Odyssey, групповые туры, VIP туры, уникальные маршруты, организация путешествий, туры по Греции',
  openGraph: {
    title: 'Все туры | Путешествуйте вместе с Pelion Odyssey',
    description:
      'Выберите идеальный тур — групповые и VIP путешествия от Pelion Odyssey. Уникальные маршруты, профессиональная организация и лучшие даты для вашего отдыха.',
    type: 'website',
    siteName: "Pelion Odyssey",
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Pelion Odyssey',
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Page() {
  return <AllToursPage />;
}