import{s as i,a as o,j as e}from"./index-81dae33e.js";import{T as m}from"./Tooltip-43366754.js";import"./Button-b228d368.js";import"./useFocusRing-933936c3.js";import"./Hidden-f8802454.js";import"./useFocusable-f5dbf1fd.js";import"./useButton-aae4f8ff.js";import"./OverlayArrow-ea069b73.js";import"./context-de6eb7bb.js";import"./useControlledState-afd0fc81.js";import"./Info-1b665283.js";/* empty css              */const n=i.div`
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
