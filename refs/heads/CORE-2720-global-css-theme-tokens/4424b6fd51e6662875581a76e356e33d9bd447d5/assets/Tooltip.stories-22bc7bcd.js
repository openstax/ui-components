import{s as e,j as o,a as r}from"./index-2e64c9fa.js";import{T as m}from"./Tooltip-bee66721.js";import"./Button-1fe60dae.js";import"./useFocusRing-bd4a2847.js";import"./Hidden-2797536d.js";import"./useButton-005dd020.js";import"./OverlayArrow-278829df.js";import"./context-b7de87ae.js";import"./Info-b0acde37.js";/* empty css              */const n=e.div`
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
