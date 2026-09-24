import{s as e,j as o,a as r}from"./index-105cf361.js";import{T as m}from"./Tooltip-cf0d8448.js";import"./Button-c216bf22.js";import"./useFocusRing-08846fa7.js";import"./Hidden-543c64b4.js";import"./useButton-55de3365.js";import"./OverlayArrow-8502c593.js";import"./context-537903f1.js";import"./Info-27972f05.js";import"./palette-97ed00c9.js";const n=e.div`
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
