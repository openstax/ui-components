import{s as e,j as o,a as r}from"./index-d7519afc.js";import{T as m}from"./Tooltip-d9a5bb13.js";import"./Button-eebf1d14.js";import"./useFocusRing-49433bf0.js";import"./Hidden-f70030cb.js";import"./useButton-92a72785.js";import"./OverlayArrow-407c4ce3.js";import"./context-dd8ab28d.js";import"./Info-c1943850.js";import"./palette-97ed00c9.js";const n=e.div`
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
