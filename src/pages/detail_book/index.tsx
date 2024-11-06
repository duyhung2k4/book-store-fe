import React from "react";

import { Avatar, Button, Grid, Group, Image, NumberInput, Stack, Text, TextInput, Tooltip } from "@mantine/core";
import { IconArrowLeft, IconShoppingCart } from "@tabler/icons-react";

import classes from "./styles.module.css";
import Comment from "@/components/comment";



const DetailBook: React.FC = () => {
    return (
        <Stack w={"100%"}>
            <Group justify="start" w={"100%"}>
                <Tooltip label="Quay lại">
                    <IconArrowLeft style={{ cursor: "pointer" }} size={24} />
                </Tooltip>
                <Text className={classes.title}>Chi tiết sản phẩm</Text>
            </Group>

            <Grid>
                <Grid.Col span={5}>
                    <Image
                        src={"https://cdn.dribbble.com/userupload/3634609/file/original-d79062a7d984df9d3328911cdecdc103.png?resize=1905x1429"}
                        style={{
                            aspectRatio: 3 / 4
                        }}
                    />

                    <Group mt={30}>
                        <NumberInput
                            min={1}
                            step={1}
                            defaultValue={1}
                            style={{
                                flex: 1,
                            }}
                        />
                        <Button
                            leftSection={<IconShoppingCart/>}
                        >Thêm</Button>
                    </Group>
                </Grid.Col>
                <Grid.Col span={7}>
                    <Stack>
                        <Text>Thông tin sản phẩm</Text>
                        <Group justify="space-between">
                            <Text fw={700}>Tên sản phẩm: </Text>
                            <Text>Hello</Text>
                        </Group>

                        <Group justify="space-between">
                            <Text fw={700}>Tác giả: </Text>
                            <Text>Hello</Text>
                        </Group>

                        <Group justify="space-between">
                            <Text fw={700}>Thể loại: </Text>
                            <Text>Hello</Text>
                        </Group>

                        <Group justify="space-between">
                            <Text fw={700}>Mô tả: </Text>
                            <Text>Hello</Text>
                        </Group>

                        <Group justify="space-between">
                            <Text fw={700}>Giá: </Text>
                            <Text>Hello</Text>
                        </Group>

                        <Group justify="space-between">
                            <Text fw={700}>Số lượng: </Text>
                            <Text>100</Text>
                        </Group>
                    </Stack>
                </Grid.Col>
            </Grid>

            <Stack mt={50}>
                <Text className={classes.title}>Đánh giá sản phẩm</Text>

                <Stack>
                    <Group>
                        <Avatar color="cyan" radius="xl">MK</Avatar>
                        <Text>Bạn</Text>
                    </Group>
                    <TextInput
                        placeholder="Viết bình luận"
                        className={classes.comment}
                    />
                    <Group justify="end">
                        <Button>Bình luận</Button>
                    </Group>
                </Stack>

                <Stack gap={16} mt={30}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default DetailBook;