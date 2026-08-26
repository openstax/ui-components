import{s as e,j as o,a as r}from"./index-f0add398.js";import{T as m}from"./Tooltip-0bb2028b.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-292b7e53.js";import"./useFocusRing-ac7f6a4f.js";import"./context-1e6d14eb.js";import"./useButton-63415e35.js";import"./OverlayArrow-a727c75d.js";import"./Info-cff59b6f.js";const n=e.div`
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
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
