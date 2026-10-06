import React from 'react';
import { Banner } from './Banner';
import styled from 'styled-components';

const BannerContainer = styled.div`
  font-size: 1.2rem;
  position: relative;
  padding-right: 2.5rem;
  width: 42rem;
`;

const Caption = styled.p`
  margin: 0 0 1.2rem;
`;

const presentAtLoad = <>
  Present when the page loads, so it is not announced. If it appears because something the user or
  the app did, use <code>BannerRegion</code>.
</>;

export const Error = () => (
  <BannerContainer>
    <Caption>
      This shows how an error looks. An error like this usually comes from a request that fails
      after the page loads, and then it belongs in a <code>BannerRegion</code> so it is announced.
    </Caption>
    <Banner messages={['This is an error message']} severity='error' />
  </BannerContainer>
);

export const Warning = () => (
  <BannerContainer>
    <Caption>{presentAtLoad}</Caption>
    <Banner messages={['This is a warning message']} severity='warning' />
  </BannerContainer>
);

export const Note = () => (
  <BannerContainer>
    <Caption>{presentAtLoad}</Caption>
    <Banner messages={['This is a note message']} severity='note' />
  </BannerContainer>
);

export const MultipleMessages = () => (
  <BannerContainer>
    <Caption>{presentAtLoad}</Caption>
    <Banner messages={['First message', 'Second message', 'Third message']} severity='warning' />
  </BannerContainer>
);

export const Dismissible = () => {
  const [visible, setVisible] = React.useState(true);
  return visible ? (
    <BannerContainer>
      <Caption>
        Present when the page loads, and removed by the user, so nothing needs announcing. A banner
        that appears later belongs in a <code>BannerRegion</code>.
      </Caption>
      <Banner
        messages={['This is a dismissible warning message']}
        severity='warning'
        onDismiss={() => setVisible(false)}
      />
    </BannerContainer>
  ) : null;
};
