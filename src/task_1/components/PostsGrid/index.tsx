import React, {useState, useEffect, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import { LinearProgress  } from '@material-ui/core';

import Card from "./components/Card";
import {makeStyles} from "@material-ui/core/styles";
import {PostsContext} from "../../contextPosts";
import {PostType} from "../../types";


interface IProps{
    isRemovingConfirmed: boolean,
    closeDilogConfirmation: ()=>void,
    openDilogConfirmation: ()=>void,
    openDilogEditPost:(post: PostType)=>void,
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progress:{
        width: '100%',
        '& > * + *': {
            marginTop: 0,
        },
    }
});
export default function PostsGrid(props: IProps) {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [id, setId] = useState(-1);

    const {posts, fetchPosts, removePost} = useContext(PostsContext)

    useEffect(()=>{
        setIsLoading(true)
        const fetch = () => {
            return fetchPosts().then(()=>{
                    setIsLoading(false)
                })
        };
        fetch();
    }, [])

    useEffect(()=>{
        if(props.isRemovingConfirmed){
            setIsLoading(true)
            removePost(id).then(()=>{
                props.closeDilogConfirmation()
                setIsLoading(false)
            })
        }
    }, [props.isRemovingConfirmed])

    function remove(id: number){
        setId(id)
        props.openDilogConfirmation()
    }

    function edit(post: PostType){
        props.openDilogEditPost(post)
    }

    return (
            <div className={classes.root}>
                {isLoading && <LinearProgress className={classes.progress}/>}
                {!isLoading &&
                <Grid container spacing={2}  justify="space-around">
                    {
                        posts.map((post:any)=>(
                            <Grid key={post.id} item>
                                <Card post={post} removePost={remove} editPost={edit}/>
                            </Grid>
                        ))
                    }
                </Grid>
                }
            </div>
    );
}
