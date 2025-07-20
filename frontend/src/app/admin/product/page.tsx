import PageProduct from "@/react/pages/admin/product/PageProduct";
import { categoriesApi } from "@/scripts/api/categories/categoriesApi";
import { productApi } from "@/scripts/api/product/productApi";
import { makeStore } from "@/scripts/api/store";

export default async function Page ({params}: any) {
    const store = makeStore()

    const {data: DataCategories} = await store.dispatch(categoriesApi.endpoints.getAllCategories.initiate())

    return (
        <PageProduct DataCategories={DataCategories} />
    )
}