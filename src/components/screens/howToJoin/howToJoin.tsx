'use client';

import React, { useState } from 'react';
import style from './howToJoin.module.scss';
import Image from 'next/image';

export const HowToJoin: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={style.wrapper}>
      {showVideo ? (
        <iframe
          className={style.video}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div className={style.preview} onClick={() => setShowVideo(true)}>
          <Image src={"/images/other/video-preview.webp"} alt="Как присоединиться к туру" fill priority />
          <div className={style.overlay} />
          <button className={style.playButton} aria-label="Смотреть видео" />
          <p className={style.text}>
            Посмотри, какие разные и интересные люди путешествуют с нами!
          </p>
        </div>
      )}
    </div>
  );
};
