import{s as e,j as o,a as r}from"./index-4d5f071c.js";import{T as m}from"./Tooltip-0d824417.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-e6758852.js";import"./useFocusRing-ed504e30.js";import"./context-303e5aef.js";import"./useButton-ef08d7ba.js";import"./OverlayArrow-18ae2c13.js";import"./Info-b5b89ad2.js";const n=e.div`
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
