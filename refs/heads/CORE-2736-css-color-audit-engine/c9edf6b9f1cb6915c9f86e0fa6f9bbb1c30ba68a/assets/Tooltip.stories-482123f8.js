import{s as e,j as o,a as r}from"./index-c0d8c15d.js";import{T as m}from"./Tooltip-59ecec99.js";import"./Button-ebfae897.js";import"./useFocusRing-62213e35.js";import"./Hidden-2c72bde7.js";import"./useButton-6f5e42ce.js";import"./OverlayArrow-1b1ab786.js";import"./context-ed9b31b0.js";import"./Info-c11f7b3b.js";import"./palette-12edeb86.js";const n=e.div`
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
