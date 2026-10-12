import{s as i,a as o,j as e}from"./index-173fa00c.js";import{T as m}from"./Tooltip-3abcaf1b.js";import"./Button-1dd132a4.js";import"./useFocusRing-e5dac280.js";import"./Hidden-f2b2b35e.js";import"./useFocusable-053595b4.js";import"./useButton-d11634f5.js";import"./OverlayArrow-2a5544ab.js";import"./context-0a384f31.js";import"./useControlledState-0ba2d9a9.js";import"./Info-4569101a.js";/* empty css              */const n=i.div`
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
