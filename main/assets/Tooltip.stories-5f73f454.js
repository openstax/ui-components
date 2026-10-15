import{s as i,a as o,j as e}from"./index-117e0f76.js";import{T as m}from"./Tooltip-b846925c.js";import"./Button-7993b2a6.js";import"./useFocusRing-8126d61d.js";import"./Hidden-7934663d.js";import"./useFocusable-9499235a.js";import"./useButton-cdbaf336.js";import"./OverlayArrow-2f614c76.js";import"./context-0a5cca6b.js";import"./useControlledState-cfd1d50d.js";import"./Info-0b0f7610.js";/* empty css              */const n=i.div`
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
