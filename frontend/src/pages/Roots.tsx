import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { usePosts } from "../hooks"
// import { Spinner } from "../components/Spinner";
import { AllPostSkeleton } from "../components/AllPostSkeleton";

export const Roots = () => {
    const navigate = useNavigate();
    const { loading, posts } = usePosts();
    const isAuthenticated = !!localStorage.getItem("token");
    return (
        <div>
            <Appbar />

            {!isAuthenticated && (
                <div className="flex justify-center m-4">
                    <button onClick={() => {
                    navigate(`/signup`)
                }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signup</button>


                <button onClick={() => {
                    navigate(`/signin`)
                }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signin</button>
                </div>
            )}
            
            <div >
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
        </div>
    )
}