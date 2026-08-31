import{s as e,j as o,a as r}from"./index-b5f085ea.js";import{T as m}from"./Tooltip-3dd70e86.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-82b259a0.js";import"./useFocusRing-3bafb743.js";import"./context-7121fb22.js";import"./useButton-c7bbb411.js";import"./OverlayArrow-61d5883d.js";import"./Info-c93473d6.js";const n=e.div`
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
