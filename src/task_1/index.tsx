import React from 'react';
import PostsGrid from './components/PostsGrid'
import FABAdd from "./components/FABAdd";
import DialogAddPost from './components/DialogAddPost'
import DialogEditPost from './components/DialogEditPost'
import {PostsProvider} from './contextPosts'
import DialogConfirmation from "./components/DialogConfiramtion";
import {PostType} from "./types";

export default function BlogPost() {
    const [openDialogAddPost, setOpenDialogAddPost] = React.useState(false);
    const [postToEdit, setPostToEdit] = React.useState({id: -1, title: "", body:""});
    const [openDialogConfirmation, setOpenDialogConfirmation] = React.useState(false);
    const [openDialogEditPost, setOpenDialogEditPost] = React.useState(false);
    const [isRemovingConfirmed, setIsRemovingConfirmed] = React.useState(false);

    const handleOpenDialogAddPost = () => {
        setOpenDialogAddPost(true);
    };
    const handleCloseDialogAddPost = () => {
        setOpenDialogAddPost(false);
    };
    const handleOpenDialogConfirmation = () => {
        setOpenDialogConfirmation(true);
    };
    const handleCloseDialogConfirmation = () => {
        setOpenDialogConfirmation(false);
    };
    const handleOpenDialogEditPost = (post: PostType) => {
        setPostToEdit(post)
        setOpenDialogEditPost(true);
    };
    const handleCloseDialogEditPost = () => {
        setOpenDialogEditPost(false);
    };
    const handleIsRemovingConfirmed = () => {
        setIsRemovingConfirmed(true);
    };


    return (
        <PostsProvider>
                <FABAdd open={handleOpenDialogAddPost}/>
                <PostsGrid openDilogEditPost={handleOpenDialogEditPost} openDilogConfirmation={handleOpenDialogConfirmation} closeDilogConfirmation={handleCloseDialogConfirmation} isRemovingConfirmed={isRemovingConfirmed}/>
                <DialogAddPost shouldOpen={openDialogAddPost} close={handleCloseDialogAddPost}/>
                <DialogEditPost post={postToEdit} shouldOpen={openDialogEditPost} close={handleCloseDialogEditPost}/>
                <DialogConfirmation shouldOpen={openDialogConfirmation} close={handleCloseDialogConfirmation} confirm={handleIsRemovingConfirmed}/>
        </PostsProvider>
    );
}
