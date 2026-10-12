import{s as i,a as o,j as e}from"./index-2dbb6519.js";import{T as m}from"./Tooltip-e1336bcb.js";import"./Button-b9b61518.js";import"./useFocusRing-08ff0628.js";import"./Hidden-5eec95d8.js";import"./useFocusable-1c77d520.js";import"./useButton-5579bc6e.js";import"./OverlayArrow-60ac834a.js";import"./context-a1d4a505.js";import"./useControlledState-a45cec16.js";import"./Info-18073dd2.js";/* empty css              */const n=i.div`
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
