import{s as i,a as o,j as e}from"./index-ea45e12e.js";import{T as m}from"./Tooltip-4f59e3c9.js";import"./Button-ae4eccaa.js";import"./useFocusRing-593f64fb.js";import"./Hidden-0e76cc2d.js";import"./useFocusable-b74d1f40.js";import"./useButton-e4bb3c5b.js";import"./OverlayArrow-4b70a72f.js";import"./context-65469a48.js";import"./useControlledState-210b279d.js";import"./Info-a200c5ee.js";/* empty css              */const n=i.div`
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
