import { getVideosPage } from "@/utils/contentful";
import VideosComponent from "@/components/VideosComponent";

export default async function Videos(){
    const videos = await getVideosPage();
    console.log(videos.items[0].fields.videos);

    return(
        <div className="px-[1rem] md:px-[3.75rem] pb-[1.5rem] md:pb-[2.5rem]">
            <span className="block mb-[0.6rem] relative overflow-hidden">
                <div className="absolute block top-0 left-0 w-full h-full bg-white animate-slide"
                    style={{ animationDuration: `7s!important` }}
                ></div>
                    <b>VIDEOS</b>
                </span>
            <VideosComponent videos={videos.items[0].fields.videos}/>
        </div>
    )
}
