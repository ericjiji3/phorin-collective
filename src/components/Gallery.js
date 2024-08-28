'use client';
import Image from "next/image";
import Masonry from 'react-masonry-css';
import "./Gallery.css";

export default function Gallery(props){
    console.log(props.images[0].fields.file)
    return(
        <div>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    {
                        props.images.map((image, index) => {
                            return(
                                <div key={index}>
                                    <Image src={"https:" + image.fields.file.url} width={image.fields.file.details.image.width} height={image.fields.file.details.image.height} alt="oops"/>
                                    {image.fields.title}
                                </div>
                            )
                        })
                    }
            </Masonry>
                

            
        </div>
    )
}