import { getPhotosPage } from "@/utils/contentful"
import Gallery from "@/components/Gallery";

export default async function Photos(){
    const data = await getPhotosPage();
    console.log(data.items[0].fields);
    return(
        <div className="px-[1rem] md:px-[3.75rem] pb-[1.5rem] md:pb-[2.5rem] opacity-0 animate-fadeIn">

               
                <span className="block mb-[0.6rem] relative overflow-hidden">
                <div className="absolute block top-0 left-0 w-full h-full bg-white animate-slide"
                    style={{ animationDuration: `7s!important` }}
                ></div>
                    <b>PHOTOS</b>
                </span>
            
            <Gallery images={data.items[0].fields.photos}/>
        </div>
    )
}