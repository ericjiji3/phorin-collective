import { getPhotosPage } from "@/utils/contentful"
import Gallery from "@/components/Gallery";

export default async function Photos(){
    const data = await getPhotosPage();
    console.log(data.items[0].fields);
    return(
        <div className="px-[3.75rem] pb-[2.5rem]">
            <span className="block mb-[0.6rem]"><b>ARTICLES</b></span>
            <Gallery images={data.items[0].fields.photos}/>
        </div>
    )
}