import { Circle } from "./BlogCard"

export const AllPostSkeleton = () => {
    return <div role="status" className="animate-pulse">
        <div className=" border-b-2 p-4 border-slate-200 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="h-4 bg-gray-200 rounded-full  w-48 mb-4"></div>

                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>

                <div className="text-xs flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            </div>
            <div className=" text-slate-500 text-sm font-thin pt-4">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            </div>
        </div>
    </div>
}