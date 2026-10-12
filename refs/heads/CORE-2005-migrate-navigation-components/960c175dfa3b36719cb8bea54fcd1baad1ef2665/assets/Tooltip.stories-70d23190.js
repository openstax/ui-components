import{s as i,a as o,j as e}from"./index-60b6f9c9.js";import{T as m}from"./Tooltip-8e994b6b.js";import"./Button-15bb915a.js";import"./useFocusRing-b6e01360.js";import"./Hidden-0ceb1aee.js";import"./useFocusable-295c9130.js";import"./useButton-9134060f.js";import"./OverlayArrow-3dd4812e.js";import"./context-6034f8b3.js";import"./useControlledState-4437c678.js";import"./Info-8abc388f.js";/* empty css              */const n=i.div`
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
