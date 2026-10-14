import{s as i,a as o,j as e}from"./index-d5d89686.js";import{T as m}from"./Tooltip-e01adc61.js";import"./Button-eb386eda.js";import"./useFocusRing-25739368.js";import"./Hidden-841df4e2.js";import"./useFocusable-d39a8ea9.js";import"./useButton-a122ae0d.js";import"./OverlayArrow-b1478eb9.js";import"./context-b984cc94.js";import"./useControlledState-2c5777a4.js";import"./Info-7947407d.js";/* empty css              */const n=i.div`
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
