import{s as e,j as o,a as r}from"./index-82ae8bbf.js";import{T as m}from"./Tooltip-14ec4110.js";import"./Button-6aeeda0e.js";import"./useFocusRing-6af8ce7d.js";import"./Hidden-a42d9e9a.js";import"./useButton-9098b094.js";import"./OverlayArrow-4d99f132.js";import"./context-48143e3d.js";import"./Info-414bc9f7.js";import"./palette-12edeb86.js";const n=e.div`
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
