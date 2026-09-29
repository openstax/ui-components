import{s as i,j as o,a as r}from"./index-a936e27b.js";import{T as m}from"./Tooltip-e3cabd62.js";import"./Button-98f0b032.js";import"./useFocusRing-f4f796d0.js";import"./Hidden-724d29b3.js";import"./useButton-9e503eee.js";import"./OverlayArrow-77d1f7c6.js";import"./context-790c492a.js";import"./Info-757b6b2c.js";import"./palette-97ed00c9.js";const n=i.div`
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
`,b=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default};
