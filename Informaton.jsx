import { Box, styled,Typography } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material'
const Error = styled(Typography)({
  color:'yellow',
  margin:50,
  padding: 20
})
const Row = styled(Typography)({
    color:'#fff',
    padding: 10,
  fontSize:20,
  letterSpacing:2,
   '& > svg': {
    marginRight:10
   }
})

const Information = ({ result }) => { 
        return(
        result && Object.keys(result).length > 0 ?
        <Box style={{ margin: '30px 60px' }}>
          <Row><LocationOn />Location: {result.name}, {result.sys.country}</Row>
            <Row><SettingsBrightness />Temperature: {result.main.temp}</Row>
            <Row><Opacity />Humidity: {result.main.humidity}</Row>
            <Row><Brightness5 />Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6 />Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze />Humidity: {result.weather[0].main}</Row>
            <Row><Cloud />Clouds: {result.clouds.all}%</Row>
        </Box>
        : <Error>Please enter the city or country to check weather</Error>
       )
      }
      export default Information