import PageProduct from "@/react/pages/admin/product/PageProduct";
import { categoriesApi } from "@/scripts/api/categories/categoriesApi";
import { makeStore } from "@/scripts/api/store";

export default async function Page ({params}: any) {
    const store = makeStore()

    const {data} = await store.dispatch(categoriesApi.endpoints.getAllCategories.initiate())

    return (
        <PageProduct categories={data}/>
    )
}