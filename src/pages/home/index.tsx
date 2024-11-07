import React from "react";

import { Button, Grid, Group, Stack, Text, TextInput } from "@mantine/core";

import classes from "./styles.module.css";



const Home: React.FC = () => {
    return (
        <Stack w={"100%"}>
            <Group w={"100%"}>
                <TextInput
                    placeholder="Nhập từ khóa"
                    style={{ flex: 1 }}
                />
                <Button bg={"#765C53"}>Tìm kiếm</Button>
            </Group>

            <Stack mt={60}>
                <Text className={classes.title}>Mới ra mắt</Text>
                <Grid columns={12} gutter={40}>
                </Grid>
            </Stack>
        </Stack>
    )
}

export default Home;