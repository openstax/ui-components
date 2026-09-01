import{s as e,j as o,a as r}from"./index-7ecb918d.js";import{T as m}from"./Tooltip-55f0b1b7.js";import"./Button-5fdb87c2.js";import"./useFocusRing-9972232d.js";import"./Hidden-11bef63e.js";import"./useButton-2e6cfc05.js";import"./OverlayArrow-97f54a6c.js";import"./context-0d5ee5cf.js";import"./Info-c836d42c.js";import"./palette-12edeb86.js";const n=e.div`
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
