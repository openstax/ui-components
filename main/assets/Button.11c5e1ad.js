import{C as i,s as n,a as c}from"./index.f0e05dbe.js";import{t as a}from"./theme.b8cc4861.js";import{p as e}from"./palette.15e4d008.js";const b=t=>t,h=b({primary:{background:e.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:e.white},light:{background:e.white,backgroundActive:e.neutralLight,backgroundHover:e.white,color:e.neutralDarker,fontWeight:400},secondary:{background:e.darkGray,backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:e.white}}),k=t=>{var r;const o=h[t];return i`
    background-color: ${o.background};
    color: ${o.color};
    font-weight: ${(r=o.fontWeight)!=null?r:700};

    &:not([disabled]) {
      &:hover {
        background: ${o.backgroundHover};
      }
      &:active {
        background: ${o.backgroundActive};
      }
    }
  `},s=n.button`
  ${t=>k(t.variant)}

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
  border-radius: 5px;
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
`,x=t=>{const{disabled:o,isWaiting:r,waitingText:d,children:l,variant:u="primary",...g}=t;return c(s,{...g,disabled:r||o,variant:u,children:r&&d||l})},w=({variant:t="primary",...o})=>c(s,{...o,as:"a",variant:t,children:o.children}),m=i`
  color: ${a.colors.link.color};
  cursor: pointer;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
    color: ${a.colors.link.hover};
  }
`,p=n.button`
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  background: none;
`,$=n(p)`
  ${m}
`;export{x as B,w as L,$ as a};
