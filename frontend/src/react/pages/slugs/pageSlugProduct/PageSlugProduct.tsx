"use client"

import { Container } from "@/react/components/containers/container/Container";
import { SectionProductAside } from "@/react/sections/slugs/slugProduct/sectionProductAside/SectionProductAside";
import { SectionSwiperSlugProduct } from "@/react/sections/slugs/slugProduct/sectionSwiperSlugProduct/SectionSwiperSlugProduct";
import styles from './styles.module.css'
import { SectionProductSpecifications } from "@/react/sections/slugs/slugProduct/sectionProductSpecifications/SectionProductSpecifications";

export default function PageSlugProduct () {
    return (
        <Container className="flex flex-col gap-10 pb-10">
            <div className="flex items-start gap-10">
                <SectionSwiperSlugProduct />
                <SectionProductAside />
            </div>
            <SectionProductSpecifications />
        </Container>
    )
}