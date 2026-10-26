import{s as i,a as o,j as e}from"./index-eb3199b3.js";import{T as m}from"./Tooltip-e1fe19ee.js";import"./Button-889d0f85.js";import"./useFocusRing-5d483f1e.js";import"./Hidden-e35fdb80.js";import"./useFocusable-2b250a66.js";import"./useButton-0f1f9a46.js";import"./OverlayArrow-cb4082c5.js";import"./context-359725ed.js";import"./useControlledState-7b99286f.js";import"./Info-e952651b.js";/* empty css              */const n=i.div`
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
