import{s as e,j as o,a as r}from"./index-f6a02c4c.js";import{T as m}from"./Tooltip-3e7aafbf.js";import"./Button-b4a76a80.js";import"./useFocusRing-e05b2c6c.js";import"./Hidden-9352d9cd.js";import"./useButton-b2d4cd0d.js";import"./OverlayArrow-b05a19b9.js";import"./context-73d85a53.js";import"./Info-906382dc.js";import"./palette-97ed00c9.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
