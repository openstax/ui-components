import{C as i,s as n,a}from"./index.8ec087ea.js";import{t as r}from"./theme.e9f3b33a.js";import{a as m}from"./buttons.7ec90a88.js";const s=i`
  ${t=>m(t.variant||"primary")}

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
`,x=n(t=>{const{disabled:o,isWaiting:e,waitingText:l,children:c,variant:p,...d}=t;return a("button",{...d,disabled:e||o,children:e&&l||c})})`
  ${s}
`,y=n(({variant:t,...o})=>a("a",{...o,children:o.children}))`
  ${s}
`,u=i`
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
  ${u}
`;export{x as B,y as L,k as a};
