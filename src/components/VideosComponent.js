'use client';
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player'
import Image from 'next/image';
import Play from '@/../public/images/play.png';
import Pause from '@/../public/images/pause.png';
import Volume from '@/../public/images/volume.png';
import Fullscreen from '@/../public/images/fullscreen.png';
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

    // Function to trigger fullscreen mode
    const handleFullscreen = (index) => {
        const player = playerRefs.current[index]; // Get the specific ReactPlayer instance
    if (player && player.current) {
      const videoElement = player.current.getInternalPlayer(); // Access the native video element
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) { // Safari
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
      } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
      }
      // Show native controls in fullscreen
      videoElement.controls = true;

      // Listen for exit fullscreen to remove controls
      document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
          videoElement.controls = false; // Hide native controls on exit fullscreen
        }
      });
      // Show native controls while in fullscreen
      videoElement.controls = true;
    }
      };

    return(
        // className='flex flex-row-reverse justify-center gap-[50px]'
        <div>
            <div className='relative overflow-hidden flex justify-center'>
            {
                props.videos.map((video, index) => {
                    return(
                        <div key={index} className={activeInd == index ? 'video-container flex flex-col justify-center w-fit items-center relative overflow-hidden' : 'video-container hidden justify-center w-fit relative overflow-hidden'}>
                            <div className='absolute block w-full h-full bg-white z-[1] animate-slideY'></div>
                            <div className='flex items-baseline'>
                            <div className='player-container'>
                            {hasWindow && 
                                <ReactPlayer 
                                url={"https:" + video.fields.file.url} 
                                controls={false} 
                                ref={playerRefs.current[index]} 
                                playing={videoStates[index].isPlaying}
                                volume={videoStates[index].volume}
                                onProgress={(progress) => handleProgress(index, progress)}/>
                                }
                                <div className="controls mt-[10px]">
                                {/* Play/Pause Button */}
                                <button onClick={() => handlePlayPause(index)} className='pr-[5px]'>
                                {videoStates[index].isPlaying ? 
                                <Image src={Pause} width={10} height={10}/>
                                : 
                                <Image src={Play} width={10} height={10}/>
                                }
                                </button>
                                
                                {/* Progress Bar (Seek) */}
                                <label className='w-full flex'>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    className='progress-bar'
                                    value={videoStates[index].played}
                                    onChange={(event) => handleSeek(index, event)}
                                />
                                </label>

                            </div>
                            </div>
                            
                            <div className='relative bottom-[20px] ml-[5px] text-center flex flex-col items-center'>
                            {/* Volume Control */}
                            <label className='flex flex-col justify-center'>
                                
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    orient="vertical"
                                    className='volume-bar'
                                    step="0.01"
                                    value={videoStates[index].volume}
                                    onChange={(event) => handleVolumeChange(index, event)}
                                />
                                <Image src={Volume} width={10} height={10} className='pt-[5px]'/>
                                </label>
                                
                                <button onClick={(event) => handleFullscreen(index)} className='mt-[5px]'>
                                    <Image src={Fullscreen} width={20}/>
                                </button>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>
            <div className='flex justify-center w-full relative overflow-hidden mt-[2rem] '>
            <div className='absolute block w-full h-full top-0 left-0 bg-white animate-slide z-[3]'></div>
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