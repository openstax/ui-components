import{s as i,a as o,j as e}from"./index-ebab9b31.js";import{T as m}from"./Tooltip-559f7736.js";import"./Button-c04ed012.js";import"./useFocusRing-fda99018.js";import"./Hidden-0366e376.js";import"./useFocusable-33513cc0.js";import"./useButton-1a98e685.js";import"./OverlayArrow-d3acb35f.js";import"./context-3b8ae380.js";import"./useControlledState-21871dde.js";import"./Info-c86c8213.js";/* empty css              */const n=i.div`
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
