'use client';
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player'
import Image from 'next/image';
import './VideosComponent.css';

const styles = {
    player: {
      objectFit: 'contain',
    },
  }

export default function VideosComponent(props){
    const [hasWindow, setHasWindow] = useState(false);
    const [activeInd, setActiveInd] = useState(0);

    useEffect(()=>{
        if(typeof window != undefined){
            setHasWindow(true);
        }
    },[])
    console.log(props.videos[0].fields.file);

    const [videoStates, setVideoStates] = useState(
        props.videos.map(() => ({
          isPlaying: false,
          volume: 0.8,
          played: 0,
        }))
      );

    const playerRefs = useRef(props.videos.map(() => React.createRef()));

    // Toggle play/pause for a specific video
    const handlePlayPause = (index) => {
        console.log('eirneir');
        console.log(`Toggling play/pause for video ${index}`);
        const newVideoStates = [...videoStates];
        newVideoStates[index].isPlaying = !newVideoStates[index].isPlaying;
        setVideoStates(newVideoStates);
    };

    // Handle volume change for a specific video
    const handleVolumeChange = (index, event) => {
        const newVideoStates = [...videoStates];
        newVideoStates[index].volume = parseFloat(event.target.value);
        setVideoStates(newVideoStates);
    };

    // Handle seek (progress bar) for a specific video
    const handleSeek = (index, event) => {
        const seekTo = parseFloat(event.target.value);
        playerRefs.current[index].current.seekTo(seekTo);
    };

    // Update progress for a specific video
    const handleProgress = (index, progress) => {
        const newVideoStates = [...videoStates];
        newVideoStates[index].played = progress.played;
        setVideoStates(newVideoStates);
    };

    return(
        <div>
            <div>
            {
                props.videos.map((video, index) => {
                    return(
                        <div key={index} className={activeInd == index ? 'video-container flex flex-col justify-center items-center' : 'video-container hidden justify-center'}>
                            {hasWindow && <ReactPlayer 
                                url={"https:" + video.fields.file.url} 
                                controls={false} 
                                ref={playerRefs.current[index]} 
                                playing={videoStates[index].isPlaying}
                                volume={videoStates[index].volume}
                                onProgress={(progress) => handleProgress(index, progress)}/>}
                            {/* Custom Controls for each video */}
                            <div className="controls">
                                {/* Play/Pause Button */}
                                <button onClick={() => handlePlayPause(index)}>
                                {videoStates[index].isPlaying ? 'Pause' : 'Play'}
                                </button>

                                {/* Volume Control */}
                                <label>
                                Volume:
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={videoStates[index].volume}
                                    onChange={(event) => handleVolumeChange(index, event)}
                                />
                                </label>

                                {/* Progress Bar (Seek) */}
                                <label>
                                Progress:
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0"
                                    value={videoStates[index].played}
                                    onChange={(event) => handleSeek(index, event)}
                                />
                                </label>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className='flex justify-center relative'>
            {
                props.videos.map((video, index) => {
                    return(
                        <div key={index} className={activeInd == index ? 'thumbnail active relative' : 'thumbnail relative'} onClick={() => setActiveInd(index)}>
                           {hasWindow && <ReactPlayer url={"https:" + video.fields.file.url} width={150} height={150} controls={false}/>}
                           
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}