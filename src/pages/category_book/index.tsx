import React from "react";
import BookItem from "@/components/book_item";

import { Button, Grid, Group, Stack, Text, TextInput, Tooltip } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

import classes from "./styles.module.css";



const CategoryBook: React.FC = () => {
    return (
        <Stack w={"100%"}>
            <Group w={"100%"}>
                <TextInput
                    placeholder="Nhập từ khóa"
                    style={{ flex: 1 }}
                />
                <Button bg={"#765C53"}>Tìm kiếm</Button>
            </Group>
            <Stack>
                <Group justify="start" w={"100%"}>
                    <Tooltip label="Quay lại">
                        <IconArrowLeft style={{ cursor: "pointer" }} size={24}/>
                    </Tooltip>
                    <Text className={classes.title}>Trinh thám</Text>
                </Group>
                <Grid columns={12} gutter={40}>
                    <Grid.Col span={4}>
                        <BookItem />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <BookItem />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <BookItem />
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <BookItem />
                    </Grid.Col>
                </Grid>
            </Stack>
        </Stack>
    )
}

export default CategoryBook;