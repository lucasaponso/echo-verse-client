import styles from '../styles/navbar.module.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

export default function Navbar() {

    return (
        <div className={styles.navbarcontainer}>
            <div className={styles.welcomecontainer}>
                <Heading as='h1' size='2xl' noOfLines={1}>
                    Welcome John
                </Heading>
            </div>
            <div className={styles.logoutcontainer}>
                <Button colorScheme='gray' size='sm'>Logout</Button>
            </div>
        </div>
    );
}