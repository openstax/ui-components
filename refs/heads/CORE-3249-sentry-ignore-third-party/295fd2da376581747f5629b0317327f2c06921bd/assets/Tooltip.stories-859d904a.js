import{s as i,a as o,j as e}from"./index-0c280f7c.js";import{T as m}from"./Tooltip-7e7c22cb.js";import"./Button-32f64c43.js";import"./useFocusRing-6b7e2460.js";import"./Hidden-0a744609.js";import"./useFocusable-5b2c2bba.js";import"./useButton-741d9e9f.js";import"./OverlayArrow-cc2d8b16.js";import"./context-92b4f1db.js";import"./useControlledState-9a4a028f.js";import"./Info-29bab7bd.js";/* empty css              */const n=i.div`
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
