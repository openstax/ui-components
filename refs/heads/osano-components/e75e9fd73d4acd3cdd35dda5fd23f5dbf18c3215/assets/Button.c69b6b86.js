import{C as a,s as r,a as i}from"./index.14bd9c25.js";import{p as n}from"./palette.15e4d008.js";const g=t=>t,b=g({primary:{background:n.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:n.white},light:{background:n.white,backgroundActive:n.neutralLight,backgroundHover:n.white,color:n.neutralDarker,fontWeight:400},secondary:{background:n.darkGray,backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:n.white}}),h=t=>{var e;const o=b[t];return a`
    background-color: ${o.background};
    color: ${o.color};
    font-weight: ${(e=o.fontWeight)!=null?e:700};

    &:not([disabled]) {
      &:hover {
        background: ${o.backgroundHover};
      }
      &:active {
        background: ${o.backgroundActive};
      }
    }
  `},c=r.button`
  ${t=>h(t.variant)}

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
`,x=t=>{const{disabled:o,isWaiting:e,waitingText:s,children:d,variant:l="primary",...u}=t;return i(c,{...u,disabled:e||o,variant:l,children:e&&s||d})},w=({variant:t="primary",...o})=>i(c,{...o,as:"a",variant:t,children:o.children}),k="#027EB5",p="#0064A0",m=a`
  color: ${k};
  cursor: pointer;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
    color: ${p};
  }
`,y=r.button`
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  background: none;
  outline: none;
`,B=r(y)`
  ${m}
`;export{x as B,w as L,B as a};
