import{s as i,j as o,a as r}from"./index-04c65cdc.js";import{T as m}from"./Tooltip-c0414d84.js";import"./Button-d62e32aa.js";import"./useFocusRing-0eecc572.js";import"./Hidden-303ed19e.js";import"./useFocusable-c1702599.js";import"./useButton-5d0cc150.js";import"./OverlayArrow-243f8df5.js";import"./context-80f560e2.js";import"./Info-08ddb67e.js";import"./palette-97ed00c9.js";const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
