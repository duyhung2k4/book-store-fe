import React from "react";
import Book from "@/components/book";

import { Grid, Stack, Text } from "@mantine/core";

import classes from "./styles.module.css";



const Category: React.FC = () => {
    return (
        <Stack w={"100%"}>
            <Stack mt={30}>
                <Text className={classes.title}>Thể loại sách</Text>
                <Grid columns={16}>
                    <Grid.Col span={2}>
                        <Book width={100} title="Trinh thám" />
                    </Grid.Col>
                </Grid>
            </Stack>
        </Stack>
    )
}

export default Category;