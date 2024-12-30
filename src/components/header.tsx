import {Stack, Button } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";
const Header = () =>{
    return(
        <Stack direction={'row'} sx ={{
            position : 'fixed',
            zIndex : 15,
            top : 0,
            padding : '1rem 2rem',
            marginTop : '1rem',
            backgroundColor : 'black',
            width : '80%',
            alignItems : 'center',
            display : 'flex',
            justifyContent : 'space-between',
            borderRadius : '10rem'

        }}>
            <Stack direction={'row'} textAlign={'center'} justifyContent={'space-between'} spacing={0.8}>
            <img style= {{height : '1.3rem'}} src="/header_logo.svg" />
           
            </Stack>

            
            <Button variant="contained" startIcon = {<ShoppingBag sx = {{height : '1rem'}} />} sx = {{fontSize : '0.7rem', fontWeight : 600, paddingX : '1rem', paddingY : '0.3rem', borderRadius : '1rem', textTransform : 'none', color : 'black', backgroundColor : 'white'}}>Buy</Button>
           

        </Stack>
    )
}

export default Header;