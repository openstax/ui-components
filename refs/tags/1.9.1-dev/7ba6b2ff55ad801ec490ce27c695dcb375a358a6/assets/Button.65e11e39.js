import{s as n,C as m,a as i}from"./index.23927948.js";import{t as e}from"./theme.f5250099.js";import{a as p}from"./buttons.133062ce.js";const a=n.button`
  ${o=>p(o.variant)}

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

  ${o=>o.variant==="primary"?`
    &:focus {
      outline: solid ${e.colors.palette.white};
      box-shadow: inset 0 0 0 3px ${e.colors.palette.black};
    }
  `:""}

  &:not([disabled]) {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.4;
  }

  & + & {
    margin-left: 1.6rem;
  }
`,f=o=>{const{disabled:t,isWaiting:r,waitingText:s,children:l,variant:c="primary",...d}=o;return i(a,{...d,disabled:r||t,variant:c,children:r&&s||l})},y=({variant:o="primary",...t})=>i(a,{...t,as:"a",variant:o,children:t.children}),u=m`
  color: ${e.colors.link.color};
  cursor: pointer;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
    color: ${e.colors.link.hover};
  }
`,h=n.button`
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  background: none;
`,k=n(h)`
  ${u}
`;export{f as B,y as L,k as a};
