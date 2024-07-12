import{$ as i}from"./module.967ae04e.js";import{c as r}from"./theme.619e1134.js";import{C as t,s as d,a as n}from"./index.62f31380.js";import{p as b}from"./palette.15e4d008.js";const m=`
  overflow-x: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: row;
`,c=t`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  outline-offset: -0.1rem; // Prevent overflow scroll from clipping outline
  white-space: nowrap;
  font-size: ${({size:e})=>e==="small"?"1.6":e==="large"?"2.4":"1.8"}rem;

  &:hover {
    cursor: pointer;
  }
`,p=`
  border: 0.1rem solid ${r.palette.pale};
  border-radius: 0.5rem;
`,u=t`
  padding: 0 1.6rem;
  min-height: ${({size:e})=>e==="small"?"2.8":e==="large"?"4.8":"4.0"}rem;
  background: #fff;
  border-right: 0.1rem solid ${r.palette.pale};

  &:first-child {
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    border-left: 0;
  }
  &:last-child {
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    border-right: 0;
  }

  &[data-selected=true] {
    background: ${r.palette.neutralLight};
  }
  &:hover:not([data-selected=true]) {
    background: ${r.palette.neutralLighter};
  }
`,f=t`
  [role="tablist"] {
    ${p}
  }

  [role="tab"] {
    ${u}
  }
`,h=t`
  &[data-orientation="horizontal"] [role="tablist"] {
    border-bottom: 0.1rem solid ${r.palette.pale};
  }

  [role="tab"] {
    padding: 0 1.6rem;
    height: ${({size:e})=>e==="small"?"2.9":"4.8"}rem;
    border-bottom: 0.4rem solid transparent;

    &[data-selected=true], &:hover {
      border-color: ${b.darkGreen};
    }
  }
`,$=d(i)`
  [role="tablist"] {
    ${m}
  }

  [role="tab"] {
    ${c}
  }

  ${e=>e.variant==="button-bar"?f:h}
`,w=({variant:e,size:o="medium",className:a,children:s,...l})=>n($,{variant:e,size:o,className:a,...l,children:s});export{w as T,c as a,p as b,u as c,m as t};
