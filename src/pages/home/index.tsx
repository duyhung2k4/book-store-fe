import React from "react";
import Book from "@/components/book";

import { Button, Grid, Group, Stack, Text, TextInput } from "@mantine/core";

import classes from "./styles.module.css";
import BookItem from "@/components/book_item";



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

            <Stack mt={30}>
                <Text className={classes.title}>Thể loại sách</Text>
                <Grid columns={16}>
                    <Grid.Col span={2}>
                        <Book width={100} title="Trinh thám" />
                    </Grid.Col>
                </Grid>
            </Stack>

            <Stack mt={60}>
                <Text className={classes.title}>Mới ra mắt</Text>
                <Grid columns={12} gutter={40}>
                    <Grid.Col span={4}>
                        <BookItem/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <BookItem/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <BookItem/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <BookItem/>
                    </Grid.Col>
                </Grid>
            </Stack>
        </Stack>
    )
}

export default Home;