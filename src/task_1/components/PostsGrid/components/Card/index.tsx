import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
type PostType = {
    id: number,
    title: string,
    body: string
}

interface IProps{
    post: PostType;
    removePost: (id:number)=>void
    editPost: (post: PostType)=>void
}
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        position: 'relative',

    },
    media: {
        height: 140,
    },
    action:{
        position: 'absolute',
        zIndex: 300,
        right: 0,
        top:0,
    }
});

export default function MediaCard(props: IProps) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div className={classes.action}>
                <IconButton color="secondary" aria-label="delete" onClick={()=>props.removePost(props.post.id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton color="primary" aria-label="edit" onClick={()=>props.editPost(props.post)}>
                    <EditIcon />
                </IconButton>
            </div>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://picsum.photos/200/300?random=${props.post.id}`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.post.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}