import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Toggle Drawer
    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    const goto = (route)=>{
        navigate(route);
    }   

    return (
        <div>
            {/* AppBar for the Navbar */}
            <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
                <Toolbar>
                    {/* Logo */}
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        MyApp
                    </Typography>

                    {/* Buttons for larger screens */}
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                        <Button color="inherit" onClick={()=>{goto('/signup')}}>Sign Up</Button>
                        <Button color="inherit" onClick={()=>{goto('/login')}}>Sign In</Button>
                    </Box>

                    {/* Hamburger Menu Icon for smaller screens */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: "block", md: "none" } }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer for smaller screens */}
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {["Home", "About", "Services", "Contact"].map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
};

export default Navigation;
