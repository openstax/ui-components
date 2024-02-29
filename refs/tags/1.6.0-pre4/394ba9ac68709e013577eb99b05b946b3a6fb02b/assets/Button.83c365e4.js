import{s as n,C as m,a as i}from"./index.c509802a.js";import{t as r}from"./theme.accc2117.js";import{a as u}from"./buttons.9a4c09f9.js";const a=n.button`
  ${t=>u(t.variant)}

  font-size: 1.6rem;
  line-height: 2rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;

  &:not([disabled]) {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.4;
  }

  & + & {
    margin-left: 1.6rem;
  }
`,x=t=>{const{disabled:o,isWaiting:e,waitingText:s,children:l,variant:c="primary",...d}=t;return i(a,{...d,disabled:e||o,variant:c,children:e&&s||l})},y=({variant:t="primary",...o})=>i(a,{...o,as:"a",variant:t,children:o.children}),p=m`
  color: ${r.colors.link.color};
  cursor: pointer;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
    color: ${r.colors.link.hover};
  }
`,h=n.button`
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  background: none;
`,k=n(h)`
  ${p}
`;export{x as B,y as L,k as a};
