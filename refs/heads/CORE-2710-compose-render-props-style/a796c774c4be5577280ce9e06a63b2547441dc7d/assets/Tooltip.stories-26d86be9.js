import{s as e,j as o,a as r}from"./index-2f1dced6.js";import{T as m}from"./Tooltip-c77ace63.js";import"./Button-0793abc8.js";import"./useFocusRing-195e9c48.js";import"./Hidden-19a24562.js";import"./useButton-96bcd2da.js";import"./OverlayArrow-b355d765.js";import"./context-ab6f28cc.js";import"./Info-ee82fa77.js";import"./palette-12edeb86.js";const n=e.div`
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
