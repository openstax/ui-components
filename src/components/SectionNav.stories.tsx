import React from "react";
import { SectionNav } from "./SectionNav/index";
import { ToggleButtonGroup } from "./ToggleButtonGroup/index";
import { Key } from "react-aria-components";


export const Default = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const childrenListWithKeys = [
    <button key='1' onClick={() => setSelectedIndex(0)}>Slide 1</button>,
    <button key='2' onClick={() => setSelectedIndex(1)}>Slide 2</button>,
    <button key='3' onClick={() => setSelectedIndex(2)}>Slide 3</button>,
    <button key='4' onClick={() => setSelectedIndex(3)}>Slide 4</button>,
    <button key='5' onClick={() => setSelectedIndex(4)}>Slide 5</button>,
    <button key='6' onClick={() => setSelectedIndex(5)}>Slide 6</button>,
    <button key='7' onClick={() => setSelectedIndex(6)}>Slide 7</button>,
    <button key='8' onClick={() => setSelectedIndex(7)}>Slide 8</button>,
  ];

  const handlePrevArrow = () => {
    setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextArrow = () => {
    setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, childrenListWithKeys.length - 1));
  };

  return (
    <>
      <SectionNav
        handlePrevArrow={handlePrevArrow}
        handleNextArrow={handleNextArrow}
        isPrevArrowDisabled={selectedIndex === 0}
        isNextArrowDisabled={selectedIndex === childrenListWithKeys.length - 1}
      >
        {[childrenListWithKeys]}
      </SectionNav>
      <span>Selected section: {selectedIndex + 1}</span>
    </>

  );
};


export const WithToggleButtonGroups = () => {
  const sections = [
    [
      { id: 'Section1.1', value: '1.1' },
      { id: 'Section1.2', value: '1.2' },
    ],
    [
      { id: 'Section2.0', value: '2.0' },
      { id: 'Section2.1', value: '2.1' },
      { id: 'Section2.2', value: '2.2' },
      { id: 'Section2.3', value: '2.3' },
      { id: 'Section2.4', value: '2.4' },
      { id: 'Section2.5', value: '2.5' },
    ],
    [
      { id: 'Section3.0', value: '3.0' },
      { id: 'Section3.1', value: '3.1' },
      { id: 'Section3.2', value: '3.2' },
      { id: 'Section3.3', value: '3.3' },
      { id: 'Section3.4', value: '3.4' },
    ],
  ];

  const flattenedSections = sections.flat();

  const [selectedItems, setSelectedItems] = React.useState(new Set<Key>([flattenedSections[0].id]));

  const scrollToIndex = (id: Key) => {
    const child = document.querySelector(`[data-testid="${id}-testid"]`) as HTMLElement;
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  const handlePrevArrow = () => {
    setSelectedItems((prev) => {
      const newSet = new Set<Key>();
      const firstSectionKeys = flattenedSections.map(section => section.id);
      const currentIndex = firstSectionKeys.indexOf([...prev][0] as string);
      if (currentIndex > 0) {
        newSet.add(firstSectionKeys[currentIndex - 1]);
        scrollToIndex(firstSectionKeys[currentIndex - 1]);
      }
      return newSet;
    });
  };

  const handleNextArrow = () => {
    setSelectedItems((prev) => {
      const newSet = new Set<Key>();
      const firstSectionKeys = flattenedSections.map(section => section.id);
      const currentIndex = firstSectionKeys.indexOf([...prev][0] as string);
      if (currentIndex < firstSectionKeys.length - 1) {
        newSet.add(firstSectionKeys[currentIndex + 1]);
        scrollToIndex(firstSectionKeys[currentIndex + 1]);
      }
      return newSet;
    });
  };

  const ToggleGroup = sections.map(
    (section, index) => 
      <ToggleButtonGroup
        key={`section-${index + 1}`}
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
      >
        {section}
      </ToggleButtonGroup>
  );

  return (
    <>
      <SectionNav
        handlePrevArrow={handlePrevArrow}
        handleNextArrow={handleNextArrow}
        isPrevArrowDisabled={selectedItems.has(flattenedSections[0].id) || selectedItems.size === 0}
        isNextArrowDisabled={selectedItems.has(flattenedSections[flattenedSections.length - 1].id) || selectedItems.size === 0}
      >
        {ToggleGroup}
      </SectionNav>
      <p>Current selections: {[...selectedItems].join(', ')}</p>
    </>
  );

};

