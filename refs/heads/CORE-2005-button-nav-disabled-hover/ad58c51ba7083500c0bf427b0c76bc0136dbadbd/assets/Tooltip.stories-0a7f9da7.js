import{s as i,a as o,j as e}from"./index-204ca62c.js";import{T as m}from"./Tooltip-90605597.js";import"./Button-cdbb1049.js";import"./useFocusRing-b817ff97.js";import"./Hidden-c6b25ad9.js";import"./useFocusable-d43aa2db.js";import"./useButton-d81a912c.js";import"./OverlayArrow-6c16d577.js";import"./context-aa650836.js";import"./useControlledState-87d5df81.js";import"./Info-1b472289.js";/* empty css              */const n=i.div`
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
