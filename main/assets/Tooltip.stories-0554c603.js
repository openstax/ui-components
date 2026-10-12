import{s as i,a as o,j as e}from"./index-20fe01b9.js";import{T as m}from"./Tooltip-e95ff8b6.js";import"./Button-c6e9bbbe.js";import"./useFocusRing-a782d63a.js";import"./Hidden-f461d9fa.js";import"./useFocusable-61da6f43.js";import"./useButton-4f07e4a7.js";import"./OverlayArrow-d9a24e36.js";import"./context-494353b3.js";import"./useControlledState-233446bf.js";import"./Info-175b6630.js";/* empty css              */const n=i.div`
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
