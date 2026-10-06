import{s as i,a as o,j as r}from"./index-9c04b4c7.js";import{T as m}from"./Tooltip-e6a0952f.js";import"./Button-3993b322.js";import"./useFocusRing-6fa5e94c.js";import"./Hidden-db2cdcfa.js";import"./useFocusable-d717dcb0.js";import"./useButton-21c3a2dc.js";import"./OverlayArrow-3a118172.js";import"./context-7bf58f6a.js";import"./Info-deaa4d99.js";import"./palette-97ed00c9.js";const n=i.div`
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
