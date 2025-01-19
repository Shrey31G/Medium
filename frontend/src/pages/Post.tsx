import { Appbar } from "../components/Appbar"
import { Fullpost } from "../components/FullPost";
import { usePost } from "../hooks"
import { useParams } from "react-router-dom";

export const Post = () => {
    const { id } = useParams();
    const { loading,post } = usePost({
        id: id || ""
    })

    return (
        <div>
            <Appbar />
            <div>
                <Fullpost post={post} loading={loading} />
            </div>
        </div>
    )
}