import { FormCustomField } from "@/components/form";
import TableCRUD from "@/components/table_crud";
import React, { useMemo } from "react";



const ManagerOrder: React.FC = () => {

    const { fields } = useMemo(() => {
        const fields: FormCustomField[] = [
            {
                type: "text",
                name: "order_date",
                size: 6,
                data: {
                    label: "Ngày mua"
                },
                isField: false,
            },
            {
                type: "number",
                name: "user_id",
                size: 6,
                data: {
                    label: "Người mua"
                },
                isField: false,
            },
            {
                type: "text",
                name: "user_address",
                size: 6,
                data: {
                    label: "Địa chỉ nhận hàng"
                },
                isField: false,
            },
            {
                type: "number",
                name: "total_price",
                size: 6,
                data: {
                    label: "Giá trị đơn"
                },
                isField: false,
            },
            {
                type: "text",
                name: "status",
                size: 6,
                data: {
                    label: "Trạng thái"
                },
                isField: false,
            },
        ];

        return { fields };
    }, []);



    return (
        <>
            <TableCRUD
                model=""
                fields={fields}
                cells={{}}
                toolbars={{
                    add: false
                }}
            />
        </>
    )
}

export default ManagerOrder;