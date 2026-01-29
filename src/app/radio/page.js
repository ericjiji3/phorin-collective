

export default function Radio(){
    return(
        <div className="absolute top-0 px-[1rem] md:px-[3.75rem] pt-[5.5rem] md:pt-[6.88rem] pb-[1.5rem] md:pb-[2.5rem] w-full h-full flex flex-col opacity-0 animate-fadeIn">
        {/* <span className="mb-[0.6rem]"><b>ARTICLES</b></span> */}
        <span className="block mb-[0.6rem] relative overflow-hidden">
            <div className="absolute block top-0 left-0 w-full h-full bg-white animate-slide"
                style={{ animationDuration: `7s!important` }}
            ></div>
                <b>RADIO</b>
            </span>
            <iframe
                    src="https://customer-85krc1vqa8p435i4.cloudflarestream.com/907538cfc40ea84d9ff2ed4f9ef3e39d/iframe"
                    className="w-full h-full"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowfullscreen="true"
                ></iframe>
        
    </div>
    )
}