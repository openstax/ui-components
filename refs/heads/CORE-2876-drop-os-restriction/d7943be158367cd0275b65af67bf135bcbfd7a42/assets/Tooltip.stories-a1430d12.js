import{s as e,j as o,a as r}from"./index-d837c786.js";import{T as m}from"./Tooltip-f65101e7.js";import"./Button-303fd171.js";import"./useFocusRing-35227714.js";import"./Hidden-d7f00e23.js";import"./useButton-433c2813.js";import"./OverlayArrow-f7b9c7df.js";import"./context-8a842a78.js";import"./Info-5e7a6e47.js";import"./palette-97ed00c9.js";const n=e.div`
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
