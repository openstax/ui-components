import{s as i,a as o,j as e}from"./index-79f2e90d.js";import{T as m}from"./Tooltip-9900f414.js";import"./Button-9151465b.js";import"./useFocusRing-837e13db.js";import"./Hidden-da76a2e4.js";import"./useFocusable-94559aeb.js";import"./useButton-9345d12f.js";import"./OverlayArrow-f822de1b.js";import"./context-25ada928.js";import"./useControlledState-2a09ea9e.js";import"./Info-0f354631.js";/* empty css              */const n=i.div`
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
