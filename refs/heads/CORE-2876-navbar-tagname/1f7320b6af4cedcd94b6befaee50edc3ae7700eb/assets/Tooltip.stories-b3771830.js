import{s as e,j as o,a as r}from"./index-0469ff16.js";import{T as m}from"./Tooltip-78e0fb22.js";import"./Button-5ba2cf29.js";import"./useFocusRing-27bb6ddc.js";import"./Hidden-0ba783c3.js";import"./useButton-4e82abba.js";import"./OverlayArrow-b2d94b53.js";import"./context-e96184e4.js";import"./Info-0bf9426f.js";import"./palette-12edeb86.js";const n=e.div`
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
