import { Button, FormControl, FormLabel, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import styles from '../styles/search.module.css'
import { ChangeEvent, useState } from 'react';

import Grid from "@/components/Grid";

export default function Search() {

    // Display cards is for testing purposes, should not be in final.
    const [displayCards, setDisplayCards] = useState(false);

    const onClickDisplayCards = () => {
        setDisplayCards(true);
    }

    

    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const onClickSearch = () => {
        // Check if at least one of the four inputs have been entered.
        if ((artist === "") && (album === "")) {
            setErrorMsg("Please enter at least one input.");
        }
        else {
            setErrorMsg("")
        }
    }

    const handleInputArtist = (event: ChangeEvent<HTMLInputElement>) => {
        setArtist(event.target.value);
    }

    const handleInputAlbum = (event: ChangeEvent<HTMLInputElement>) => {
        setAlbum(event.target.value);
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
                <Input maxWidth='300px' value={artist} onChange={handleInputArtist}/>
            </FormControl>

            <FormControl>
                <FormLabel>Album</FormLabel>
                <Input maxWidth='300px' value={album} onChange={handleInputAlbum}/>
            </FormControl>

            <FormControl>
                <Button mt={5} colorScheme='blue' onClick={onClickSearch}>Search</Button>
            </FormControl>

            <p>{errorMsg}</p>

            <FormControl>
                <Button mt={5} colorScheme='blue' onClick={onClickDisplayCards}>Display</Button>
            </FormControl>
            {displayCards===true && <Grid></Grid>}
        </>
    );
}