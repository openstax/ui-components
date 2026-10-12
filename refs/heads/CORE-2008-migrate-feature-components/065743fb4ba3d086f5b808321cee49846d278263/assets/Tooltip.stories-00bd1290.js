import{s as i,a as o,j as e}from"./index-f25db6dc.js";import{T as m}from"./Tooltip-def9175a.js";import"./Button-ed256d35.js";import"./useFocusRing-b01537ef.js";import"./Hidden-26992418.js";import"./useFocusable-1ba6c578.js";import"./useButton-4c626784.js";import"./OverlayArrow-9134ecc2.js";import"./context-8f59d9b9.js";import"./useControlledState-17b726ed.js";import"./Info-9495335c.js";/* empty css              */const n=i.div`
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
