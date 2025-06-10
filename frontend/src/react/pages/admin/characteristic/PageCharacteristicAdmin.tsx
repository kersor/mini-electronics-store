"use client"

import { CustomInput } from '@/react/components/inputs/customInput/CustomInput'
import styles from './styles.module.css'
import { CustomButton } from '@/react/components/ui/customButton/CustomButton'
import { useForm } from 'react-hook-form'
import { CustomSelect } from '@/react/components/inputs/customSelect/customSelect'
import { SelectListRadioButton } from '@/react/components/containers/select/SelectListRadioButton'
import { useCreateCharacteristicMutation, useGetAllCharacteristicsQuery } from '@/scripts/api/characteristic/characteristicApi'
import { CardAdminCharacteristic } from '@/react/components/cards/admin/cardAdminCharacteristic/CardAdminCharacteristic'

const characteristic = [
    {id: "string", title: "string"},
    {id: "boolean", title: "boolean"},
    {id: "number", title: "number"}
]

export default function PageCharacteristicAdmin () {
    const {data} = useGetAllCharacteristicsQuery()
    const [createCharacteristic] = useCreateCharacteristicMutation()


    const {
        control,
        getValues,
        watch
    } = useForm({
        defaultValues: {
            title: "",
            characteristicType: characteristic[0].id || ""
        }
    })

    const funcCreateCharacteristic = async () => {
        const payload = {
            title: getValues('title'),
            type: getValues('characteristicType')
        }
        await createCharacteristic(payload)
    }

    const titleType = watch('characteristicType')

    return (
        <div className=''>

            <div className='flex gap-2 items-center max-w-[550px] w-full'>
                <CustomInput classNameWrapper='w-full' control={control} name="title" placeholder='Название характеристики' />
                <div className='min-w-[150px]'>
                    <CustomSelect 
                        value={titleType || characteristic[0].id}
                        type={"outline"} 
                        placeholder="Тип"
                    >
                        <SelectListRadioButton
                            getValues={titleType} 
                            control={control}
                            name="characteristicType"
                            data={characteristic}
                            funcHandleSubmit={() => {
                                
                            }} 
                        />
                    </CustomSelect>
                </div>
                <CustomButton title='Создать' onClick={funcCreateCharacteristic} />
            </div>
            <div className='flex flex-col gap-2 mt-5 text-[#648660]'>
                {
                    data && data.map((item: any, index: number) => (
                        <CardAdminCharacteristic 
                            key={index}
                            index={index}
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    )
}