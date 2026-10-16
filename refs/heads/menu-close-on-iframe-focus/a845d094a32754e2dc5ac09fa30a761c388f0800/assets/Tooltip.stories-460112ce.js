import{s as i,a as o,j as e}from"./index-01450b2c.js";import{T as m}from"./Tooltip-7821c551.js";import"./Button-8d13f44b.js";import"./useFocusRing-8545f646.js";import"./Hidden-84ac152f.js";import"./useFocusable-2ddeaa53.js";import"./useButton-a558328a.js";import"./OverlayArrow-10098b8f.js";import"./context-93721291.js";import"./useControlledState-b543763c.js";import"./Info-cb8a9038.js";/* empty css              */const n=i.div`
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
