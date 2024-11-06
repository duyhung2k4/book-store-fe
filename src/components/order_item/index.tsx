import React, { useState } from "react";

import { Button, Group, Image, Modal, Stack, Text } from "@mantine/core";

import classes from "./styles.module.css";



export type OrderProps = {

}

const OrderItem: React.FC<OrderProps> = (props) => {
    const [modalCancel, setModalCancel] = useState<boolean>(false);
    const [modalDetail, setModalDetail] = useState<boolean>(false);

    const handleCancel = async () => {
        setModalCancel(false);
    }



    return (
        <>
            <Group
                style={{
                    padding: 16,
                    backgroundColor: "#FFF",
                    borderRadius: 16,
                    width: "100%",
                    cursor: "pointer"
                }}
            >
                <Image
                    src={"https://cdn.dribbble.com/userupload/3634609/file/original-d79062a7d984df9d3328911cdecdc103.png?resize=1905x1429"}
                    style={{
                        width: "50px",
                        aspectRatio: 1 / 1,
                    }}
                />
                <Stack
                    className={classes.text}
                    style={{
                        flex: 1,
                        justifyItems: "start",
                        height: "100%",
                    }}
                >hello</Stack>
                <Group>
                    <Text>100.000 VND</Text>
                    <Button bg={"red"} onClick={() => setModalCancel(true)}>Hủy đơn</Button>
                    <Button onClick={() => setModalDetail(true)}>Chi tiết</Button>
                </Group>
            </Group>

            <Modal
                opened={modalCancel}
                onClose={() => setModalCancel(false)}
                title="Xác nhận hủy đơn"
            >
                <Text>Bạn có chắc chắn muốn hủy đơn</Text>

                <Group w={"100%"} justify="end" mt={20}>
                    <Button color="red" onClick={() => setModalCancel(false)}>Hủy</Button>
                    <Button onClick={handleCancel}>Xác nhận</Button>
                </Group>
            </Modal>

            <Modal
                opened={modalDetail}
                onClose={() => setModalDetail(false)}
                title="Chi tiết đơn hàng"
            >
                <Group
                    style={{
                        padding: 16,
                        backgroundColor: "#FFF",
                        borderRadius: 16,
                        width: "100%",
                        cursor: "pointer"
                    }}
                >
                    <Image
                        src={"https://cdn.dribbble.com/userupload/3634609/file/original-d79062a7d984df9d3328911cdecdc103.png?resize=1905x1429"}
                        style={{
                            width: "50px",
                            aspectRatio: 1 / 1,
                        }}
                    />
                    <Stack
                        style={{
                            flex: 1,
                            justifyItems: "start",
                            height: "100%",
                        }}
                    >hello</Stack>
                    <Group>
                        <Text>SL: 6</Text>
                        <Text>100.000 VND</Text>
                    </Group>
                </Group>

                <Stack gap={4}>
                    <Group
                        justify="space-between"
                        pl={16}
                        pr={16}
                    >
                        <Text>Địa chỉ nhận hàng</Text>
                        <Text>Hà nội</Text>
                    </Group>

                    <Group
                        justify="space-between"
                        pl={16}
                        pr={16}
                    >
                        <Text>Tổng</Text>
                        <Text>100.000 VND</Text>
                    </Group>
                </Stack>
            </Modal>
        </>
    )
}

export default OrderItem;