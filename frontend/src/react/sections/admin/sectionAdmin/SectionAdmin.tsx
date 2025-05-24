import { Container } from '@/react/components/containers/container/Container'
import styles from './styles.module.css'
import { SectionSidebarAdmin } from '../sectionSidebarAdmin/SectionSidebarAdmin'

export const SectionAdmin = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <SectionSidebarAdmin />
            </Container>
        </div>
    )
}