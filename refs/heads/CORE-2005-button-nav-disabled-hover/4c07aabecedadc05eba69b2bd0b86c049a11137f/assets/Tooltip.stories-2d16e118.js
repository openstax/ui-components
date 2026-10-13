import{s as i,a as o,j as e}from"./index-866acec5.js";import{T as m}from"./Tooltip-d5b332fd.js";import"./Button-e19a0e92.js";import"./useFocusRing-a1802268.js";import"./Hidden-4ca88798.js";import"./useFocusable-96b82bf9.js";import"./useButton-1e5d3e09.js";import"./OverlayArrow-f1871e77.js";import"./context-2558574f.js";import"./useControlledState-63547e82.js";import"./Info-504cdcf8.js";/* empty css              */const n=i.div`
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
