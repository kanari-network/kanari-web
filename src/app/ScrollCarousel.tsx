import { NextPage } from 'next'
import { useRef, useEffect } from 'react';

interface Props {}



const ScrollCarousel: NextPage<Props> = ({}) => {


    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            // Your JavaScript logic to scroll the elements within the carousel container
        }
    }, []);
    
  return <>
        <div className="py-20 px-2 ">
            <div className="relative h-160 w-full rounded-md shadow  bg-slate-300">  
                <div className='mb-86'>
                    <div className="relative w-full p-16  overflowx-hidden">
                        <div className="flex absolute left-0 animate-marquee-infinite  ref={carouselRef}">
                            <div className='flex w-96'>
                                <img src="https://gumletblog.gumlet.io/learn/2023/10/HTML-Video-Background-1.png" alt="" />
                                <img src="https://gumletblog.gumlet.io/learn/2023/10/HTML-Video-Background-1.png" alt="" />
                                <img src="https://gumletblog.gumlet.io/learn/2023/10/HTML-Video-Background-1.png" alt="" />
                                <img src="https://gumletblog.gumlet.io/learn/2023/10/HTML-Video-Background-1.png" alt="" />
                                <img src="https://gumletblog.gumlet.io/learn/2023/10/HTML-Video-Background-1.png" alt="" />
                                
                            </div>
                            <div className='flex w-96 '>
                                <img src="https://gumletblog.gumlet.io/learn/2023/10/HTML-Video-Background-1.png" alt="" />
                                <img src="https://gumletblog.gumlet.io/learn/2023/10/HTML-Video-Background-1.png" alt="" />
                                <img src="https://gumletblog.gumlet.io/learn/2023/10/HTML-Video-Background-1.png" alt="" />
                                <img src="https://gumletblog.gumlet.io/learn/2023/10/HTML-Video-Background-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default ScrollCarousel