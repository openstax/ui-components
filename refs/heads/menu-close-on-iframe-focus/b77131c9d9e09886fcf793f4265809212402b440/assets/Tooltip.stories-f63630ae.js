import{s as i,a as o,j as e}from"./index-b6a40e04.js";import{T as m}from"./Tooltip-94f10e90.js";import"./Button-0d6a3cc6.js";import"./useFocusRing-2e117f97.js";import"./Hidden-361583b4.js";import"./useFocusable-feb18afd.js";import"./useButton-57a15964.js";import"./OverlayArrow-deaf31df.js";import"./context-3ce56cb0.js";import"./useControlledState-191dc725.js";import"./Info-f7436d5b.js";/* empty css              */const n=i.div`
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
