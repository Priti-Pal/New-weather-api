import {useState} from 'react'
import{Box,styled} from '@mui/material';
import Imageset from '../assets/images/back_g.jpg';
import Bgset from '../assets/images/asma.jpg';
import Form from '../Component/Form'
import Information from '../Component/Informaton';
const Bg =styled(Box)({
    backgroundImage:`url(${Bgset})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    width:'100hw',
    height:'100vh',
    textAlign:'center',
    margin:0,

  
}) 
const Container =styled(Box)({
    backgroundImage:`url(${Imageset})`,
    backgroundRepeat:'no-repeat',
    width:'27%' ,
    height:'80%',
    backgroundSize:'cover',
     borderRadius:'0 20px 20px 0',

})
const Image = styled(Box)({
    backgroundImage:`url(${Imageset})`,
    backgroundRepeat:'no-repeat',
    width:'27%' ,
    height:'80%',
    backgroundSize:'cover',
     borderRadius:'20px 0 0 20px',
     justifyContent:'center',
     textAlign:'center',
     opacity:'0.8'
})

const Component =styled(Box)({
    // backgroundColor:'black',
    height:'100vh',
    display:'flex',
    alignItems:'center',
  marginTop:'0 ',
  marginBottom:'10%',
  marginLeft:'10%',
    width:'80%'
   
})

const Weather = ()=>{
    const [result,setResult]= useState({})
    return(
        <Bg>
        {/* <h1>Weather App</h1> */}
        <Component>
        <Image>
            <h1>Weather Now</h1>
            <h2>There's no such thing as good weather,or
            bad weather and your attitude towards it.</h2>
        </Image>
         <Container style ={{ width:'73%', height:'80%'}}>
            <Form setResult = {setResult}/>
            <Information result={result}/>
         </Container>
            </Component>
            </Bg>
    )
}
export default Weather;