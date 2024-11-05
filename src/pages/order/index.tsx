import React from "react";

import { rem, Stack, Tabs, Text } from "@mantine/core";
import { IconMessageCircle, IconPhoto, IconSettings } from "@tabler/icons-react";

import classes from "./styles.module.css";
import OrderItem from "@/components/order_item";



const Order: React.FC = () => {
    const iconStyle = { width: rem(12), height: rem(12) };

    return (
        <Stack>
            <Text className={classes.title}>Đơn hàng của bạn</Text>
            <Tabs 
                defaultValue="Pending"
                color="#765c53"
            >
                <Tabs.List mb={30}>
                    <Tabs.Tab value="Pending" leftSection={<IconPhoto style={iconStyle} />}>
                        Chờ xác nhận
                    </Tabs.Tab>
                    <Tabs.Tab value="Shipping" leftSection={<IconMessageCircle style={iconStyle} />}>
                        Đang giao
                    </Tabs.Tab>
                    <Tabs.Tab value="Received" leftSection={<IconSettings style={iconStyle} />}>
                        Đã nhận
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="Pending">
                    <OrderItem/>
                </Tabs.Panel>

                <Tabs.Panel value="Shipping">
                    Đang giao
                </Tabs.Panel>

                <Tabs.Panel value="Received">
                    Đã nhận
                </Tabs.Panel>
            </Tabs>
        </Stack>
    )
}

export default Order;