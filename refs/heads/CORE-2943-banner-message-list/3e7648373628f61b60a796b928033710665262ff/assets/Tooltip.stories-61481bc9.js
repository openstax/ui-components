import{s as i,a as o,j as e}from"./index-276eb030.js";import{T as m}from"./Tooltip-064c912b.js";import"./Button-cec2d8af.js";import"./useFocusRing-12bddd96.js";import"./Hidden-00d38efe.js";import"./useFocusable-6e3da687.js";import"./useButton-0c631fe8.js";import"./OverlayArrow-2defb1e3.js";import"./context-62ed0a59.js";import"./useControlledState-a9abb2ef.js";import"./Info-08099392.js";/* empty css              */const n=i.div`
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
