import { SignupInput } from "@shrey_gangwar/medium-common"
import { ChangeEvent, useState } from "react"
import { AuthHeader } from "./AuthHeader"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${ type === "signup" ? "signup" : "signin" }`, postInputs)
            console.log(response.data);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/allposts")
        } catch (error) {
            //alert the user that request failed
            alert("Error while signing up")
        }
    }

    return (
        <div className="flex justify-center flex-col h-screen">
            <div className="flex justify-center">
                <div>
                    <AuthHeader type={type} />
                    <div>
                        {type === "signup" ? <LabelledInput label="Name" placeholder="Your Name" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                name: e.target.value,
                            }))
                        }} /> : null}
                        <LabelledInput label="Email" placeholder="your@gmail.com..." onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                email: e.target.value
                            }))
                        }} /> 
                        <LabelledInput label="Password" type={"password"} placeholder="Write your password" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />
                        <button onClick={sendRequest} type="button" className="text-white mt-8 w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Signup" : "Signin"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div className="my-5">
            <label className="block mb-2 text-sm text-black text-extrabold font-semibold">{label}</label>
            <input 
            onChange={onChange} 
            type={type || "text"} 
            id="first_name" 
            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} 
            required />
        </div>
    )
}