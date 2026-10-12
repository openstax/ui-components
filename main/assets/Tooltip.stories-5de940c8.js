import{s as i,a as o,j as e}from"./index-faeaa272.js";import{T as m}from"./Tooltip-79f23f8a.js";import"./Button-c86d8dbe.js";import"./useFocusRing-f08ae638.js";import"./Hidden-f9c1eed1.js";import"./useFocusable-23f4e5be.js";import"./useButton-b5753c49.js";import"./OverlayArrow-d9689ee2.js";import"./context-d99a1d75.js";import"./useControlledState-b6522f0b.js";import"./Info-e2a50c07.js";/* empty css              */const n=i.div`
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
