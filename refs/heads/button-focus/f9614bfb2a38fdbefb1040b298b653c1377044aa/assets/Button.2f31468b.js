import{s as n,C as m,a as i}from"./index.0d4d39e1.js";import{t as e}from"./theme.de66091c.js";import{a as u}from"./buttons.11633424.js";const a=n.button`
  ${o=>u(o.variant)}
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

  &:focus {
    outline: solid ${e.colors.palette.white};
    box-shadow: inset 0 0 0 3px ${e.colors.palette.black};
  }
  &:not([disabled]) {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.4;
  }

  & + & {
    margin-left: 1.6rem;
  }
`,f=o=>{const{disabled:t,isWaiting:r,waitingText:s,children:l,variant:c="primary",...d}=o;return i(a,{...d,disabled:r||t,variant:c,children:r&&s||l})},y=({variant:o="primary",...t})=>i(a,{...t,as:"a",variant:o,children:t.children}),p=m`
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
  ${p}
`;export{f as B,y as L,k as a};
