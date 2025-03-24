import styles from '../styles/subscriptions.module.css'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import Grid from "@/components/Grid";

// Make the grid its own component. This grid can then be used when displaying search results for instance.
// Or perhaps just make the card its own component.
export default function Subscriptions() {

    return (
        <>
            <div>Test.</div>
            <Heading as='h2' size='xl'>Your Subscriptions</Heading>

            <Grid></Grid>

        </>
    );
}