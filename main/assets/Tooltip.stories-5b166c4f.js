import{s as i,a as o,j as e}from"./index-0eb0246a.js";import{T as m}from"./Tooltip-bced8a28.js";import"./Button-ea77891c.js";import"./useFocusRing-a7a14601.js";import"./Hidden-9e7fb7b1.js";import"./useFocusable-c9b3857e.js";import"./useButton-95bd0ffc.js";import"./OverlayArrow-ed7c0864.js";import"./context-91859994.js";import"./useControlledState-92eb449a.js";import"./Info-a689757b.js";/* empty css              */const n=i.div`
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
