import{s as i,j as o,a as r}from"./index-82c6c802.js";import{T as m}from"./Tooltip-d5e0ab7b.js";import"./Button-8ee15ccf.js";import"./useFocusRing-0bc16314.js";import"./Hidden-20449589.js";import"./useFocusable-4d7c26c2.js";import"./useButton-4354ed71.js";import"./OverlayArrow-5a5502c6.js";import"./context-d1653f45.js";import"./Info-9a7c1d85.js";import"./palette-97ed00c9.js";const n=i.div`
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
