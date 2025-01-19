import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Appbar = () => {
    const [isDropdownopen, setIsDropdownopen] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin")
    }

    const handlePublishClick = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/publish")
        } else {
            toast.warn("You need to sign in first!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored"
            });
            setTimeout(() => {
                navigate("/signin")
            }, 1500);
        }
    }

    return <div>
        <div className="border-b flex justify-between px-10 py-4">
            <div className="flex justify-center font-semibold text-lg ">
                <Link to={"/allposts"} className="flex flex-col justify-center cursor-pointer">
                    Medium
                </Link>
            </div>
            <div>
                <button
                    type="button"
                    onClick={handlePublishClick}
                    className="mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Publish</button>
                <button onClick={() => {
                    setIsDropdownopen(!isDropdownopen)
                }} className="focus:outline-none">
                    <Avatar name="Shrey" size={"big"} />
                </button>

                {isDropdownopen && (
                    <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
        <ToastContainer />
    </div>
}