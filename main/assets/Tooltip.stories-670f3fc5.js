import{s as e,j as o,a as r}from"./index-36f2ce61.js";import{T as m}from"./Tooltip-a2108a5c.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-c6b64d09.js";import"./useFocusRing-3985217d.js";import"./context-493f8bbd.js";import"./useButton-097f6185.js";import"./OverlayArrow-91bdfdf8.js";import"./Info-140a821b.js";const n=e.div`
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
