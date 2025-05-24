import React, { PropsWithChildren } from "react"
import { SectionSidebarAdmin } from "../sectionSidebarAdmin/SectionSidebarAdmin"
import { Container } from "@/react/components/containers/container/Container"
import styles from './styles.module.css'

export default function AdminLayout ({
    children
}: PropsWithChildren) {
    return (
        <Container className={styles.wrapper}>
            <SectionSidebarAdmin />
            <div className="w-full min-h-full border border-[#828282] rounded-[10px]">
                {children}
            </div>
        </Container>
    )
}