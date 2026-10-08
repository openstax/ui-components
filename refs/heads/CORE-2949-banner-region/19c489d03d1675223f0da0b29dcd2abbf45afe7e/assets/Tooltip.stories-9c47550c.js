import{s as i,a as o,j as r}from"./index-27a37ae4.js";import{T as m}from"./Tooltip-451a2c5d.js";import"./Button-a0e42173.js";import"./useFocusRing-992a72ab.js";import"./Hidden-5f062f40.js";import"./useFocusable-1f85ae3d.js";import"./useButton-4b50a776.js";import"./OverlayArrow-0581deb9.js";import"./context-74b30e95.js";import"./Info-dc3d3cb8.js";/* empty css              */const n=i.div`
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
