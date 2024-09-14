'use client';
import Image from "next/image";
import Masonry from 'react-masonry-css';
import "./Gallery.css";

const breakpointColumnsObj = {
    default: 3,
    700: 2
    // 500: 1
  };

export default function Gallery(props){
    
    console.log(props.images[0].fields.file)
    return(
        <div>
     
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    {
                        props.images.map((image, index) => {
                            return(
                                <div key={index} className="relative overflow-hidden">
                                    <div className={`absolute block top-0 left-0 w-full h-[110%] bg-white animate-slide`}
                                        style={{ animationDelay: `${index * 0.3}s` }}
                                    >

                                    </div>
                                    <Image src={"https:" + image.fields.file.url} width={image.fields.file.details.image.width} height={image.fields.file.details.image.height} alt="oops"/>
                                    <span>{image.fields.title}</span>
                                </div>
                            )
                        })
                    }
            </Masonry>
                

            
        </div>
    )
}