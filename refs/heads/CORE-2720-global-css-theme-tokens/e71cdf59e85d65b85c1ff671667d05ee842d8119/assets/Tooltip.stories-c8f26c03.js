import{s as e,j as o,a as r}from"./index-6b0d950e.js";import{T as m}from"./Tooltip-0e1d5eb4.js";import"./Button-1b57d465.js";import"./useFocusRing-5b7502c0.js";import"./Hidden-f10f926a.js";import"./useButton-be62c214.js";import"./OverlayArrow-e24f437c.js";import"./context-b2fcb141.js";import"./Info-bec11e09.js";import"./palette-12edeb86.js";const n=e.div`
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
