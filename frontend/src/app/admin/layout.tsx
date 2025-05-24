import AdminLayout from "@/react/sections/admin/adminLayout/AdminLayout"
import { PropsWithChildren } from "react"

export default function Layout ({
    children
}: PropsWithChildren) {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    )
}