import{s as e,j as o,a as r}from"./index-488da6f8.js";import{T as m}from"./Tooltip-f53869b6.js";import"./Button-dfc44c5a.js";import"./useFocusRing-30a5665f.js";import"./Hidden-9924c5f3.js";import"./useButton-3f1474bd.js";import"./OverlayArrow-08eb8998.js";import"./context-cab88c1f.js";import"./Info-0353b357.js";import"./palette-12edeb86.js";const n=e.div`
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
