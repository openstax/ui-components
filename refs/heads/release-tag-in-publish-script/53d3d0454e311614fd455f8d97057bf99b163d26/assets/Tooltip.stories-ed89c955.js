import{s as i,a as o,j as e}from"./index-6095f590.js";import{T as m}from"./Tooltip-88ba22b2.js";import"./Button-57e79939.js";import"./useFocusRing-b3ec163a.js";import"./Hidden-09e5a876.js";import"./useFocusable-3d566331.js";import"./useButton-874e781a.js";import"./OverlayArrow-27bc34ee.js";import"./context-4e1e3f9a.js";import"./useControlledState-79473a02.js";import"./Info-3b25748f.js";/* empty css              */const n=i.div`
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
