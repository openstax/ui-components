import{s as i,a as o,j as e}from"./index-f374ba2d.js";import{T as m}from"./Tooltip-f064e53b.js";import"./Button-9f770b51.js";import"./useFocusRing-ccf85242.js";import"./Hidden-e488aa45.js";import"./useFocusable-466db065.js";import"./useButton-deb6abe8.js";import"./OverlayArrow-9d62b9b8.js";import"./context-748a829a.js";import"./useControlledState-758aaab8.js";import"./Info-5692dcd6.js";/* empty css              */const n=i.div`
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
