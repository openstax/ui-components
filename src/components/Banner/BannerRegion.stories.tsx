import React from 'react';
import { BannerRegion } from './BannerRegion';
import { Button } from '../Button';

export const Announced = () => {
  const [messages, setMessages] = React.useState<string[]>([]);

  return <div style={{width: '42rem'}}>
    <BannerRegion messages={messages} severity='warning' onDismiss={() => setMessages([])} />
    <Button onClick={() => setMessages(['Your assignment is past due and cannot be edited'])}>
      Show a warning
    </Button>
  </div>;
};

export const Empty = () => <BannerRegion messages={[]} severity='warning' />;
