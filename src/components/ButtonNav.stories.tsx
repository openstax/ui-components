import React from "react";
import { ButtonNav } from "./ButtonNav/index";
import { ToggleButtonGroup } from "./ToggleButtonGroup/index";
import { Key } from "react-aria-components";


export const Default = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const childrenListWithKeys = Array.from({ length: 8 }, (_, index) => (
    <button
      key={index + 1}
      aria-current={selectedIndex === index ? 'true' : undefined}
      style={{ fontWeight: selectedIndex === index ? 700 : 400 }}
      onClick={() => setSelectedIndex(index)}
    >
      Slide {index + 1}
    </button>
  ));

  const handlePrevArrow = () => {
    setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextArrow = () => {
    setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, childrenListWithKeys.length - 1));
  };

  return (
    <>
      <ButtonNav
        handlePrevArrow={handlePrevArrow}
        handleNextArrow={handleNextArrow}
        isPrevArrowDisabled={selectedIndex === 0}
        isNextArrowDisabled={selectedIndex === childrenListWithKeys.length - 1}
      >
        {[childrenListWithKeys]}
      </ButtonNav>
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

  const [selectedItem, setSelectedItem] = React.useState<string>(flattenedSections ? flattenedSections[0].id : '');

  const scrollNavToSection = (sectionDataId: string) => {
    const child = document.querySelector<HTMLElement>(`[data-button-id="${sectionDataId}"]`);
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  const handlePrevArrow = () => {
    setSelectedItem((prev) => {
      const currentIndex =  flattenedSections.findIndex((element) => element.id === prev);
      let newSelectedItem = prev;
      if (currentIndex > 0) {
        newSelectedItem = flattenedSections[currentIndex - 1].id;
        scrollNavToSection(newSelectedItem);
      }
      return newSelectedItem;
    });
  };

  const handleNextArrow = () => {
    setSelectedItem((prev) => {
      const currentIndex =  flattenedSections.findIndex((element) => element.id === prev);
      let newSelectedItem = prev;
      if (currentIndex < flattenedSections.length - 1) {
        newSelectedItem = flattenedSections[currentIndex + 1].id;
        scrollNavToSection(newSelectedItem);
      }
      return newSelectedItem;
    });
  };

  const ToggleGroup = sections.map(
    (sectionSet, index) => 
      <ToggleButtonGroup
        key={`section-${index + 1}`}
        selectedItems={new Set<Key>([selectedItem])}
        onSelectionChange={(newSet) => setSelectedItem(newSet.size ? [...newSet][0] as string : '')}
        items={sectionSet}
      />
  );

  return (
    <>
      <ButtonNav
        handlePrevArrow={handlePrevArrow}
        handleNextArrow={handleNextArrow}
        isPrevArrowDisabled={selectedItem === flattenedSections[0].id || selectedItem.length === 0}
        isNextArrowDisabled={
          selectedItem === flattenedSections[flattenedSections.length - 1].id || 
          selectedItem.length === 0
        }
      >
        {ToggleGroup}
      </ButtonNav>
      <p>Current selected: {selectedItem}</p>
    </>
  );

};

