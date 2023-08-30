import React from 'react';
import styled from "styled-components/macro";
import { ManageCookiesLink } from "./ManageCookies";

export const WithoutOsano = () => {
  const [show, setShow] = React.useState<boolean>(false);

  // small delay so that going back and forth from WithOsano works
  React.useEffect(() => setShow(true),[]);

  return <>
    <div className="osano-cm-widget">mock osano cookie button</div>
    {show ? <ManageCookiesLink /> : null}

    <ul>
      <li>in a list</li>
      <li>use a function child to provide wrappers that will only be included if the link is shown</li>
      <ManageCookiesLink wrapper={button => <li>{button}</li>} />
    </ul>
  </>;
};

const SomeContainer = styled.div`
  a, button {
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
`;

export const WithOsano = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).Osano = {cm: {mode: 'production', showDrawer: (...args: any[]) => alert('showDrawer called ' + JSON.stringify(args))}};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  React.useEffect(() => () => { delete (window as any).Osano }, []);

  return <>
    <div className="osano-cm-widget">mock osano cookie button</div>

    <ManageCookiesLink />

    <SomeContainer>
      if there is some container like a footer or whatever that sets colors, it works
      <ManageCookiesLink />
    </SomeContainer>

    <ul>
      <li>in a list</li>
      <li>use a function child to provide wrappers that will only be included if the link is shown</li>
      <ManageCookiesLink wrapper={button => <li>{button}</li>} />
    </ul>
  </>;
};
