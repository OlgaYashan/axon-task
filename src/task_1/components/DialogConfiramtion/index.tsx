import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";

interface IProps{
    shouldOpen: boolean,
    close: ()=>void,
    confirm:()=>void
}

export default function DialogConfirmation(props: IProps) {
    return (
        <div>
            <Dialog open={props.shouldOpen} onClose={props.close} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                      Are you sure?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.confirm} color="primary" type="submit">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}