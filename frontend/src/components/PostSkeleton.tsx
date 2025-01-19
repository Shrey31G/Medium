

export const PostSkeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full  pt-12">
                    {/* Left Column (Post Content) */}
                    <div className="col-span-8">
                        {/* Title Skeleton */}
                        <div className="h-5 bg-gray-200 rounded-full w-3/4 mb-6"></div>
                        
                        {/* Date Skeleton */}
                        <div className="h-4 bg-gray-200 rounded-full w-1/4 mb-4"></div>
                        
                        {/* Content Skeleton */}
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                            <div className="h-4 bg-gray-200 rounded-full w-4/6"></div>

                        </div>
                    </div>

                    {/* Right Column (Author Info) */}
                    <div className="col-span-4">
                        {/* Author Heading Skeleton */}
                        <div className="h-6 bg-gray-200 rounded-full w-1/4 mb-6"></div>
                        
                        {/* Author Info Skeleton */}
                        <div className="flex">
                            {/* Avatar Skeleton */}
                            <div className="pr-3">
                                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                            </div>
                            
                            {/* Author Name and Bio Skeleton */}
                            <div className="flex-1">
                                <div className="h-5 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                                <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded-full w-4/6 mt-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};