import { Container } from '@/react/components/containers/container/Container'
import styles from './styles.module.css'
import { SectionCartSidebar } from '@/react/sections/cart/sectionCartSidebar/SectionCartSidebar'
import { SectionCartProductList } from '@/react/sections/cart/sectionCartProductList/SectionCartProductList'

export default function PageCart () {
    return (
        <Container>
            <div className="text-[24px] font-black text-[#4f694d]">Корзина</div>
            <div className="flex ">
                <SectionCartProductList />
                <SectionCartSidebar />
            </div>
        </Container>
    )
}