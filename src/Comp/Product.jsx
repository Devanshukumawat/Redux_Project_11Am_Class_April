
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Checkbox } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { WishlistItem } from '../features/wishlistslice';
import { AddToCart } from '../features/Cartslice';


export default function Product(props) {


    const {data} = props

    const dispatch = useDispatch()

    

  return (
    <Card sx={{ maxWidth: 345 , position:"relative"  }} >
    <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite color='error'/>} onClick={()=>{dispatch(WishlistItem(data))}}></Checkbox>
    <Link to={`/singleproduct/${data.id}`}>
      <CardMedia
        sx={{ height: 140 , backgroundSize:"contain" }}
        image={data.image}
        title="green iguana"
      />
    </Link>  
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Box sx={{
            height:"100px",
            overflow:"hidden",
            marginBottom:"30px"
        }}>
        {
            data.description
          }
        </Box>
          
        </Typography>
      </CardContent>
      <CardActions sx={{
        position:"absolute",
        bottom:"0px"
      }}>
        <Button size="small" variant='contained' color='success' endIcon={<AddShoppingCartIcon/>} onClick={()=>{dispatch(AddToCart(data))}}>Add To Cart</Button>
        <Link to={`/singleproduct/${data.id}`}><Button size="small" variant='contained' color='warning' endIcon={<InfoIcon/>}>More Info</Button></Link>
      </CardActions>
    </Card>
  );
}
