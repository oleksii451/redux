import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom';
import BasicModal from "../modal/modal";

export default function Header() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ flexGrow: 1 }}>

            <BasicModal open={open} handleClose={handleClose}/>

            <AppBar position="static">
                <Toolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Boring BookShop
                    </Typography>
                            <Link component={RouterLink} to='/' color="inherit">
                                {'HomePage'}
                            </Link>
                    <Button color="inherit">
                        <Link component={RouterLink} to='/cart' color="inherit">
                            {'CART'}
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
