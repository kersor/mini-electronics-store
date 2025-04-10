import { Container } from '@/react/components/containers/container/Container'
import styles from './styles.module.css'
import { SectionListFavorites } from '@/react/sections/favorites/sectionListFavorites/SectionListFavorites'

export default function PageFavorites () {
    return (
        <Container>
            <div className="text-[24px] font-black text-[#4f694d]">Избранные</div>
            <SectionListFavorites />
        </Container>
    )
}