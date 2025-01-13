import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import "./buttons.styles.css";

const AuthButton = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOut = () => {
        setCurrentUser(null);
    };

    return (
        <>
            {currentUser ? (
                <Link to="/login" className="auth-button-link">
                    <Button
                        variant="contained"
                        onClick={signOut}
                        color="primary"
                        className="auth-button"
                    >
                        Sign Out
                    </Button>
                </Link>
            ) : (
                <Link to="/login" className="auth-button-link">
                    <Button variant="contained" color="primary" className="auth-button">
                        Sign In
                    </Button>
                </Link>
            )}
        </>
    );
};

export default AuthButton;
