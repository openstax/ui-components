import{s as e,j as o,a as r}from"./index-82f5fe56.js";import{T as m}from"./Tooltip-688403fe.js";import"./Button-f4d5d6e4.js";import"./useFocusRing-c70b944e.js";import"./Hidden-61d42590.js";import"./useButton-09974b53.js";import"./OverlayArrow-c3db191f.js";import"./context-b75d7417.js";import"./Info-0d4c8601.js";import"./palette-97ed00c9.js";const n=e.div`
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
