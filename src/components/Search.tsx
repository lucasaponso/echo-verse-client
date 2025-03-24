import { Button, FormControl, Heading } from '@chakra-ui/react';
import styles from '../styles/search.module.css'
import { ChangeEvent, useState } from 'react';

export default function Search() {

    const [displayCards, setDisplayCards] = useState(false);

    const onSubmitClick = () => {
        setDisplayCards(true);
    }
    return (
        <>
            <div>Test</div>
            <Heading as='h2' size='xl'>Looking for something?</Heading>
            <p>Add search bar here. Consider using another component library like flowbite which has a search bar.</p>
            <FormControl>
                <Button colorScheme='blue' onClick={onSubmitClick}>Search</Button>
            </FormControl>
            {displayCards===true && <h1>Here are the cards.</h1>}
        </>
    );
}