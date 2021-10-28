import { Container, Text } from '@chakra-ui/layout';
import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return ( 
        <Container class={styles.container} >
            <Text textAlign="center">this is header</Text>
        </Container>
     );
}
 
export default Header;