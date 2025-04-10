import { Swiper, SwiperSlide, useSwiper } from "swiper/react"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from './styles.module.css'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { useState } from "react";
import clsx from "clsx";
import { ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";

export const SectionSwiperSlugProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className={styles.wrapper}> 
            <Swiper
                loop={true}
                spaceBetween={20}
               
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper2}
            >
                {
                    [...Array(10)].map((_, index: number) => (
                        <SwiperSlide key={index}>
                            <img src="/product/1.png" alt="" />
                        </SwiperSlide>
                    ))
                }
                <SwiperNavigation />
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                // loop={true}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper}
            >
                {
                    [...Array(10)].map((_, index: number) => (
                        <SwiperSlide key={index}>
                            <img src="/product/1.png" alt="" />
                            <div className={styles.mySwiper_back}></div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

const SwiperNavigation = () => {
    const swiper = useSwiper();

    const slidePrev = () => {
        if (swiper) swiper.slidePrev();
    };

    const slideNext = () => {
        if (swiper) swiper.slideNext();
    };

    return (
        <>
            <div onClick={slidePrev} className={clsx(styles.mySwiper_btn, styles.mySwiper_btn__prev)}>
                <ChevronLeft strokeWidth={2} color="#FFF" width={20}/>
            </div>
            <div onClick={slideNext} className={clsx(styles.mySwiper_btn, styles.mySwiper_btn__next)}>
                <ChevronRight strokeWidth={2} color="#FFF" width={20}/>
            </div>
        </>
    );
};