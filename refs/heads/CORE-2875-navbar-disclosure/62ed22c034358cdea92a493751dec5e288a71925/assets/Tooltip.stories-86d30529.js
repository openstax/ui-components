import{s as i,j as o,a as e}from"./index-02957cfe.js";import{T as m}from"./Tooltip-3f995a7d.js";import"./Button-6bc2bb4d.js";import"./useFocusRing-55a841ff.js";import"./Hidden-744eece3.js";import"./useFocusable-daf15a25.js";import"./useButton-25f3936b.js";import"./OverlayArrow-dc508943.js";import"./context-bd9be395.js";import"./useControlledState-f6ab2c25.js";import"./Info-19328e4e.js";/* empty css              */const n=i.div`
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
