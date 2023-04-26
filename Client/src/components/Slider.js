
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from "../data"
import { mobile } from '../responsive';

//if child is position:absolute parent should be position:relative
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
    
    `;
    const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left:${props=>props.direction==="left"&& "10px"};
    right:${props=>props.direction==="right"&& "10px"};
    bottom: 0;
    margin: auto;
    cursor:pointer;
    opacity: 0.5;
    z-index: 2;
    `;

    const Wrapper = styled.div`
      height: 100%;
      display:flex;
      transition: all 1.5s ease;
      transform: translateX(${props=>props.slideIndex * -100}vw);
    `
    //animation added by using transition:all 1.5sec ease;
    const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    
    `;
    const ImageContainer = styled.div`
    flex:1;
    height: 100%;
    `;

    const Image = styled.img`
    height: 80%;
    

    `;

    const InfoContainer = styled.div`
    padding: 50px;
    flex:1;
    `;

    const Title = styled.h1`
    font-size: 70px;
    `;
    const Desc = styled.p`
      margin: 50px 0px;
      font-weight: 500;
      font-size: 20px;
      letter-spacing: 3px;
    `;
    //top bottom,left right
    const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor:pointer;
    `;
    
    const Slider = () => {
      //gonna create useState hook to decide slide index
      const[slideIndex,setSlideIndex] = useState(0);


    const handleclick =(direction)=>{
     if(direction==="left"){
       //if it's left arrow 
       setSlideIndex(slideIndex>0?slideIndex-1:2)
     }
     else{
      //if direction is right
      setSlideIndex(slideIndex <2?slideIndex+1:0)
     }
    }
   
  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleclick("left")}>
        <ArrowLeftOutlined />
        </Arrow >
        <Wrapper slideIndex={slideIndex}>
             {sliderItems.map(item=>(
            <Slide bg={item.bg} key={item.id}>
         <ImageContainer>
            <Image src={item.img} />
         </ImageContainer>
         <InfoContainer>
           <Title>{item.title}</Title>
           <Desc>{item.desc}</Desc>
           <Button>SHOP NOW</Button>
         </InfoContainer>
         </Slide>
         ))}
        </Wrapper>
        <Arrow direction='right' onClick={()=>handleclick("right")}>
        <ArrowRightOutlined  />
        </Arrow>
    </Container>
  )
}

export default Slider
