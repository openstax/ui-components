import{s as i,j as o,a as e}from"./index-0d6cb570.js";import{T as m}from"./Tooltip-c10c6f01.js";import"./Button-0200e275.js";import"./useFocusRing-03ec3134.js";import"./Hidden-2b99ed3b.js";import"./useFocusable-26baf001.js";import"./useButton-488b9405.js";import"./OverlayArrow-8ee3bf89.js";import"./context-ec2a9b19.js";import"./useControlledState-dde196bb.js";import"./Info-644602f7.js";/* empty css              */const n=i.div`
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
