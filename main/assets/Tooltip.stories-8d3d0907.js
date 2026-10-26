import{s as i,a as o,j as e}from"./index-a6a90855.js";import{T as m}from"./Tooltip-c3adc249.js";import"./Button-df33454e.js";import"./useFocusRing-0e591b14.js";import"./Hidden-1a968270.js";import"./useFocusable-e32e6f9f.js";import"./useButton-538983e3.js";import"./OverlayArrow-b463f484.js";import"./context-856ff208.js";import"./useControlledState-44b37627.js";import"./Info-7d1c0a2f.js";/* empty css              */const n=i.div`
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
