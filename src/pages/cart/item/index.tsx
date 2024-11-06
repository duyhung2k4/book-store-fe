import React from "react";

import { Group, Image, Stack, Text } from "@mantine/core";



const Item: React.FC = () => {
    return (
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
    )
}

export default Item;