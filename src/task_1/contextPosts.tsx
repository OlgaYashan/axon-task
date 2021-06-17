import * as React from 'react'
import {get, post, put, remove} from './CRUD'
import {PostType} from './types'

interface IProps{
    children: React.ReactNode
}
interface IState{
    posts: PostType[],
    fetchPosts?: any,
    addPost?: any,
    removePost?:any,
    updatePost?:any
}

const initialState: IState = {posts: []};

let PostsContext = React.createContext<IState>(initialState)


function PostsProvider({children}: IProps) {
    const [posts, setPosts] = React.useState<PostType[]>([])

    const fetchPosts = async () => {
        let newPosts = await get();
        return setPosts([...newPosts])
    }

    const addPost = async (newPost:PostType) => {
        await post(newPost);
        let newPosts = await get();
        return setPosts([...newPosts])
    }

    const removePost = async (id: number ) => {
        await remove(id);
        let newPosts = await get();
        return setPosts([...newPosts])
    }

    const updatePost = async (newPost: PostType) => {
        await put({id:newPost.id, title: newPost.title, body: newPost.body });
        let newPosts = await get();
        return setPosts([...newPosts])
    }

    return <PostsContext.Provider value={{posts, fetchPosts, addPost, removePost, updatePost}}>{children}</PostsContext.Provider>;
}



export {PostsProvider, PostsContext}