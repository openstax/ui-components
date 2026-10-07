import{s as i,j as o,a as r}from"./index-bd92b255.js";import{T as m}from"./Tooltip-0e4f8743.js";import"./Button-4af6cff0.js";import"./useFocusRing-cbdcb9a8.js";import"./Hidden-f034e07e.js";import"./useFocusable-0fec7d9c.js";import"./useButton-05c5631a.js";import"./OverlayArrow-963bac52.js";import"./context-457cfff1.js";import"./useControlledState-bacb7a53.js";import"./Info-c1b32c2a.js";import"./palette-97ed00c9.js";const n=i.div`
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
`,b=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default};
