import React from "react";
import { CardActions, CardContent, CardMedia} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const BookListItem = ({book, onAddedToCart}) => {

    const {coverImage, title, price, author} = book;
    return (
        <>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <CardMedia
                    component='img'
                    height='200'
                    width='200'
                    image={coverImage}
                    alt={title}/>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {author}
                </Typography>
                <Typography variant="body1">
                    {`Price: ${price}$`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="large"
                    onClick={() => onAddedToCart()}>
                    <React.Fragment>
                        <Typography variant="body3" color="text.secondary">
                            BUY
                        </Typography>
                        <AddShoppingCartIcon />
                    </React.Fragment>
                </Button>
            </CardActions>
        </>
    )
}

export default BookListItem;
