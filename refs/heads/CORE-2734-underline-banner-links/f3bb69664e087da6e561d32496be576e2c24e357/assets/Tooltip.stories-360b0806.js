import{s as i,a as o,j as e}from"./index-2f61b72d.js";import{T as m}from"./Tooltip-f2a1ff62.js";import"./Button-b5070a04.js";import"./useFocusRing-3388cf75.js";import"./Hidden-b18c5bfb.js";import"./useFocusable-d013bb71.js";import"./useButton-309d6ebd.js";import"./OverlayArrow-5a6a14f1.js";import"./context-272fe223.js";import"./useControlledState-a9365940.js";import"./Info-4909d6bf.js";/* empty css              */const n=i.div`
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
