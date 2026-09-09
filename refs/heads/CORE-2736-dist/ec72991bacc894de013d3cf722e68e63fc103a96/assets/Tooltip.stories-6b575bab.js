import{s as e,j as o,a as r}from"./index-a8188bf7.js";import{T as m}from"./Tooltip-069ae7c7.js";import"./Button-81e2216d.js";import"./useFocusRing-3d818591.js";import"./Hidden-09044b05.js";import"./useButton-f4037bf8.js";import"./OverlayArrow-da7bd72d.js";import"./context-f9bb2257.js";import"./Info-b6c4a442.js";/* empty css              */const n=e.div`
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
