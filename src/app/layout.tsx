import type { Metadata } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import "../assets/style/global.scss";
import { Footer } from "@/components/screens/footer/footer";
import { Container } from "@/components/container";
import localFont from 'next/font/local';

const montserrat = Montserrat({
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const benzinBold = localFont({
  src: '../assets/Benzin/Benzin-Bold.ttf',
  variable: '--benzin-bold',
  display: 'swap',
});

const benzinMedium = localFont({
  src: '../assets/Benzin/Benzin-Medium.ttf',
  variable: '--benzin-medium',
  display: 'swap',
});



export const metadata: Metadata = {
  title: 'Главная | Путешествуй вместе с Pelion Odyssey',
  description:
    'Pelion Odyssey - ваш проводник в мир удивительных путешествий. Откройте для себя уникальные туры и незабываемые приключения.',
  keywords: [
    'путешествия',
    'туры',
    'Pelion Odyssey',
    'Греция',
    'отдых',
    'экскурсии',
    'туры в Грецию',
  ],
  openGraph: {
    title: 'Главная | Путешествуйте вместе с Pelion Odyssey',
    description:
      'Pelion Odyssey - ваш проводник в мир удивительных путешествий. Откройте для себя уникальные туры и незабываемые приключения.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <link rel="icon" href="/images/favicon.ico" sizes="any"/>
      <body className={`${montserrat.className} ${bebasNeue.variable} ${benzinBold.variable} ${benzinMedium.variable} `}>
        {children}
        <Container>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
