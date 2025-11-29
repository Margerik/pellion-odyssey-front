import React, { Suspense } from "react";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { toursByGroupSlugQuery } from "@/lib/queries";
import Loader from "@/components/shared/Loader";
import TourGroup from "./components/tourGroup";

export default async function tourGroupPage({
  params,
}: {
  params: Promise<{ tourGroup: string }>;
}) {
  const { tourGroup } = await params;
  const data = await fetchSanityData(toursByGroupSlugQuery, {
    slug: tourGroup,
  });

  console.log(data);
  return (
    <Suspense fallback={<Loader />}>
      <TourGroup tourGroupData={data} />
    </Suspense>
  );
}
