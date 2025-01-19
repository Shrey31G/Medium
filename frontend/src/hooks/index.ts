import axios from "axios";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";

export interface Post {
    "content": string,
    "title": string,
    "id": string,
    "author": {
        "name": string
    }
}

export const usePost = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<Post | undefined>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/post/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setPost(response.data.post);
                setLoading(false)
            })
    }, [id])

    return {
        loading,
        post
    }
}

export const usePosts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setposts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/post/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setposts(response.data.postAll);
                setLoading(false)
            })
    }, [])

    return {
        loading,
        posts
    }
}