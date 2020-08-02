import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import { auth } from '../firebase'

export const Navbar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" color="inherit" align="center">
                HNB currencies
                </Typography>
                <Button onClick = {auth.signOut()}>
                    SignOut
                </Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}