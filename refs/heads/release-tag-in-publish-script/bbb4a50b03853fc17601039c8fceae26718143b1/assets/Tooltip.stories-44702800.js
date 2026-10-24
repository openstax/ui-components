import{s as i,a as o,j as e}from"./index-95baafca.js";import{T as m}from"./Tooltip-44aed743.js";import"./Button-e39f65f9.js";import"./useFocusRing-f9f4a01b.js";import"./Hidden-b9734d08.js";import"./useFocusable-07f6b51a.js";import"./useButton-26c6fdc4.js";import"./OverlayArrow-9d151112.js";import"./context-6436d33a.js";import"./useControlledState-bd0e6bef.js";import"./Info-cc082ee1.js";/* empty css              */const n=i.div`
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
