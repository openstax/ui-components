import{s as i,a as o,j as e}from"./index-5459c15c.js";import{T as m}from"./Tooltip-9cbac6eb.js";import"./Button-7c50ccf4.js";import"./useFocusRing-43d2fa30.js";import"./Hidden-385b2719.js";import"./useFocusable-192c5203.js";import"./useButton-5ab5ed6d.js";import"./OverlayArrow-f6f63f8a.js";import"./context-b520589a.js";import"./useControlledState-145a74d4.js";import"./Info-75d44493.js";/* empty css              */const n=i.div`
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
