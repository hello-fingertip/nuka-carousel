import React, { useRef } from 'react';
import { Carousel, CarouselProps, SlideHandle } from 'nuka-carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FlatDarkButton } from './buttons';

export const BasicButtonDemo = (props: CarouselProps) => {
  const ref = useRef<SlideHandle>(null);
  return (
    <div>
      <Carousel ref={ref} {...props}>
        <img src="/open-source/nuka-carousel/img/pexels-01.jpg" />
        <img src="/open-source/nuka-carousel/img/pexels-02.jpg" />
        <img src="/open-source/nuka-carousel/img/pexels-03.jpg" />
      </Carousel>

      <div className="flex items-center justify-between mt-2" role="group">
        <FlatDarkButton onClick={() => ref.current && ref.current.goBack()}>
          <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
        </FlatDarkButton>
        <FlatDarkButton onClick={() => ref.current && ref.current.goForward()}>
          <BsChevronRight className="h-5 w-5" aria-hidden="true" />
        </FlatDarkButton>
      </div>
    </div>
  );
};
