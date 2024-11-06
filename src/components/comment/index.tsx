import { Avatar, Group, Rating, Stack, Text } from "@mantine/core";
import React from "react";



const Comment: React.FC = () => {
    return (
        <Stack
            style={{
                padding: 8,
                borderRadius: 8,
                backgroundColor: "#F7EFE5"
            }}
        >
            <Group align="start">
                <Avatar color="cyan" radius="xl">MK</Avatar>
                <Stack gap={0} pt={0}>
                    <Text>Name</Text>
                    <Rating defaultValue={2} />
                </Stack>
            </Group>
            <Text>Comment</Text>
        </Stack>
    )
}

export default Comment;