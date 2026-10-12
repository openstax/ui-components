import{s as i,a as o,j as e}from"./index-dbfd0ad9.js";import{T as m}from"./Tooltip-b52d5d00.js";import"./Button-b15de4c3.js";import"./useFocusRing-d79144d6.js";import"./Hidden-ba206709.js";import"./useFocusable-d2a8521a.js";import"./useButton-1446b439.js";import"./OverlayArrow-ac27701f.js";import"./context-80916188.js";import"./useControlledState-ac3c8719.js";import"./Info-9fba71bc.js";/* empty css              */const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,a=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,r)=>e(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},r))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
