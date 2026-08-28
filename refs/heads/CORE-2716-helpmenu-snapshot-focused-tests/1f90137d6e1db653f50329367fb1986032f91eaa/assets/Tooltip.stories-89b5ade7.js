import{s as e,j as o,a as r}from"./index-1dcb9487.js";import{T as m}from"./Tooltip-b93f6b59.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-2b030ead.js";import"./useFocusRing-014af88c.js";import"./context-2d612fa7.js";import"./useButton-afea6930.js";import"./OverlayArrow-d9d73e07.js";import"./Info-c719a923.js";const n=e.div`
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
