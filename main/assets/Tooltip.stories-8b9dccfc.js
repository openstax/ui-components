import{s as e,j as o,a as r}from"./index-5d5ecec5.js";import{T as m}from"./Tooltip-c0b3b02a.js";import"./Button-0d114c95.js";import"./useFocusRing-0597b27e.js";import"./Hidden-4d907325.js";import"./useButton-7eb0e240.js";import"./OverlayArrow-e83b25a8.js";import"./context-438509ae.js";import"./Info-f23e2c96.js";import"./palette-12edeb86.js";const n=e.div`
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
