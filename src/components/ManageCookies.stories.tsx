import React from 'react';
import { ManageCookiesLink } from "./ManageCookies";

export const WithoutOsano = () => {
  const [show, setShow] = React.useState<boolean>(false);

  // small delay so that going back and forth from WithOsano works
  React.useEffect(() => setShow(true),[]);

  return show ? <ManageCookiesLink /> : null;
};

export const WithOsano = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any 
  (window as any).Osano = {cm: {mode: 'production', showDrawer: (...args: any[]) => alert('showDrawer called ' + JSON.stringify(args))}};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  React.useEffect(() => () => { delete (window as any).Osano }, []);

  return <>
    <ManageCookiesLink />
  </>;
};
