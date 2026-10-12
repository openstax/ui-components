import{s as i,a as o,j as e}from"./index-eb0e2a7b.js";import{T as m}from"./Tooltip-cc4385cf.js";import"./Button-a24e33d4.js";import"./useFocusRing-d65c5e5c.js";import"./Hidden-9ed10be4.js";import"./useFocusable-ed6315e2.js";import"./useButton-0413cd30.js";import"./OverlayArrow-2785d917.js";import"./context-89f6db8f.js";import"./useControlledState-10aa6d8c.js";import"./Info-57ba94ca.js";/* empty css              */const n=i.div`
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
