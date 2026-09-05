import{s as e,j as o,a as r}from"./index-44d0765e.js";import{T as m}from"./Tooltip-b3a56601.js";import"./Button-f54b170f.js";import"./useFocusRing-8b9f947e.js";import"./Hidden-0957b4c4.js";import"./useButton-7ae62fcb.js";import"./OverlayArrow-99a027b8.js";import"./context-0c282fac.js";import"./Info-50cf8bc7.js";import"./palette-12edeb86.js";const n=e.div`
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
