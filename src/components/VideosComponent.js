'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'

export default function VideosComponent(props){
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(()=>{
        if(typeof window != undefined){
            setHasWindow(true);
        }
    },[])
    console.log(props.videos[0].fields.file);
    return(
        <div>
            {
                props.videos.map((video, index) => {
                    return(
                        <div key={index}>
                            {hasWindow && <ReactPlayer url={"https:" + video.fields.file.url} controls={true}/>}
                            
                        </div>
                    )
                })
            }
            
        </div>
    )
}