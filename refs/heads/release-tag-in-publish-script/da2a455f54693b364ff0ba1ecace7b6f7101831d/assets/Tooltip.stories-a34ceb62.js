import{s as i,a as o,j as e}from"./index-1e01fbdd.js";import{T as m}from"./Tooltip-cee76a46.js";import"./Button-fcbaeefd.js";import"./useFocusRing-d80d6e1e.js";import"./Hidden-6fadf26e.js";import"./useFocusable-44df4c74.js";import"./useButton-4de269ed.js";import"./OverlayArrow-27eabfee.js";import"./context-e0238528.js";import"./useControlledState-759b02f5.js";import"./Info-bd5ec63b.js";/* empty css              */const n=i.div`
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
