import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { usePosts } from "../hooks"
// import { Spinner } from "../components/Spinner";
import { AllPostSkeleton } from "../components/AllPostSkeleton";

export const Posts = () => {
    const { loading, posts } = usePosts();

    // if (loading) {
    //     return (
    //         <div>
    //             <Appbar />
    //             <div className="flex h-screen flex-col justify-center">
    //                 <div className="flex justify-center">
    //                     <Spinner />
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
    return (
        <div >
            <Appbar />
            <div className="flex justify-center">
                <div className=" w-full max-w-4xl px-4">
                    {loading ? (
                        <>
                            <AllPostSkeleton />
                            <AllPostSkeleton />
                            <AllPostSkeleton />
                            <AllPostSkeleton />
                        </>
                    ) : (
                        posts.map(post => <BlogCard
                            id={post.id}
                            authorName={post.author.name || "Anonymous"}
                            title={post.title}
                            content={post.content}
                            publishedDate="13th January 2024" />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}