import { TourData } from "./tour";
export interface TourGroup {
  id: string;
  title: string;
  img: string;
  tours: TourData[];
}
