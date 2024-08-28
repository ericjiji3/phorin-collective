import Image from "next/image"
import { getEntryBySlug } from "@/utils/contentful";
import RichText from "@/components/RichText";

export default async function Article(props){
    const { params } = props;
    const { slug } = params;
    const article = await getEntryBySlug(slug, "article");
    console.log(article);

    return(
        <div className="px-[3.75rem] pb-[2.5rem]">
            <div className="relative">
                <Image className="w-full h-[400px] object-cover object-center" src={'https:' + article.fields.articleImage.fields.file.url} width={article.fields.articleImage.fields.file.details.image.width} height={article.fields.articleImage.fields.file.details.image.height} alt="oops"/>
                <h1 className="absolute right-[2.5%] bottom-[-15%]">{article.fields.articleName}</h1>
            </div>
            <div className="article-container mt-[4rem]">
                <RichText content={article.fields.content}/>
            </div>
        </div>
    )
}