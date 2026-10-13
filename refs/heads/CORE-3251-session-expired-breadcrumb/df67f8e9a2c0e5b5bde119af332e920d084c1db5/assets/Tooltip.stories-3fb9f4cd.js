import{s as i,a as o,j as e}from"./index-7008f58e.js";import{T as m}from"./Tooltip-0f842324.js";import"./Button-2e77ce5f.js";import"./useFocusRing-a145b4f7.js";import"./Hidden-1e1aa6c7.js";import"./useFocusable-fe8e4572.js";import"./useButton-72573b7d.js";import"./OverlayArrow-f803ac5b.js";import"./context-ed4bbdd4.js";import"./useControlledState-1dfe739a.js";import"./Info-9891677b.js";/* empty css              */const n=i.div`
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
