import{s as i,a as o,j as e}from"./index-c00ac1d3.js";import{T as m}from"./Tooltip-e2e8099c.js";import"./Button-e9c818ff.js";import"./useFocusRing-65faf15d.js";import"./Hidden-60aa5a92.js";import"./useFocusable-9653b284.js";import"./useButton-58bf5c9e.js";import"./OverlayArrow-f167fdc9.js";import"./context-785c469e.js";import"./useControlledState-ce1a5637.js";import"./Info-2debd2c1.js";/* empty css              */const n=i.div`
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
