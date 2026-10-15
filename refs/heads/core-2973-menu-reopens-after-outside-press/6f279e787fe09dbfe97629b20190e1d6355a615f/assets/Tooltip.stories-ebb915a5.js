import{s as i,a as o,j as e}from"./index-75fe0fb6.js";import{T as m}from"./Tooltip-1ee32a36.js";import"./Button-74647113.js";import"./useFocusRing-1bad8349.js";import"./Hidden-ae4331c9.js";import"./useFocusable-33259c04.js";import"./useButton-87370bb6.js";import"./OverlayArrow-6181c923.js";import"./context-e92ebf32.js";import"./useControlledState-e72ddbd6.js";import"./Info-571445eb.js";/* empty css              */const n=i.div`
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
