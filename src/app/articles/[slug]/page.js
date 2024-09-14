import Image from "next/image"
import { getEntryBySlug } from "@/utils/contentful";
import RichText from "@/components/RichText";

export default async function Article(props){
    const { params } = props;
    const { slug } = params;
    const article = await getEntryBySlug(slug, "article");
    console.log(article);

    return(
        <div className="px-[1rem] md:px-[3.75rem] pb-[1.5rem] md:pb-[2.5rem] relative overflow-hidden">
            <div className="absolute z-[2] block top-0 left-0 w-full h-full bg-white animate-slide"
            ></div>
            <div className="relative">
                <Image className="w-full h-[400px] object-cover object-center" src={'https:' + article.fields.articleImage.fields.file.url} width={article.fields.articleImage.fields.file.details.image.width} height={article.fields.articleImage.fields.file.details.image.height} alt="oops"/>
                <h1 className="absolute right-[2.5%] bottom-[-12%] md:bottom-[-15%]">{article.fields.articleName}</h1>
            </div>
            <div className="article-container mt-[2.5rem] md:mt-[4rem] relative">
                <div className="absolute block top-0 left-0 w-full h-full bg-white animate-slideY"
                    style={{ animationDelay: `1.75s!important` }}
                ></div>
                <RichText content={article.fields.content}/>
            </div>
        </div>
    )
}