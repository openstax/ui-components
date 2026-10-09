import{s as i,a as o,j as r}from"./index-6acc4f7b.js";import{T as m}from"./Tooltip-48c38a9f.js";import"./Button-e2664bef.js";import"./useFocusRing-cd88d2a6.js";import"./Hidden-3605fa22.js";import"./useFocusable-6043aeb9.js";import"./useButton-7dc7f274.js";import"./OverlayArrow-319f4114.js";import"./context-3784d79d.js";import"./Info-bf2f541b.js";/* empty css              */const n=i.div`
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
`,x=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
