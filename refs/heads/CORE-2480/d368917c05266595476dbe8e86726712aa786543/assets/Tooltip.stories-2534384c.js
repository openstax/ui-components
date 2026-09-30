import{s as i,j as o,a as r}from"./index-f2941dde.js";import{T as m}from"./Tooltip-6e4177f0.js";import"./Button-fd639e1f.js";import"./useFocusRing-eede776b.js";import"./Hidden-b6d91f75.js";import"./useFocusable-2876fc75.js";import"./useButton-61f48e81.js";import"./OverlayArrow-995b8831.js";import"./context-60487b4f.js";import"./Info-41b62de9.js";import"./palette-97ed00c9.js";const n=i.div`
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
