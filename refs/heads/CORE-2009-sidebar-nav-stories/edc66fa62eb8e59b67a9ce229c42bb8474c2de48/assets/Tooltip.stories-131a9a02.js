import{s as i,a as o,j as e}from"./index-0f6c71b1.js";import{T as m}from"./Tooltip-c98f2b8d.js";import"./Button-b14534ec.js";import"./useFocusRing-4957b81f.js";import"./Hidden-1ee42925.js";import"./useFocusable-c1dd99f1.js";import"./useButton-4903bada.js";import"./OverlayArrow-bbb9d3b5.js";import"./context-cf006a04.js";import"./useControlledState-188e0ac0.js";import"./Info-12aae361.js";/* empty css              */const n=i.div`
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
