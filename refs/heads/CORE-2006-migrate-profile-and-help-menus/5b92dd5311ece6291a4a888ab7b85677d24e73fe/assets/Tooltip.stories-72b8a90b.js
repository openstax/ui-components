import{s as e,j as o,a as r}from"./index-2a2117df.js";import{T as m}from"./Tooltip-91712aeb.js";import"./theme-8bbc88f0.js";import"./palette-f868513b.js";import"./Button-56fe4b5b.js";import"./useFocusRing-fadb0d4c.js";import"./context-574cfb1c.js";import"./useButton-b9f6d9dd.js";import"./OverlayArrow-35dbceee.js";import"./Info-06dcd2cc.js";const n=e.div`
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
