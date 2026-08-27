import{s as e,j as o,a as r}from"./index-574c3e39.js";import{T as m}from"./Tooltip-66371ee2.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-0129c793.js";import"./useFocusRing-bb0d694b.js";import"./context-e65fd97a.js";import"./useButton-32f08e5a.js";import"./OverlayArrow-3da9df34.js";import"./Info-802561a0.js";const n=e.div`
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
