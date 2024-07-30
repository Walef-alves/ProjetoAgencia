import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Carousell = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const handleCarouselChange = (index: any) => {
      setSelectedIndex(index);
    }

  
return (
     <div className="flex items-center justify-center">
            <div className="w-full md:w-4/5 lg:w-3/5 xl:w-1/2 rounded-lg overflow-hidden">
                <Carousel
                    selectedItem={selectedIndex}
                    onChange={handleCarouselChange}
                    showThumbs={false}
                    showArrows={true}
                    showIndicators={true}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={700}
                    swipeable={true}
                >
                    <div className="h-96 md:h-96 rounded-lg overflow-hidden">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                            className="object-cover w-full h-full"
                            alt="Slide 1"
                        />
                    </div>
                    <div className="h-96 md:h-96 rounded-lg overflow-hidden">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                            className="object-cover w-full h-full"
                            alt="Slide 2"
                        />
                    </div>
                    <div className="h-96 md:h-96 rounded-lg overflow-hidden">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                            className="object-cover w-full h-full"
                            alt="Slide 3"
                        />
                    </div>
                    <div className="h-96 md:h-96 rounded-lg overflow-hidden">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                            className="object-cover w-full h-full"
                            alt="Slide 4"
                        />
                    </div>
                    <div className="h-96 md:h-96 rounded-lg overflow-hidden">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                            className="object-cover w-full h-full"
                            alt="Slide 5"
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );

};
export default Carousell