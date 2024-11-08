import React from "react";
import Mess from "../mess";

import { Button, Group, Stack, Text, TextInput } from "@mantine/core";
import { IconBrandTelegram } from "@tabler/icons-react";

import classes from "./styles.module.css";



const RoomChat: React.FC = () => {
    return (
        <Stack
            style={{
                height: `calc(100vh - ${16 * 2}px)`,
                borderRadius: 16,
                backgroundColor: "#E2D6C9",
                padding: 16,
            }}
        >
            <Text className={classes.title}>Chat</Text>
            <Stack
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end"
                }}
            >
                <Mess content="Hello" me={false} />
            </Stack>
            <Group>
                <TextInput
                    placeholder="Nhập tin nhắn"
                    style={{
                        flex: 1
                    }}
                />
                <Button style={{ backgroundColor: "#ED5E64" }}>
                    <IconBrandTelegram />
                </Button>
            </Group>
        </Stack>
    )
}

export default RoomChat;