import{s as i,a as o,j as e}from"./index-786b2cbe.js";import{T as m}from"./Tooltip-fc0505ff.js";import"./Button-94706f6e.js";import"./useFocusRing-d158eae7.js";import"./Hidden-3a55633b.js";import"./useFocusable-d2295fbb.js";import"./useButton-7a278c33.js";import"./OverlayArrow-ce5ed694.js";import"./context-bc24a389.js";import"./useControlledState-cf16fa82.js";import"./Info-0d02f1ef.js";/* empty css              */const n=i.div`
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
