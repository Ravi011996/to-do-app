import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "../components/nav-menu/drawer-menu.component";
import AuthButton from "../components/buttons/auth-button.component";

const Navigation = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        To Do App
                    </Typography>

                    {/* Sign In / Sign Out Button */}
                    <AuthButton />

                    {/* Menu Icon Button */}
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

            {/* Drawer Menu */}
            <DrawerMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        </div>
    );
};

export default Navigation;
