import { CustomInput } from "@/react/components/inputs/customInput/CustomInput"
import { CustomButton } from "@/react/components/ui/customButton/CustomButton"
import { SectionAdminButtonsCRUD } from "@/react/sections/common/sectionAdminButtonsCRUD/SectionAdminButtonsCRUD"
import { useDeleteCategoriesMutation, useUpdateCategoriesMutation } from "@/scripts/api/categories/categoriesApi"
import { Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { useForm } from "react-hook-form"
import { slugify } from "transliteration"

interface Props {
    index: number
    item: any
}

export const CardAdminCategory = ({
    index,
    item
}: Props) => {
    const {
        control,
        getValues
    } = useForm({
        defaultValues: {
            title: ""
        }
    })

    const [delCategory] = useDeleteCategoriesMutation()
    const [updateCategory] = useUpdateCategoriesMutation()
    
    const [opened, { open, close }] = useDisclosure(false);

    const funcDeleteCategory = async (id: number) => await delCategory(id)
    const funcUpdateCategory = async () => {
        const title = getValues('title')
        const slug = slugify('Пример категории')

        const payload = {
            title: title,
            fullName: slug
        }

        await updateCategory({id: item.id, payload})
        close()
    }
    

    return (
        <div className="flex items-center justify-between w-full p-3 border border-[#648660] rounded-md font-bold" key={item.id}>
            <div>{++index}. {item.title}</div>
            <SectionAdminButtonsCRUD data={item} funcOnDelete={funcDeleteCategory} funcOnEdit={() => open()}/>

            <Modal opened={opened} onClose={close} title="Редактировать">
                <div className='flex flex-col gap-2'>
                    <CustomInput control={control} name="title" placeholder='Название категории' />
                    <CustomButton title='Обновить' onClick={funcUpdateCategory} />
                </div>
            </Modal>
        </div>
    )
}