import{s as i,a as o,j as e}from"./index-db9fa2de.js";import{T as m}from"./Tooltip-98b7a7ed.js";import"./Button-e1403399.js";import"./useFocusRing-2d6e1895.js";import"./Hidden-655b8231.js";import"./useFocusable-bf24590d.js";import"./useButton-9f058b00.js";import"./OverlayArrow-8edc8392.js";import"./context-10b6bf7c.js";import"./useControlledState-58ca2ecf.js";import"./Info-92732426.js";/* empty css              */const n=i.div`
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
