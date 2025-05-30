import{s as e,a as o,j as r}from"./index.69df08e3.js";import{T as m}from"./Tooltip.05997b77.js";import"./theme.0ee214ef.js";import"./palette.15e4d008.js";import"./Button.module.5c547130.js";import"./useFocusRing.module.dedd9800.js";import"./useButton.module.65a63c6a.js";import"./OverlayArrow.module.534189c3.js";import"./Info.aa1950fc.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
