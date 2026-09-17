import{s as e,j as o,a as r}from"./index-dbc5fb1d.js";import{T as m}from"./Tooltip-3ad89b1e.js";import"./Button-fc1fcd90.js";import"./useFocusRing-8475ecd7.js";import"./Hidden-3e61f465.js";import"./useButton-3f85f235.js";import"./OverlayArrow-c3b0254d.js";import"./context-9100049f.js";import"./Info-1629616b.js";import"./palette-97ed00c9.js";const n=e.div`
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
