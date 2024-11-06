import React, { useState } from "react";
import Item from "./item";

import { Button, Group, Modal, Stack, Text } from "@mantine/core";

import classes from "./styles.module.css";



const Cart: React.FC = () => {
    const [modal, setModal] = useState<boolean>(false);

    const handleOrder = async () => {

    }



    return (
        <>
            <Stack>
                <Text className={classes.title}>Giỏ hàng</Text>
                <Item />
                <Item />
                <Item />
                <Group
                    justify="space-between"
                    w={"100%"}
                    bg={"#FFFFFF"}
                    p={16}
                    style={{ borderRadius: 16 }}
                >
                    <Text><span style={{ fontWeight: 600 }}>Tổng thanh toán:</span> 300.000 VND</Text>
                    <Button onClick={() => setModal(true)}>Đặt hàng</Button>
                </Group>
            </Stack>

            <Modal 
                opened={modal} 
                onClose={() => setModal(false)}
                title="Xác nhận đặt hàng"
            >
                <Text>Bạn chắc chắn muốn thanh toán đơn hàng giá trị 300.000 VND</Text>
                <Group justify="end">
                    <Button color="red" onClick={() => setModal(false)}>Hủy</Button>
                    <Button onClick={handleOrder}>Xác nhận</Button>
                </Group>
            </Modal>
        </>
    )
}

export default Cart;