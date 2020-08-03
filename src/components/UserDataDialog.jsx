import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import { DialogContent, DialogContentText } from "@material-ui/core";
import { UserContext } from "../providers/UserProvider";

export const UserDataDialog = (props) => {
  const { open, onClose } = props;

  const user = useContext(UserContext);

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={open}
      onClose={onClose}
    >
      <DialogTitle id="simple-dialog-title">Podatci o korisniku</DialogTitle>
      {user && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              First name: {user.firstName}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
              Last name: {user.lastName}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
              Email: {user.email}
          </DialogContentText>
        </DialogContent>
      )}
    </Dialog>
  );
}

UserDataDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
