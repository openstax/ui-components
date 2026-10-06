import React from 'react';
import { Banner } from './Banner';
import { BannerRegion } from './BannerRegion';
import { Button } from '../Button';

const message = 'Your assignment is past due and cannot be edited';

export const Announced = () => {
  const [messages, setMessages] = React.useState<string[]>([]);

  return <div style={{width: '42rem'}}>
    <p>
      With a screen reader on, press the button. The warning is announced: the region was already
      on the page, empty, when its content arrived.
    </p>
    <BannerRegion messages={messages} severity='warning' onDismiss={() => setMessages([])} />
    <Button onClick={() => setMessages([message])}>
      Show a warning
    </Button>
  </div>;
};

export const ComparedWithBanner = () => {
  const [plain, setPlain] = React.useState<string[]>([]);
  const [region, setRegion] = React.useState<string[]>([]);

  return <div style={{display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
    <section style={{width: '30rem'}}>
      <h3>Banner</h3>
      <p>
        No live region. Some screen readers announce it when it appears and others, such as
        VoiceOver in Safari, do not. Right for a banner that is already there when the page loads.
      </p>
      {plain.length
        ? <Banner messages={plain} severity='warning' onDismiss={() => setPlain([])} />
        : null}
      <Button onClick={() => setPlain([message])}>Show in a Banner</Button>
    </section>
    <section style={{width: '30rem'}}>
      <h3>BannerRegion</h3>
      <p>
        The live region is already on the page, so the warning is announced. Right for a banner
        that appears because something the user or the app did, such as a failed request.
      </p>
      <BannerRegion messages={region} severity='warning' onDismiss={() => setRegion([])} />
      <Button onClick={() => setRegion([message])}>Show in a BannerRegion</Button>
    </section>
  </div>;
};
