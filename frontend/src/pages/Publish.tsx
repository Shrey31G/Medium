import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div >
        <Appbar />
        <div className="flex justify-center w-full pt-8">
            <div className="max-w-screen-sm w-full lg:max-w-screen-md">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Title" />
                <TextEditor onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/post`, {
                        title,
                        content: description
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/post/${response.data.id}`)
                }} type="submit" className="mt-3 inline-flex items-center py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}

function TextEditor({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
        <div className="mt-2">
            <div className="w-full my-2">
                <div className="flex items-center justify-between border ">
                    <div className=" bg-white rounded-b-lg w-full cursor-text ">
                        <label className="sr-only">Publish post</label>
                        <textarea onChange={onChange} id="editor" rows={8} className="mt-2 focus:outline-none block w-full text-sm text-gray-800 bg-white border-0 focus:ring-0 pl-2" placeholder="Write an article..." required />
                    </div>
                </div>

            </div>
        </div>
    )
}