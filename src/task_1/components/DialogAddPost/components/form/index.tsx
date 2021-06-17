import React from "react";
import {Controller} from "react-hook-form";
import TextField from "@material-ui/core/TextField";

interface IProps{
    submit: (data: any)=>void,
    errors: {
        title?: boolean,
        body?:boolean
    },
    control: any
}

export default function Form(props: IProps){
    return(
        <form onSubmit={props.submit}>
            <Controller
                name="title"
                control={props.control}
                defaultValue=""
                rules={{ required: true, maxLength: 100 }}
                render={({ field }) =>
                    <>
                        <TextField
                            {...field}
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Title"
                            type="text"
                            fullWidth
                        />
                        {props.errors.title && "Body is required"}
                    </>
                }
            />
            <Controller
                name="body"
                control={props.control}
                defaultValue=""
                rules={{ required: true, maxLength: 1000 }}
                render={({ field }) => <>
                    <TextField
                        {...field}
                        autoFocus
                        margin="dense"
                        id="body"
                        label="Body"
                        type="text"
                        fullWidth
                    />
                    {props.errors.body && "Body is required"}

                </> }
            />
    </form>
    )
}

