import{s as i,a as o,j as e}from"./index-44b735c3.js";import{T as m}from"./Tooltip-a8ec8deb.js";import"./Button-595a013e.js";import"./useFocusRing-5e04559d.js";import"./Hidden-bcf524e1.js";import"./useFocusable-1ec3f4f5.js";import"./useButton-18fb014c.js";import"./OverlayArrow-8222371f.js";import"./context-32859d2c.js";import"./useControlledState-d18a0eb0.js";import"./Info-a7c88e14.js";/* empty css              */const n=i.div`
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
