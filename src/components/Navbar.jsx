import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, Box } from "@material-ui/core";
import { auth } from "../firebase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { UserDataDialog } from "./UserDataDialog";

export const Navbar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div>
      <UserDataDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
      <AppBar position="static">
        <Toolbar style={{display: "flex", "justify-content": "space-between"}}>
        <Typography variant="h5" color="inherit" align="justify">
              HNB tečaj
            </Typography>
            <Typography variant="h5" color="inherit" align="justify">
              <span style={{ align: "right" }}>
                <Button
                  onClick={() => setDialogOpen(!dialogOpen)}
                  style={{ color: "#ffffff" }}
                >
                  <AccountCircleIcon />
                </Button>
                <Button
                  onClick={() => {
                    debugger;
                    auth.signOut();
                  }}
                >
                  <span style={{ color: "#ffffff" }}>Sign Out</span>
                </Button>
              </span>
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
