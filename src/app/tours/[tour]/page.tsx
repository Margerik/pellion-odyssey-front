import TourPage from "./components/tourPage/tourPage";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { tourBySlugQuery } from "@/lib/queries";
import { Suspense } from "react";
import Loader from "@/components/shared/Loader";
import { Metadata } from "next";

interface TourData {
  titleTop: string;
  titleBottom: string;
  subtitle: string;
  description: string;
  mainImage: string;
  price: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  includes: string[];
  schedule: {
    day: number;
    title: string;
    description: string;
    activities: string[];
    accommodation?: string;
  }[];
  gallery?: string[];
  foundersImage: string;
  foundersNameLeft: string;
  foundersLeftInstagram: string;
  foundersNameRight: string;
  foundersRightInstagram: string;
  foundersAchievementsList: string[];
  reviews?: {
    name: string;
    text: string;
    instagram: string;
    avatar: string;
  }[];
  datesData: {
    month: string;
    dates: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

interface tourProps {
  tourData: TourData;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tour: string }>;
}) {
  const { tour } = await params;
  const data = await fetchSanityData(tourBySlugQuery, { slug: tour });

  return {
    title: `${data.tourPageTitle.part1} ${data.tourPageTitle.part2}`,
    description: data.tourPageTitle.part3,
    keywords: [
      "тур",
      "туры",
      "pelion odyssey",
      "Греция",
      "путешествие",
      "приключение",
      "отдых",
      "экскурсии",
      "тур по Греции",
      "туры в Грецию",
      "греческие острова",
    ],
    openGraph: {
      title: `${data.tourPageTitle.part1} ${data.tourPageTitle.part2}`,
      description: data.tourPageTitle.part3,
      type: "website",
      siteName: "Pelion Odyssey",
      images: [
        {
          url: "/images/og.jpg",
          width: 1200,
          height: 630,
          alt: "Pelion Odyssey",
        },
      ],
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function Page({
  params,
}: {
  params: Promise<{ tour: string }>;
}) {
  const { tour } = await params;
  const data = await fetchSanityData(tourBySlugQuery, { slug: tour });

  return (
    <Suspense fallback={<Loader />}>
      <TourPage tourData={data} />
    </Suspense>
  );
}