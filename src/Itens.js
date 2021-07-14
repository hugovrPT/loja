import React from 'react';
import { Grid, GridItem} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";
import Imglivros from "./Fotos/livros.jpg";
import ImgImanFatima from "./Fotos/Íman de Fátima.jpg";
import ImgImanP from "./Fotos/Íman com dedicatória com vários parentescos.jpg";
import Terço from "./Fotos/Terço.jpg";
import Panodf from "./Fotos/Pano de Fátima.jpg";
import Img3 from "./Fotos/3.jpg";
import terçoc from "./Fotos/Terço Colorido.jpg";
import Img5 from "./Fotos/5.jpg";
import Img6 from "./Fotos/6.jpg";
import Terçop from "./Fotos/Terço pulseira.jpg";
import DoisAnjos from "./Fotos/Dois Anjos.jpg";
import AnjoC from "./Fotos/Anjo Criança.jpg";
import Img10 from "./Fotos/10.jpg";
import Img11 from "./Fotos/11.jpg";
import Img12 from "./Fotos/12.jpg";
import Img13 from "./Fotos/13.jpg";
import Img14 from "./Fotos/14.jpg";
import Img15 from "./Fotos/15.jpg";
import Img16 from "./Fotos/16.jpg";
import Img17 from "./Fotos/17.jpg";
import terçodc from "./Fotos/Dois terço coloridos.jpg";


const Itens = () => {
    return(
        <Grid marginTop="30" fontSize="16" templateRows="repeat(20, 0.1fr)" templateColumns="repeat(3, 1fr)" marginLeft="20" marginRight="20" paddingTop="2%">
            <GridItem rowStart={1} colStart={1}>Livro "Os Santos Francisco e Jacinta"</GridItem>
            <GridItem rowStart={2} colStart={1}><Image src={Imglivros} boxSize="300px" alt="Livro Os Santos Francisco e Jacinta" /></GridItem>

            <GridItem rowStart={1} colStart={2}>Íman de Fátima</GridItem>
            <GridItem rowStart={2} colStart={2}><Image src={ImgImanFatima} boxSize="300px" alt="Íman de Fátima" /></GridItem>

            <GridItem rowStart={1} colStart={3}>Íman com dedicatória com vários parentescos</GridItem>
            <GridItem rowStart={2} colStart={3}><Image src={ImgImanP} boxSize="300px" alt="Íman com dedicatória com vários parentescos" /></GridItem>
            {/*------------------------------------3----------------------------*/}
            <GridItem rowStart={4} colStart={1}>Terço</GridItem>
            <GridItem rowStart={5} colStart={1}><Image src={Terço} boxSize="300px" alt="Terço" /></GridItem>

            <GridItem rowStart={4} colStart={2}>Pano de Fátima</GridItem>
            <GridItem rowStart={5} colStart={2}><Image src={Panodf} boxSize="300px" alt="Pano de Fátima" /></GridItem>

            <GridItem rowStart={4} colStart={3}>3</GridItem>
            <GridItem rowStart={5} colStart={3}><Image src={Img3} boxSize="300px" alt="3" /></GridItem>
            {/*------------------------------------6----------------------------*/}
            <GridItem rowStart={7} colStart={1}>Terço Colorido</GridItem>
            <GridItem rowStart={8} colStart={1}><Image src={terçoc} boxSize="300px" alt="Terço Colorido" /></GridItem>
            
            <GridItem rowStart={7} colStart={2}>5</GridItem>
            <GridItem rowStart={8} colStart={2}><Image src={Img5} boxSize="300px" alt="5" /></GridItem>

            <GridItem rowStart={7} colStart={3}>Pulseira</GridItem>
            <GridItem rowStart={8} colStart={3}><Image src={Img6} boxSize="300px" alt="6" /></GridItem>
            {/*------------------------------------9----------------------------*/}
            <GridItem rowStart={10} colStart={1}>Terço pulseira</GridItem>
            <GridItem rowStart={11} colStart={1}><Image src={Terçop} boxSize="300px" alt="Terço pulseira" /></GridItem>

            <GridItem rowStart={10} colStart={2}>Dois Anjos</GridItem>
            <GridItem rowStart={11} colStart={2}><Image src={DoisAnjos} boxSize="300px" alt="Dois Anjos" /></GridItem>
            
            <GridItem rowStart={10} colStart={3}>Anjo Criança</GridItem>
            <GridItem rowStart={11} colStart={3}><Image src={AnjoC} boxSize="300px" alt="Anjo Criança" /></GridItem>
            {/*------------------------------------12----------------------------*/}
            <GridItem rowStart={13} colStart={1}>Santa maria no globo de vidro</GridItem>
            <GridItem rowStart={14} colStart={1}><Image src={Img10} boxSize="300px" alt="10" /></GridItem>

            <GridItem rowStart={13} colStart={2}>11</GridItem>
            <GridItem rowStart={14} colStart={2}><Image src={Img11} boxSize="300px" alt="11" /></GridItem>

            <GridItem rowStart={13} colStart={3}>12</GridItem>
            <GridItem rowStart={14} colStart={3}><Image src={Img12} boxSize="300px" alt="12" /></GridItem>
            {/*------------------------------------15----------------------------*/}
            <GridItem rowStart={16} colStart={1}>13</GridItem>
            <GridItem rowStart={17} colStart={1}><Image src={Img13} boxSize="300px" alt="13" /></GridItem>

            <GridItem rowStart={16} colStart={2}>14</GridItem>
            <GridItem rowStart={17} colStart={2}><Image src={Img14} boxSize="300px" alt="14" /></GridItem>

            <GridItem rowStart={16} colStart={3}>Santa Maria</GridItem>
            <GridItem rowStart={17} colStart={3}><Image src={Img15} boxSize="300px" alt="15" /></GridItem>
            {/*------------------------------------18----------------------------*/}
            <GridItem rowStart={19} colStart={1}>Santa Maria</GridItem>
            <GridItem rowStart={20} colStart={1}><Image src={Img16} boxSize="300px" alt="16" /></GridItem>

            <GridItem rowStart={19} colStart={2}>17</GridItem>
            <GridItem rowStart={20} colStart={2}><Image src={Img17} boxSize="300px" alt="17" /></GridItem>

            <GridItem rowStart={19} colStart={3}>Dois terço coloridos</GridItem>
            <GridItem rowStart={20} colStart={3}><Image src={terçodc} boxSize="300px" alt="Dois terço coloridos" /></GridItem>
        </Grid>
    )
}

export default Itens;