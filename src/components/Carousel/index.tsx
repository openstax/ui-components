import React from "react";
import { CarouselContainer, CarouselOverflow, CarouselWrapper, CarouselItem, StyledLeftArrow, StyledRightArrow } from './styles';

export interface CarouselProps {
    children: React.ReactNode[];
    customWidth?: string;
}

export const Carousel = ({ children, customWidth }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [dragStartX, setDragStartX] = React.useState<number | null>(null);
    const [dragX, setDragX] = React.useState(0);
    const [dragging, setDragging] = React.useState(false);
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const scrollSpeed = 100;

    const handlePrev = () => {
        if (wrapperRef.current) {
            const itemWidth = (wrapperRef.current.clientWidth / children.length);
            setCurrentIndex((prevIndex) => Math.max(prevIndex - itemWidth - scrollSpeed, 0));
        }
    };

    const handleNext = () => {
        if (wrapperRef.current) {
            const itemWidth = (wrapperRef.current.clientWidth / children.length);
            const maxIndex = (wrapperRef.current.scrollWidth - wrapperRef.current.clientWidth);
            setCurrentIndex((prevIndex) => Math.min(prevIndex + itemWidth + scrollSpeed, maxIndex));
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setDragStartX(e.clientX);
        setDragging(true); // Allow dragging when move cursor
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!dragging || dragStartX === null) return;
        const dragDistance = (e.clientX - dragStartX) / 10;
        setDragX(dragDistance);
        if (wrapperRef.current) {
            wrapperRef.current.style.transition = 'none';
            wrapperRef.current.style.transform = `translateX(calc(-${(currentIndex / 10)}rem + ${dragDistance}rem))`;
        }
    };

    const handleMouseUp = () => {
        if (!dragging) return;
        setDragging(false);
        setDragStartX(null);
        if (wrapperRef.current) {
            const newIndex = currentIndex - (dragX * 10); // *10 convert from rem to px 
            const maxIndex = (wrapperRef.current.scrollWidth - wrapperRef.current.clientWidth);
            const clampedIndex = Math.max(0, Math.min(newIndex, maxIndex));
            setCurrentIndex(clampedIndex);
            setDragX(0);
            wrapperRef.current.style.transition = 'transform 0.3s ease-in-out';
            wrapperRef.current.style.transform = `translateX(-${(clampedIndex / 10)}rem)`;
        }
    };

    return (
        <CarouselContainer customWidth={customWidth}>
            <StyledLeftArrow onClick={handlePrev} disabled={(currentIndex) === 0} />
            <CarouselOverflow
                onPointerDown={handleMouseDown}
                onPointerMove={handleMouseMove}
                onPointerUp={handleMouseUp}
                onPointerLeave={handleMouseUp}
            >
                <CarouselWrapper
                    ref={wrapperRef}
                    // Updates the position of the carousel when the currentIndex changes, avoiding problems when the user uses the keyboard to navigate
                    style={{ transform: `translateX(calc(-${(currentIndex / 10)}rem + ${dragX}rem))` }}
                >
                    {children.map((child) => {
                        const key = (child as React.ReactElement).key;
                        return (
                        <CarouselItem 
                            key={key ?? null}
                        >
                            {child}
                        </CarouselItem>);
                    })}
                </CarouselWrapper>
            </CarouselOverflow>
            <StyledRightArrow onClick={handleNext} disabled={currentIndex >= ((wrapperRef.current?.scrollWidth) || 0) - (wrapperRef.current?.clientWidth || 0)} />
        </CarouselContainer>

    );
};