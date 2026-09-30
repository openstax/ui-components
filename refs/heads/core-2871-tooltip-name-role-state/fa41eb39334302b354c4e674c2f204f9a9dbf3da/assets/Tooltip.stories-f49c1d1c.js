import{s as i,j as o,a as r}from"./index-8d70f20b.js";import{T as m}from"./Tooltip-3ede4469.js";import"./Button-4191f8e2.js";import"./useFocusRing-73571b20.js";import"./Hidden-bc5e3db7.js";import"./useFocusable-b85a5788.js";import"./useButton-8205b163.js";import"./OverlayArrow-cbd79bc4.js";import"./context-286df89d.js";import"./Info-a6d87b5d.js";import"./palette-97ed00c9.js";const n=i.div`
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
