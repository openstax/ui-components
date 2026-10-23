import{s as i,a as o,j as e}from"./index-80a2c051.js";import{T as m}from"./Tooltip-62df1a34.js";import"./Button-33a3c856.js";import"./useFocusRing-1afb1fbe.js";import"./Hidden-4fa899be.js";import"./useFocusable-7e2ad132.js";import"./useButton-3d87ffd3.js";import"./OverlayArrow-fda1bb8e.js";import"./context-63bf5325.js";import"./useControlledState-2eee5677.js";import"./Info-de958b82.js";/* empty css              */const n=i.div`
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
