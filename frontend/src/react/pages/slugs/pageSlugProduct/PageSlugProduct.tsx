"use client"

import { Container } from "@/react/components/containers/container/Container";
import { SectionProductAside } from "@/react/sections/slugs/slugProduct/sectionProductAside/SectionProductAside";
import { SectionSwiperSlugProduct } from "@/react/sections/slugs/slugProduct/sectionSwiperSlugProduct/SectionSwiperSlugProduct";

export default function PageSlugProduct () {
    return (
        <Container className="flex gap-10">
            <SectionSwiperSlugProduct />
            <SectionProductAside />
        </Container>
    )
}