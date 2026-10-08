import{s as i,j as o,a as r}from"./index-3d25242c.js";import{T as m}from"./Tooltip-162d83bb.js";import"./Button-66d62005.js";import"./useFocusRing-b5d84eb3.js";import"./Hidden-6562e3a6.js";import"./useFocusable-63c830c9.js";import"./useButton-fa008ffb.js";import"./OverlayArrow-cc21711d.js";import"./context-bd1db7c4.js";import"./Info-915a3ddc.js";/* empty css              */const n=i.div`
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
