import React, { useEffect, useState } from 'react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import cls from './NewsDetail.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import {formatDate} from "../../utils/utils";
SwiperCore.use([Navigation]);

export default function NewsDetailComponent({
  date,
  news_type,
  title,
  images,
  description,
}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(images);
  }, [images, setData]);

  return (
    <section className={`${cls.news_detail} container`}>
      <div
        className={`${cls.news_detail__head} d-flex justify-content-between`}
      >
        <p className={`m-0`}>{formatDate(date)}</p>
        <p className={`m-0`}>{news_type}</p>
      </div>

      <h2 style={{ textAlign: 'start' }} className={`section__heading`}>
        {title}
      </h2>

      <div className={`${cls.news_detail__swiper_wrapper}`}>
        <Swiper navigation={true}>
          {data &&
            data.map(({ id, image }) => (
              <SwiperSlide key={id}>
                <div
                  style={{ backgroundImage: `url('${image}')` }}
                  className={cls.news_detail__swiper_img}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className={cls.news_detail__description}>{description}</div>
    </section>
  );
}
