import{s as e,j as o,a as r}from"./index-1ab005b2.js";import{T as m}from"./Tooltip-b81a15f2.js";import"./Button-892f7afd.js";import"./useFocusRing-c624b421.js";import"./Hidden-71ad45c6.js";import"./useButton-dd11312a.js";import"./OverlayArrow-352b6b03.js";import"./context-dd2a1838.js";import"./Info-ebd4909d.js";import"./palette-12edeb86.js";const n=e.div`
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
