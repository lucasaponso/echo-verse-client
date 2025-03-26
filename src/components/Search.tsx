import { Button, FormControl, FormLabel, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import styles from '../styles/search.module.css'
import { ChangeEvent, useState } from 'react';

import Grid from "@/components/Grid";

export default function Search() {

    const [displayCards, setDisplayCards] = useState(false);

    const onSubmitClick = () => {
        setDisplayCards(true);
    }
    return (
        <>
            <Heading paddingTop={10} as='h2' size='xl'>Looking for something?</Heading>
            <p>Add search bar here. Consider using another component library like flowbite which has a search bar.</p>

            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input maxWidth='300px'/>
            </FormControl>

            <FormLabel>Year</FormLabel>
            <NumberInput maxWidth='300px'>
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
            </NumberInput>

            <FormControl>
                <FormLabel>Artist</FormLabel>
                <Input maxWidth='300px'/>
            </FormControl>

            <FormControl>
                <FormLabel>Album</FormLabel>
                <Input maxWidth='300px'/>
            </FormControl>

            <FormControl>
                <Button mt={5} colorScheme='blue' onClick={onSubmitClick}>Search</Button>
            </FormControl>
            {displayCards===true && <Grid></Grid>}
        </>
    );
}