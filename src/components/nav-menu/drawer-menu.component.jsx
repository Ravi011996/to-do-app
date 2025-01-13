import React from "react";
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import "./drawer-menu.styles.css";

const DrawerMenu = ({ isDrawerOpen, toggleDrawer }) => {
    return (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
            <Box
                className="drawer-box"
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List className="drawer-list">
                    {["Home", "About", "Services", "Contact"].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText
                                    primary={text}
                                    className="drawer-list-item"
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default DrawerMenu;
