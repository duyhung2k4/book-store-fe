import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { Avatar, Button, Group, Modal, Stack, Text } from "@mantine/core";
import { useAppSelector } from "@/redux/hook";
import { useGetUserByIdQuery } from "@/redux/api/auth";
import { TOKEN_TYPE } from "@/model/variable";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constants/router";



const ModalUser: React.FC = () => {
    const profile = useAppSelector(state => state.authSlice.profile);
    const [modal, setModal] = useState<boolean>(false);

    const navigation = useNavigate();

    const {
        data,
        refetch,
    } = useGetUserByIdQuery(profile?.id || 0);

    const handleLogout = async () => {
        Cookies.remove(TOKEN_TYPE.ACCESS_TOKEN);
        setModal(false);
        navigation(ROUTER.LOGIN.href);
    }

    useEffect(() => {
        refetch();
    }, [profile?.id]);



    return (
        <>
            <Group p={16} style={{ cursor: "pointer" }} onClick={() => setModal(true)}>
                <Avatar radius="xl" />
                <Text>{data?.last_name} {data?.first_name}</Text>
            </Group>

            <Modal
                opened={modal}
                onClose={() => setModal(false)}
                title={"Thông tin tài khoản"}
            >
                <Stack>
                    <Group>
                        <Text fw={600}>Tên: </Text>
                        <Text>{data?.last_name} {data?.first_name}</Text>
                    </Group>
                    <Group>
                        <Text fw={600}>Địa chỉ: </Text>
                        <Text>{data?.address}</Text>
                    </Group>
                    <Group>
                        <Text fw={600}>Số điện thoại: </Text>
                        <Text>{data?.last_name} {data?.first_name}</Text>
                    </Group>
                    <Group>
                        <Text fw={600}>Email: </Text>
                        <Text>{data?.email}</Text>
                    </Group>
                </Stack>

                <Group justify="end" mt={30}>
                    <Button color="red" onClick={handleLogout}>Đăng xuất</Button>
                    <Button>Cập nhật</Button>
                </Group>
            </Modal>
        </>
    )
}

export default ModalUser;