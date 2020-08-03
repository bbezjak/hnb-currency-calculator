import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { UserDataDialog } from "./UserDataDialog";

export const Navbar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div>
      <UserDataDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit" align="center">
            HNB currencies
            <span>
              <Button onClick={() => setDialogOpen(!dialogOpen)}>
                <AccountCircleIcon />
              </Button>
              <Button
                onClick={() => {
                  debugger;
                  auth.signOut();
                }}
              >
                Sign Out
              </Button>
            </span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
