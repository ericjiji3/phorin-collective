import { getBlogEntries } from "@/utils/contentful";
import Image from "next/image";
import ArticleComponent from "@/components/ArticleComponent";

export default async function Articles(){
    const data = await getBlogEntries();
    const blogEntries = JSON.parse(JSON.stringify(data))
    console.log("Home -> blogEntries", blogEntries.items[0].fields.articleImage.fields.file.details)
    
    return(
        <div className="absolute top-0 px-[1rem] md:px-[3.75rem] pt-[5.5rem] md:pt-[6.88rem] pb-[1.5rem] md:pb-[2.5rem] w-full h-full flex flex-col opacity-0 animate-fadeIn">
            {/* <span className="mb-[0.6rem]"><b>ARTICLES</b></span> */}
            <span className="block mb-[0.6rem] relative overflow-hidden">
                <div className="absolute block top-0 left-0 w-full h-full bg-white animate-slide"
                    style={{ animationDuration: `7s!important` }}
                ></div>
                    <b>ARTICLES</b>
                </span>
            <ArticleComponent articles={blogEntries}/>
            
        </div>
    )
}