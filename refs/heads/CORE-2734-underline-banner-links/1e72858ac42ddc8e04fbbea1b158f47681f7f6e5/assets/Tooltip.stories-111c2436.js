import{s as i,a as o,j as e}from"./index-66a26920.js";import{T as m}from"./Tooltip-a9a3d63e.js";import"./Button-34510a07.js";import"./useFocusRing-990ce471.js";import"./Hidden-20b05c83.js";import"./useFocusable-30896c60.js";import"./useButton-d30272f0.js";import"./OverlayArrow-fa74d023.js";import"./context-977f68b2.js";import"./useControlledState-648466f9.js";import"./Info-fad419e4.js";/* empty css              */const n=i.div`
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
