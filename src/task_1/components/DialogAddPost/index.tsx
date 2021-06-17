import React, {useContext} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm } from "react-hook-form";
import Form from "./components/form";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import {PostsContext} from "../../contextPosts";
import {PostType} from "../../types";

interface IProps{
    close: ()=>void,
    shouldOpen: boolean,
}

export default function DialogAddPost(props: IProps) {
    const {addPost} = useContext(PostsContext)
    const { control,formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data: PostType) => {
        addPost({title: data.title, body: data.body})
        props.close()
    }
    const submit = handleSubmit(onSubmit)
    return (
        <div>
            <Dialog open={props.shouldOpen} onClose={props.close} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Post</DialogTitle>
                <DialogContent>
                    <Form submit={submit} control={control} errors={errors}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submit} color="primary" type="submit">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}