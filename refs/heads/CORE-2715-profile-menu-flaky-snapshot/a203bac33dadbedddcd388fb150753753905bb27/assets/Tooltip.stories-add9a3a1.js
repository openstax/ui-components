import{s as e,j as o,a as r}from"./index-469574e6.js";import{T as m}from"./Tooltip-b4a5d5f7.js";import"./Button-587fb9de.js";import"./useFocusRing-ea55d817.js";import"./Hidden-43588595.js";import"./useButton-66e58125.js";import"./OverlayArrow-7316f37a.js";import"./context-ee644a14.js";import"./Info-294d9565.js";import"./palette-12edeb86.js";const n=e.div`
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
