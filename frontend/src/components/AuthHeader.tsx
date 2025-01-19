import { Link } from "react-router-dom"

export const AuthHeader = ({ type }: { type: "signup" | "signin" }) => {
    return (
        <div className="px-10">
            <div className="text-3xl font-extrabold">
                Create an account
            </div>
            <div className="text-slate-500 flex justify-center">
                {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                    {type === "signin" ? "Sign Up" : "Sign in"}
                </Link>
            </div>
        </div>
    )
}