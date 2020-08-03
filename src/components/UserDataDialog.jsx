import React, { useContext } from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
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
