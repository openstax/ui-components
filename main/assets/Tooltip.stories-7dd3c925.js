import{s as i,a as o,j as e}from"./index-ce96a072.js";import{T as m}from"./Tooltip-f6f95aa4.js";import"./Button-25be2b20.js";import"./useFocusRing-856485a0.js";import"./Hidden-d9f92955.js";import"./useFocusable-4234a52f.js";import"./useButton-39974807.js";import"./OverlayArrow-b4c1a784.js";import"./context-3ae1ee90.js";import"./useControlledState-627b6ee0.js";import"./Info-6b44ad06.js";/* empty css              */const n=i.div`
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
