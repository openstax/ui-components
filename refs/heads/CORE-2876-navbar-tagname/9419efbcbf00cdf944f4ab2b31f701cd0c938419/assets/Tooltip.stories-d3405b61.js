import{s as e,j as o,a as r}from"./index-8be1906f.js";import{T as m}from"./Tooltip-42c3daba.js";import"./Button-f2c3514f.js";import"./useFocusRing-4675d8b1.js";import"./Hidden-f30e54ca.js";import"./useButton-bc729b89.js";import"./OverlayArrow-5e6f0c79.js";import"./context-57ada82f.js";import"./Info-a502adbd.js";import"./palette-12edeb86.js";const n=e.div`
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
