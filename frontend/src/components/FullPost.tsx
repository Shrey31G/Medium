import { Post } from "../hooks"
import { Avatar } from "./BlogCard"
import { PostSkeleton } from "../components/PostSkeleton";


export const Fullpost = ({ post,loading }: { post?: Post; loading: Boolean} ) => {
    if(loading || !post) {
        return <div>
            <PostSkeleton />
        </div>
    }
    return <div>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full max-h-screen-xl pt-12">
                <div className=" col-span-8 ">
                    <div className="text-4xl font-extrabold">
                        {post.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 14th January
                    </div>
                    <div className="pt-4">
                        {post.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                    Author
                    </div>
                    <div className="flex ">
                        <div className="pr-2 flex flex-col justify-center">
                        <Avatar  name={post.author.name || "Anonymous"} size="big" />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {post.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random Catch phrase about author ability to grab te user's attention
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
}