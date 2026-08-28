import{s as e,j as o,a as r}from"./index-889390ef.js";import{T as m}from"./Tooltip-012e4a09.js";import"./Button-1efdd9ad.js";import"./useFocusRing-346b2f5a.js";import"./Hidden-fc318b56.js";import"./useButton-a5bd1574.js";import"./OverlayArrow-5b4a2467.js";import"./context-250399c4.js";import"./Info-b08530a0.js";import"./palette-12edeb86.js";const n=e.div`
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
