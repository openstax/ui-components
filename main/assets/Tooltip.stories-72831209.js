import{s as i,a as o,j as e}from"./index-6797edcb.js";import{T as m}from"./Tooltip-20bafabd.js";import"./Button-5bc7bb33.js";import"./useFocusRing-45d2af01.js";import"./Hidden-f939bee1.js";import"./useFocusable-b2da8519.js";import"./useButton-ae420482.js";import"./OverlayArrow-5fba0e85.js";import"./context-eb884c4f.js";import"./useControlledState-58ff23b9.js";import"./Info-9c9a63ca.js";/* empty css              */const n=i.div`
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
