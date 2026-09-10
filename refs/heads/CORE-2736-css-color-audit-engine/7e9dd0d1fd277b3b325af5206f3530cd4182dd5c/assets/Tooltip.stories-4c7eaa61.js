import{s as e,j as o,a as r}from"./index-7df39650.js";import{T as m}from"./Tooltip-d8db14b1.js";import"./Button-2d79c751.js";import"./useFocusRing-e2e6766b.js";import"./Hidden-0de357a1.js";import"./useButton-6f9e6e27.js";import"./OverlayArrow-7323af13.js";import"./context-eabef428.js";import"./Info-66085b6e.js";import"./palette-12edeb86.js";const n=e.div`
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
