import React from "react";
import { Carousel } from "./Carousel/index";
import { ToggleButtonGroup } from "./ToggleButtonGroup/index";
import { Key } from "react-aria-components";

const childrenListWithKeys = [
    <button key='1'>Slide 1</button>,
    <button key='2'>Slide 2</button>,
    <button key='3'>Slide 3</button>,
    <button key='4'>Slide 4</button>,
    <button key='5'>Slide 5</button>,
    <button key='6'>Slide 6</button>,
    <button key='7'>Slide 7</button>,
    <button key='8'>Slide 8</button>,
];

export const Default = () =>
    <Carousel>{childrenListWithKeys}</Carousel>;

export const SmallCarousel = () =>
    <Carousel customWidth="10rem">{childrenListWithKeys}</Carousel>;

export const LargeCarousel = () =>
    <Carousel customWidth="53rem">{childrenListWithKeys}</Carousel>;

export const WithToggleButtonGroups = () => {
    const [selectedIetms, setSelectedItems] = React.useState(new Set<Key>([]));
    const firstSection = [
        { key: 'Section1.1', value: '1.1' },
        { key: 'Section1.2', value: '1.2' },
    ];

    const secondSection = [ 
        { key: 'Section2.0', value: '2.0' },
        { key: 'Section2.1', value: '2.1' },
        { key: 'Section2.2', value: '2.2' },
        { key: 'Section2.3', value: '2.3' },
    ];

    const FirstToggleGroup =
        <ToggleButtonGroup
            selectedItems={selectedIetms}
            handlerSelectedItems={setSelectedItems}
        >
            {firstSection}
        </ToggleButtonGroup>

    const SecondToggleGroup =
        <ToggleButtonGroup
            selectedItems={selectedIetms}
            handlerSelectedItems={setSelectedItems}
        >
            {secondSection}
        </ToggleButtonGroup>

    return (
        <>
            <Carousel customWidth="25rem">
                {[FirstToggleGroup, SecondToggleGroup]}
            </Carousel>
            <p>Current selections: {[...selectedIetms].join(', ')}</p>
        </>
    );

};

