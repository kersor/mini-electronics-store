import { SquarePen, Trash2 } from 'lucide-react';
import styles from './styles.module.css'

interface Props {
    isDel?: boolean;
    isEdit?: boolean;
    funcOnDelete?: (id: number) => void;
    funcOnEdit?: () => void;
    data: any
}

export const SectionAdminButtonsCRUD = ({
    isDel = true,
    isEdit = true,
    funcOnDelete,
    funcOnEdit,
    data
}: Props) => {
    const funcDel = () => {
        if (funcOnDelete) {
            funcOnDelete(data.id);
        }
    }

    const funcEdit = () => {
        if (funcOnEdit) {
            funcOnEdit();
        }
    }

    return (
        <div className={styles.wrapper}>
            <div onClick={funcDel}><Trash2 width={23} color='#db3c3c'/></div>
            <div onClick={funcEdit}><SquarePen width={23}/></div>
        </div>
    )
}