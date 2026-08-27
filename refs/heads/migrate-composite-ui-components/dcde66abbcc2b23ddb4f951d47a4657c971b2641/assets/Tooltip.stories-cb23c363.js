import{s as e,j as o,a as r}from"./index-401d3572.js";import{T as m}from"./Tooltip-385346d2.js";import"./Button-c95043ee.js";import"./useFocusRing-9cbfdfd7.js";import"./Hidden-1c73929c.js";import"./useButton-3af8ea51.js";import"./OverlayArrow-58ac7133.js";import"./context-129c94fe.js";import"./Info-c13baae7.js";import"./palette-12edeb86.js";const n=e.div`
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
