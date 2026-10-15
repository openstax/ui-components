import{s as i,a as o,j as e}from"./index-b8fecdff.js";import{T as m}from"./Tooltip-30b78e0a.js";import"./Button-53c3df22.js";import"./useFocusRing-8b6330ef.js";import"./Hidden-67b3a137.js";import"./useFocusable-01bf876d.js";import"./useButton-f758c6e3.js";import"./OverlayArrow-7fb5ef0b.js";import"./context-1decece7.js";import"./useControlledState-13c08256.js";import"./Info-8bb291b8.js";/* empty css              */const n=i.div`
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
