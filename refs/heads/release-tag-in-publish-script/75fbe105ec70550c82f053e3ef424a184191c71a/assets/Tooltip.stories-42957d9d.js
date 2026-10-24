import{s as i,a as o,j as e}from"./index-266ef8db.js";import{T as m}from"./Tooltip-bdb440cf.js";import"./Button-672f8f8b.js";import"./useFocusRing-ab7e78ca.js";import"./Hidden-b012efe4.js";import"./useFocusable-fa7bc260.js";import"./useButton-6dfea2de.js";import"./OverlayArrow-e5ecf46c.js";import"./context-2d520729.js";import"./useControlledState-7775b49e.js";import"./Info-a8f14644.js";/* empty css              */const n=i.div`
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
