import React from "react";

import { Button, Image, Stack, Text } from "@mantine/core";

import classes from "./styles.module.css";



export type BookItemProps = {

}

const BookItem: React.FC = () => {
    return (
        <>
            <Stack className={classes.root}>
                <Stack w={"100%"}>
                    <Image
                        src={"https://cdn.dribbble.com/userupload/3634609/file/original-d79062a7d984df9d3328911cdecdc103.png?resize=1905x1429"}
                        style={{
                            aspectRatio: 1 / 1
                        }}
                    />
                    <Text className={classes.text}>
                        hello
                    </Text>
                    <Button variant="outline">100.000 VND</Button>
                    <Button>Chi tiết</Button>
                </Stack>
            </Stack>
        </>
    )
}

export default BookItem;