import { Button } from "@/components/ui/button/button";
import React from "react";
import style from "./popularToursGroupItem.module.scss";
import Link from "next/link";

interface Props {
  title: string;
  img: string;
  slug: string;
}

export const PopularToursGroupItem: React.FC<Props> = ({
  title,
  img,
  slug,
}) => {
  return (
    <div className={style.item} style={{ backgroundImage: `url(${img})` }}>
      <h3 className={style.title}>{title}</h3>
      <Button classname={style.button} slug={slug}>
        Смотреть туры
      </Button>
    </div>
  );
};
