import{s as e,j as o,a as r}from"./index-7b5cc3ce.js";import{T as m}from"./Tooltip-25e97d9e.js";import"./Button-977c23d0.js";import"./useFocusRing-1998ec8f.js";import"./Hidden-3f516dcd.js";import"./useButton-7ecf3fae.js";import"./OverlayArrow-21e8528c.js";import"./context-a98c0383.js";import"./Info-8716f49f.js";import"./palette-12edeb86.js";const n=e.div`
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
