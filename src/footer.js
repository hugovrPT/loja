import React from 'react';
import { Grid, GridItem} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";
import {Text} from "@chakra-ui/react";
import Imgmuseu from "./Fotos/Museu.jpeg";

const Footer = () => {
    return(
        <Box>
            <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(3, 1fr)" gap={4} marginLeft="150" marginTop="75">
                <GridItem rowSpan={1} colSpan={1} ><Image src={Imgmuseu} boxSize="160px" alt="Segun Adebayo" /></GridItem>
                <GridItem rowStart={1} colStart={2} color="#2C5282" textAlign="left" marginLeft="15%" marginTop="-15"><Text fontSize="25px">Contactos</Text><br/><Text fontSize="15" marginTop="-30">info@omilagredefatima.com<br/>+351 249 406 881<br/><br/>Avenida Dom José Alves<br/>Correia da Silva nº123 (piso -1)<br/>Fátima<br/></Text></GridItem>
                {/* <GridItem rowStart={1} colStart={3} color="#ECC94B" fontSize="20px" textAlign="left" w="70%" marginTop="10%" marginLeft="-30">Siga-nos<br/><Image marginTop="15" src={Imgmuseu} boxSize="25px" alt="Instagram" /><Image src={Imgmuseu} marginLeft="10" boxSize="25px" alt="Facebook" /></GridItem> */}
            </Grid>
        </Box>
    );
};

export default Footer;