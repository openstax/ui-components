import{s as i,j as o,a as r}from"./index-fae01428.js";import{T as m}from"./Tooltip-4dd21852.js";import"./Button-fc073e87.js";import"./useFocusRing-27719187.js";import"./Hidden-c9097199.js";import"./useFocusable-3c0bf5d0.js";import"./useButton-ee84dead.js";import"./OverlayArrow-9c1e0a59.js";import"./context-c624e693.js";import"./Info-218ff475.js";import"./palette-97ed00c9.js";/* empty css              */const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,b=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default};
