import style from './popularToursGroup.module.scss';
import React from 'react';
import { PopularToursGroupItem } from './popularToursGroupItem/popularToursGroupItem';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

interface GroupItem {
  _id: string;
  title: string;
  image: {
    url: string;
  };
  slug: string;
}

interface PopularToursGroupProps {
  data: GroupItem[];
}

export const PopularToursGroup: React.FC<PopularToursGroupProps> = ({ data }) => {
  console.log(data);
  return (
    <section className={style.popularToursGroup}>
      {data.length > 3 ? (
        <Splide className={style.slider}
          options={{
            perPage: 3,
            type: 'loop',
            gap: "30px",
            drag: false,
            breakpoints: {
              1270: {
                perPage: 1,
                drag: true,
              },
              500: {
                arrows: false,
              }
            }
          }}
        >
          {data.map((item) => (
            <SplideSlide key={item._id}>
              <PopularToursGroupItem
                title={item.title}
                img={item.image.url}
                slug={item.slug}
              />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className={style.items}>
          {data.map((item) => (
            <PopularToursGroupItem
              key={item._id}
              title={item.title}
              img={item.image.url}
              slug={item.slug}
            />
          ))}
        </div>
      )}
    </section>
  );
};
