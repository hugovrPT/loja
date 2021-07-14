import React from 'react';
import { Grid, GridItem} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
} from "@chakra-ui/react";
import Imgmuseu from "./Fotos/Museu.jpeg";

const Header = () => {
    return(
        <Box width="87%" marginTop="-14" >
            <Box color="black">
                <Breadcrumb separator="" textAlign="right" paddingRight="50">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">PT</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">EN</BreadcrumbLink> 
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">ES</BreadcrumbLink> 
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">IT</BreadcrumbLink> 
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">FR</BreadcrumbLink> 
                    </BreadcrumbItem>
                </Breadcrumb>

                <Grid>

                    <GridItem colSpan={1} >
                        <Image marginTop="-20" src={Imgmuseu} boxSize="125px"  alt="Museu"></Image>
                    </GridItem>

                    <GridItem colStart={3} colEnd={3} textAlign="right" fontSize="17" > 
                        <Breadcrumb separator="" textAlign="right" paddingRight="50">
                            <BreadcrumbItem>
                                <BreadcrumbLink>O Museu</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink>Loja</BreadcrumbLink> 
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink>Media</BreadcrumbLink> 
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink>Localização</BreadcrumbLink> 
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink>Contactos</BreadcrumbLink> 
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}

export default Header;