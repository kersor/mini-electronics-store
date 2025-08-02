import { Container } from "@/react/components/containers/container/Container";
import { SectionProductListCart } from "@/react/sections/cart/sectionProductListCart/SectionProductListCart";
import { SectionTotalCart } from "@/react/sections/cart/sectionTotalCart/SectionTotalCart";
import { Flex } from "@mantine/core";

export default function PageCart () {
    return (
        <Container>
            <div className="text-[24px] font-black text-[#4f694d]">Корзина</div>
            <Flex mt="20px" gap="20px" align="flex-start">
                <SectionProductListCart />
                <SectionTotalCart />
            </Flex>
        </Container>
    )
}