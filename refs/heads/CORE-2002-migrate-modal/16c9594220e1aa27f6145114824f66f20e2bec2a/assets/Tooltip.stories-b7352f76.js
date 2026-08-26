import{s as e,j as o,a as r}from"./index-465937a0.js";import{T as m}from"./Tooltip-772c7c96.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-e8801a15.js";import"./useFocusRing-36be91e7.js";import"./context-b686fbb5.js";import"./useButton-6ce4abf3.js";import"./OverlayArrow-c4600e30.js";import"./Info-5fb6b5f6.js";const n=e.div`
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
