import{s as e,j as o,a as r}from"./index-9fb4cd63.js";import{T as m}from"./Tooltip-a045b126.js";import"./Button-823a2086.js";import"./useFocusRing-c352cff4.js";import"./Hidden-b631cc33.js";import"./useButton-c7e0e558.js";import"./OverlayArrow-78bbfe23.js";import"./context-8b078936.js";import"./Info-1397b870.js";import"./palette-12edeb86.js";const n=e.div`
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
