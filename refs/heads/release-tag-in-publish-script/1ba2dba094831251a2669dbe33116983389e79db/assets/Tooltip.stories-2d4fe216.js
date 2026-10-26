import{s as i,a as o,j as e}from"./index-26e4c9a7.js";import{T as m}from"./Tooltip-d6a86463.js";import"./Button-13894f65.js";import"./useFocusRing-19544422.js";import"./Hidden-5c1450a3.js";import"./useFocusable-808e8d2e.js";import"./useButton-0f32f5bc.js";import"./OverlayArrow-9bc6736b.js";import"./context-e6b2471f.js";import"./useControlledState-d866a8a9.js";import"./Info-28c24963.js";/* empty css              */const n=i.div`
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
