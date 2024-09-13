import { getVideosPage } from "@/utils/contentful";
import VideosComponent from "@/components/VideosComponent";

export default async function Videos(){
    const videos = await getVideosPage();
    console.log(videos.items[0].fields.videos);

    return(
        <div className="px-[1rem] md:px-[3.75rem] pb-[2.5rem]">
            <VideosComponent videos={videos.items[0].fields.videos}/>
        </div>
    )
}
