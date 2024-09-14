'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ArticleComponent(props){
    const [activeInd, setActiveInd] = useState(0);

    return(
        <div className="relative w-full h-full overflow-hidden px-[1.25rem]">
            <div className="absolute block w-full h-full top-0 left-0 z-[2] bg-white animate-slideY"></div>
            <div className="relative z-[1] pt-[1.25rem]">
                {props.articles.items.map((article, index) => {
                    return(
                        <div key={index}>
                            <Link className="inline-block" href={`/articles/${article.fields.slug}`} onMouseOver={() => setActiveInd(index)}>
                                <span>{index > 9 ? index + 1 : '0' + (index + 1)}.</span>
                                <h1>{article.fields.articleName}</h1>
                            </Link>    
                        </div>
                    )
                })}
            </div>
            <div className="absolute z-[0] w-full h-full top-0 left-0"> 
                {props.articles.items.map((article, index) => {
                    return(
                        <div key={index}>
                            {/* <div className="block absolute top-0 left-0 w-full h-full gray opacity-[59%]">
                            </div> */}
                            <Image className={activeInd == index ? "absolute top-0 left-0 w-full h-full object-cover object-center opacity-[60%] img active" : "absolute top-0 left-0 w-full h-full object-cover object-center opacity-0 img"} src={'https:' + article.fields.articleImage.fields.file.url} width={article.fields.articleImage.fields.file.details.image.width} height={article.fields.articleImage.fields.file.details.image.height} alt="oops"/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}