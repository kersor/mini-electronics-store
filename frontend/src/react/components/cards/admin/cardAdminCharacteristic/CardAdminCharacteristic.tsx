import { CustomInput } from "@/react/components/inputs/customInput/CustomInput"
import { CustomButton } from "@/react/components/ui/customButton/CustomButton"
import { SectionAdminButtonsCRUD } from "@/react/sections/common/sectionAdminButtonsCRUD/SectionAdminButtonsCRUD"
import { useDeleteCategoriesMutation, useUpdateCategoriesMutation } from "@/scripts/api/categories/categoriesApi"
import { useDeleteCharacteristicMutation, useUpdateCharacteristicMutation } from "@/scripts/api/characteristic/characteristicApi"
import { Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { useForm } from "react-hook-form"
import { slugify } from "transliteration"

interface Props {
    index: number
    item: any
}

export const CardAdminCharacteristic = ({
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

    const [delCharacteristic] = useDeleteCharacteristicMutation()
    const [updateCharacteristic] = useUpdateCharacteristicMutation()
    
    const [opened, { open, close }] = useDisclosure(false);

    const funcDeleteCharacteristic = async (id: number) => await delCharacteristic(id)
    const funcUpdateCharacteristic = async () => {
        const title = getValues('title')

        const payload = {
            title: title
        }

        await updateCharacteristic({id: item.id, payload})
        close()
    }
    

    return (
        <div className="flex items-center justify-between w-full p-3 border border-[#648660] rounded-md font-bold" key={item.id}>
            <div className="flex gap-5 items-center">
                <div>{++index}. {item.title}</div>
                <div className="bg-green-700 text-[#FFF] py-1 px-3 rounded-md">{item.type}</div>
            </div>
            <SectionAdminButtonsCRUD data={item} funcOnDelete={funcDeleteCharacteristic} funcOnEdit={() => open()}/>

            <Modal opened={opened} onClose={close} title="Редактировать">
                <div className='flex flex-col gap-2'>
                    <CustomInput control={control} name="title" placeholder='Название категории' />
                    <CustomButton title='Обновить' onClick={funcUpdateCharacteristic} />
                </div>
            </Modal>
        </div>
    )
}