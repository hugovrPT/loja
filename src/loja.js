import React from 'react';
import { Box } from "@chakra-ui/react";
import Itens from './Itens';
import Header from './Header';
import Footer from './footer';

const Loja = () => {
    return(
        <div >
            <center>
                <Box bg ="#f7f7f7">
                    {/* Header */}
                    <Header/>

                    {/* Grid com os produtos */}
                    <Itens/>

                    {/* Footer */}
                    <Footer/>
                </Box>
            </center>
        </div>
    );
};
export default Loja;