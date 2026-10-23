import{s as i,a as o,j as e}from"./index-0999b75c.js";import{T as m}from"./Tooltip-fc635999.js";import"./Button-6b2813f6.js";import"./useFocusRing-15c1388b.js";import"./Hidden-71712740.js";import"./useFocusable-4883a8fe.js";import"./useButton-84bcc66a.js";import"./OverlayArrow-8071e519.js";import"./context-8ae95274.js";import"./useControlledState-067a2a37.js";import"./Info-b5a1e9d0.js";/* empty css              */const n=i.div`
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
