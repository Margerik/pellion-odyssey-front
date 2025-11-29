'use client';
import { Container } from "@/components/container";
import { Gallery } from "@/components/screens/gallery/galleryList/gallery";
import { HowToJoin } from "@/components/screens/howToJoin/howToJoin";
import { Join } from "@/components/screens/join/join";
import { Main } from "@/components/screens/main/main";
import { PopularToursList } from "@/components/screens/popularTours/popularToursList/popularToursList";
import { Reviews } from "@/components/screens/reviews/reviewsList/reviews";
import React from "react";
import { Founders } from "./tours/[tour]/components/tourPage/founders/founders";
import { PopularToursGroup } from "@/components/screens/popularToursGroup/popularToursGroup";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { getAllGroupsQuery } from "@/lib/queries";

const Page: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [groups, setGroups] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchGroups = async () => {
      const data = await fetchSanityData(getAllGroupsQuery);
      setGroups(data);
    };
    fetchGroups();
  }, []);

  return (
    <>
      <Main />
      <Container>
        <PopularToursList />
        <PopularToursGroup data={groups} />
        <Join />
        <HowToJoin />
        <Founders />
        <Reviews />
      </Container>
      <Gallery />
    </>
  );
};

export default Page;
