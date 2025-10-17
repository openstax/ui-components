import React from 'react';
import { Banner } from './Banner';
import styled from 'styled-components';

const BannerContainer = styled.div`
  font-size: 1.2rem;
  position: relative;
  padding-right: 2.5rem;
  width: 42rem;

  svg {
    position: absolute;
    top: 1.7rem;
    right: 1rem;
    cursor: pointer;
  }
`;

export const Error = () => (
  <BannerContainer>
    <Banner messages={['This is an error message']} severity='error' />
  </BannerContainer>
);

export const Warning = () => (
  <BannerContainer>
    <Banner messages={['This is a warning message']} severity='warning' />
  </BannerContainer>
);

export const Note = () => (
  <BannerContainer>
    <Banner messages={['This is a note message']} severity='note' />
  </BannerContainer>
);

export const MultipleMessages = () => (
  <BannerContainer>
    <Banner messages={['First message', 'Second message', 'Third message']} severity='warning' />
  </BannerContainer>
);

export const Dismissible = () => {
  const [visible, setVisible] = React.useState(true);
  return visible ? (
    <BannerContainer>
      <Banner
        messages={['This is a dismissible warning message']}
        severity='warning'
        onDismiss={() => setVisible(false)}
      />
    </BannerContainer>
  ) : null;
};