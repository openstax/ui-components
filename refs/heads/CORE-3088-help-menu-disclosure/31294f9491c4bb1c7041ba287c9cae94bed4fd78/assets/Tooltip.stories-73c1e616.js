import{s as i,a as o,j as e}from"./index-5950e146.js";import{T as m}from"./Tooltip-c9145c5e.js";import"./Button-cf4a82bb.js";import"./useFocusRing-40463e44.js";import"./Hidden-cb6025e9.js";import"./useFocusable-c3fe0d4d.js";import"./useButton-f5548b59.js";import"./OverlayArrow-7cd4c080.js";import"./context-0af5abaa.js";import"./useControlledState-3927e483.js";import"./Info-ec32894b.js";/* empty css              */const n=i.div`
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
