'use client'

import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
// import required modules
import {Autoplay, Pagination} from 'swiper/modules';
import Image from "next/image";

import styles from './swiper.module.css'

export default function SwiperElement() {
    return (
        <>
            <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]} autoplay={{
                delay: 2500,
            }}
                loop
                className={styles.swiper}>
                <SwiperSlide>
                    <Image fill={true} src="/image.jpg" alt="image1"/>
                    <div className={styles.swiperBox}>
                        <h2>서브 타이틀</h2>
                        <h3>타이틀</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fill={true} src="/image.jpg" alt="image2"/>
                    <div className={styles.swiperBox}>
                        <h2>서브 타이틀</h2>
                        <h3>타이틀</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image fill={true} src="/image.jpg" alt="image3"/>
                    <div className={styles.swiperBox}>
                        <h2>서브 타이틀</h2>
                        <h3>타이틀</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
