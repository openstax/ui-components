import{s as e,j as o,a as r}from"./index-cf1c6d5f.js";import{T as m}from"./Tooltip-fab89863.js";import"./Button-f6fd2919.js";import"./useFocusRing-a987dc19.js";import"./Hidden-5c7b0413.js";import"./useButton-2d56cb9e.js";import"./OverlayArrow-645479df.js";import"./context-738af7f3.js";import"./Info-7e0a3b18.js";import"./palette-97ed00c9.js";const n=e.div`
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
