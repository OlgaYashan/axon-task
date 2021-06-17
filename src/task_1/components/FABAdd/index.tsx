import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

interface IProps{
    open: ()=>void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'fixed',
            bottom: '2vh',
            margin:'0 auto',
            zIndex: 289
        },

    }),
);

export default function FABAdd(props:IProps) {
    const classes = useStyles();
    return (
            <Fab className={classes.root} color="primary" aria-label="add" onClick={props.open}>
                <AddIcon/>
            </Fab>
    );
}