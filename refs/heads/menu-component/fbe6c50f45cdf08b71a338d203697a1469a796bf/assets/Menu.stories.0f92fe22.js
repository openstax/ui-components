import{a as m,b as g,c as b,d as u,e as p,f,g as I,h as a,i as l}from"./module.b1ca1f15.js";import{c as d}from"./theme.1b7e3a26.js";import{s as t,j as n,a as e}from"./index.2ba99695.js";import{N as $}from"./NavBar.e27f2cc2.js";import{T as x}from"./Tabs.1d8be2a0.js";import"./palette.15e4d008.js";const h=t(m)``,i=t(g)``,C=t(b)`
  border: none;
  background: none;
  padding: 0;
  min-height: 4rem;
  min-width: 4rem;
  height: 100%;
  display: inline-flex;
  place-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;

  img {
    max-height: 100%;
  }
`,w=t.div`
  padding: 1.6rem;
`,M=t(u)`
  margin-top: -1rem;
  border-top: 0.4rem solid ${d.palette.darkGreen};
  box-shadow: 0 0.4rem 0.4rem 0 #00000033;
  background: #fff;

  ${i} {
    font-size: 1.4rem;
    min-height: 4rem;
    padding: 0 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      background: ${d.palette.neutralLighter};
    }

    &:active {
      font-weight: bold;
    }
  }
`,c=({label:s,icon:o,...r})=>n(p,{children:[e(C,{"aria-label":s,className:r.className,...r.buttonProps,children:o?typeof o=="string"?e("img",{"aria-hidden":"true",src:o,alt:""}):o:s}),e(M,{...r.popoverProps,children:e(f,{children:r.children})})]}),v=()=>e("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M6 0.180664C2.68652 0.180664 0 2.86816 0 6.18066C0 9.49511 2.68652 12.1807 6 12.1807C9.31348 12.1807 12 9.49511 12 6.18066C12 2.86816 9.31348 0.180664 6 0.180664ZM6 2.84195C6.56119 2.84195 7.01613 3.29689 7.01613 3.85808C7.01613 4.41928 6.56119 4.87421 6 4.87421C5.43881 4.87421 4.98387 4.41928 4.98387 3.85808C4.98387 3.29689 5.43881 2.84195 6 2.84195ZM7.35484 8.98712C7.35484 9.14745 7.22485 9.27744 7.06452 9.27744H4.93548C4.77515 9.27744 4.64516 9.14745 4.64516 8.98712V8.40647C4.64516 8.24614 4.77515 8.11615 4.93548 8.11615H5.22581V6.56776H4.93548C4.77515 6.56776 4.64516 6.43777 4.64516 6.27744V5.69679C4.64516 5.53646 4.77515 5.40647 4.93548 5.40647H6.48387C6.6442 5.40647 6.77419 5.53646 6.77419 5.69679V8.11615H7.06452C7.22485 8.11615 7.35484 8.24614 7.35484 8.40647V8.98712Z",fill:"#959595"})}),y="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K",S=t(c)`
  &:hover {
    svg path {
      fill: ${d.palette.lightBlue};
    }
  }
`,j=t(c)`
  padding: 1rem;
`,N=t(i)`
  color: ${d.palette.orange};
`,Z=t.div`
  display: flex;
  height: 100%
`,T=()=>n($,{children:[e(c,{label:"Menu",children:n(w,{children:[e("button",{children:"Example button"}),e("button",{children:"Another button"})]})}),e(S,{label:"Test menu",icon:v,children:n(x,{children:[n(I,{"aria-label":"Items",children:[e(a,{id:"one",children:"Info 1"}),e(a,{id:"two",children:"Info 2"}),e(a,{id:"three",children:"Info 3"})]}),e(l,{id:"one",children:"First"}),e(l,{id:"two",children:"Second"}),e(l,{id:"three",children:"Third"})]})}),n(Z,{children:[e(c,{label:"Help",children:n(h,{children:[e(i,{children:"Open Guide"}),e(i,{children:"Contact Support"})]})}),e(j,{label:"Test menu",icon:y,children:n(h,{children:[e(i,{children:"Cool menu item"}),e(i,{children:"Really long menu item with a lot of text"}),e(N,{children:"Styled menu item"})]})})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Default};
