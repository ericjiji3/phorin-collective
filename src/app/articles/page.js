import { getBlogEntries } from "@/utils/contentful";
import Image from "next/image";
import ArticleComponent from "@/components/ArticleComponent";

export default async function Articles(){
    const blogEntries = await getBlogEntries();
    console.log("Home -> blogEntries", blogEntries.items[0].fields.articleImage.fields.file.details)
    
    return(
        <div className="absolute top-0 px-[1rem] md:px-[3.75rem] pt-[5.5rem] md:pt-[6.88rem] pb-[1.5rem] md:pb-[2.5rem] w-full h-full flex flex-col">
            <span className="mb-[0.6rem]"><b>ARTICLES</b></span>
            <ArticleComponent articles={blogEntries}/>
            
        </div>
    )
}