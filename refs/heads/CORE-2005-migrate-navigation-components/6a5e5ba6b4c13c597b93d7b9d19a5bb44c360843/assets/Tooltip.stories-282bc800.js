import{s as i,a as o,j as e}from"./index-2cbd6bb1.js";import{T as m}from"./Tooltip-9bc55d30.js";import"./Button-e5bde036.js";import"./useFocusRing-d048c8ef.js";import"./Hidden-e58a571c.js";import"./useFocusable-5b8b260f.js";import"./useButton-d2bf02b7.js";import"./OverlayArrow-fa3be30b.js";import"./context-1c0d232e.js";import"./useControlledState-da326e8c.js";import"./Info-907290e7.js";/* empty css              */const n=i.div`
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
