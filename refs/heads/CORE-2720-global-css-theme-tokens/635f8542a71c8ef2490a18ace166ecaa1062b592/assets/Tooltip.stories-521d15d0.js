import{s as e,j as o,a as r}from"./index-784c0539.js";import{T as m}from"./Tooltip-a5dc1b29.js";import"./Button-3d5dbe8d.js";import"./useFocusRing-7c778e48.js";import"./Hidden-8625c04a.js";import"./useButton-85002e5d.js";import"./OverlayArrow-bf386700.js";import"./context-289038d2.js";import"./Info-eda61ddc.js";/* empty css              */const n=e.div`
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
