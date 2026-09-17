import{s as e,j as o,a as r}from"./index-9c225ecd.js";import{T as m}from"./Tooltip-d0245354.js";import"./Button-f9f52969.js";import"./useFocusRing-579a68a1.js";import"./Hidden-7bfe2219.js";import"./useButton-7917b971.js";import"./OverlayArrow-293eb679.js";import"./context-369cf91d.js";import"./Info-dd3b8484.js";import"./palette-97ed00c9.js";const n=e.div`
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
