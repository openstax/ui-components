import{s as i,a as o,j as e}from"./index-e3c652a5.js";import{T as m}from"./Tooltip-cb59412b.js";import"./Button-6eb4f2c3.js";import"./useFocusRing-498b294f.js";import"./Hidden-7c8d7410.js";import"./useFocusable-5019118a.js";import"./useButton-c4368a2c.js";import"./OverlayArrow-45d81623.js";import"./context-c12ccf2b.js";import"./useControlledState-68f08f2c.js";import"./Info-9578afc0.js";/* empty css              */const n=i.div`
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
