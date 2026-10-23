import{s as i,a as o,j as e}from"./index-5bc33caa.js";import{T as m}from"./Tooltip-7d87c3e7.js";import"./Button-ae0df760.js";import"./useFocusRing-a7446604.js";import"./Hidden-d2c6b565.js";import"./useFocusable-00649e91.js";import"./useButton-4bb42bf9.js";import"./OverlayArrow-bc8dd68d.js";import"./context-db335624.js";import"./useControlledState-7b58ae83.js";import"./Info-1c78682d.js";/* empty css              */const n=i.div`
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
