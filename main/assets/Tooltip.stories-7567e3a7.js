import{s as i,a as o,j as e}from"./index-301a5f24.js";import{T as m}from"./Tooltip-beafed2d.js";import"./Button-446f9caa.js";import"./useFocusRing-c387590d.js";import"./Hidden-593b1a97.js";import"./useFocusable-afe574ab.js";import"./useButton-b62dc471.js";import"./OverlayArrow-510089c0.js";import"./context-18128ae1.js";import"./useControlledState-33436529.js";import"./Info-b65341d2.js";/* empty css              */const n=i.div`
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
