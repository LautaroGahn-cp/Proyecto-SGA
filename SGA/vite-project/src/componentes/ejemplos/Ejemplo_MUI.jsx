import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function Ejemplo_MUI(){
    return(
        <>
        <Stack spacing={2} direction="column" sx={{mt:2, mb:2}}>
            <Button variant="contained" sx={{bgcolor:"#6fbf73"}}>Contained</Button>
            <Button variant="contained" disabled> Disabled </Button>
            <Button variant="contained" href="#contained-buttons" sx={{bgcolor:"#4aedc4"}}> Link </Button>
        </Stack>
            <IconButton aria-label="delete"> <DeleteIcon /> </IconButton>
            <IconButton aria-label="delete" disabled color="primary"> <DeleteIcon /> </IconButton>
            <IconButton color="secondary" aria-label="add an alarm" sx={{bgcolor:"#b2102f"}}> <AlarmIcon /> </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart" sx={{bgcolor:"#76ff03"}}> <AddShoppingCartIcon /> </IconButton>
        </>
    );
}

