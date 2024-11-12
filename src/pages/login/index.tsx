import React, { useEffect, useMemo } from "react";
import Cookies from "js-cookie";

import { Button, Grid, Group, Image, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import { TOKEN_TYPE } from "@/model/variable";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constants/router";
import { useLoginMutation } from "@/redux/api/auth";
import { LoginRequest } from "@/dto/request/auth";
import { useForm } from "@mantine/form";

import bgGIF from "@/assets/GIF/bg-login.gif";
import classes from "./style.module.css";


const Login: React.FC = () => {
    const navigation = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const form = useForm<LoginRequest>({
        initialValues: { username: "", password: "" },
        validate: {
            username: (value) => value.length === 0 ? "Điền tên đăng nhập" : null,
            password: (value) => value.length === 0 ? "Điền mật khẩu" : null,
        }
    })

    const accessToken = useMemo(() => {
        return Cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
    }, [Cookies.get(TOKEN_TYPE.ACCESS_TOKEN)]);



    const handleSubmit = async (values: LoginRequest) => {
        const result = await login(values);

        console.log(result);

        if ("error" in result) return;

    }



    useEffect(() => {
        if (accessToken) {
            navigation(ROUTER.HOME.href);
        }
    }, [accessToken])

    if (accessToken) {
        return <></>
    }

    return (
        <Group className={classes.root}>
            <Grid
                w={"100%"}
                h={"100%"}
                classNames={{
                    inner: classes.inner
                }}
            >
                <Grid.Col span={7} w={"100%"}>
                    <Stack className={classes.bg}>
                        <Image className={classes.bg_image} src={bgGIF} />
                    </Stack>
                </Grid.Col>

                <Grid.Col span={5} w={"100%"}>
                    <Stack className={classes.box} gap={40}>
                        <Stack gap={0} w={"100%"} align="center">
                            <Text style={{ fontWeight: 800, fontSize: 30, textAlign: "center" }}>Chào mừng quay lại Book Store</Text>
                            <Text style={{ fontWeight: 800, fontSize: 14 }}>Vui lòng nhập thông tin đăng nhập</Text>
                        </Stack>

                        <form id="login" style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)}>
                            <Stack w={"100%"} gap={0}>
                                <TextInput
                                    label="Tên đăng nhập"
                                    {...form.getInputProps("username")}
                                />
                                <PasswordInput
                                    label="Mật khẩu"
                                    {...form.getInputProps("password")}
                                />
                            </Stack>
                        </form>

                        <Button
                            loading={isLoading}
                            disabled={isLoading}
                            w={"100%"}
                            type="submit"
                            form="login"
                        >Đăng nhập</Button>
                        <Text w={"100%"} style={{ textAlign: "left" }}>
                            Bạn chưa có tài khoản?&nbsp;
                            <span
                                className={classes.high_light}
                                onClick={() => navigation(ROUTER.REGSITER.href)}
                            >Đăng kí</span>
                        </Text>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Group>
    )
}

export default Login;