import{Box, InputBase,Button, styled} from '@mui/material';
import {useState} from 'react'
import { getWeather } from '../Services/Api';
const Container = styled(Box)({
 backgroundColor:' #37475a',
 width:'70%',
 padding:'10px'
})

const Input = styled(InputBase)({
    color:'#fff',
    marginRight:'20px',
    fontSize:'18'
})

const GetButton = styled(Button)({
    background:'#e67e22'
})
const Form = ({setResult}) => {
    const [data, setData] = useState({city:'' , country:'' })

    const handleChange = (e) => {
     setData({ ...data,[e.target.name]: e.target.value});
    }
   const getweatherInfo = async() => {
     let response = await getWeather(data.city,data.country); 
     setResult(response);
   }

  return (
   <Container>
<Input 
    placeholder="city"
    onChange={(e)=> handleChange(e)}
    name="city"
/>
<Input
    placeholder="country"
    onChange={(e)=> handleChange(e)}
    name="country"
/>
  <GetButton 
  variant='contained'
  onClick = {() => getweatherInfo()}

>Get Weather</GetButton>
   </Container>
  )
}

export default Form
