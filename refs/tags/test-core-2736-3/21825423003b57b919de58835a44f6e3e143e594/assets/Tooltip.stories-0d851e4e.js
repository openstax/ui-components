import{s as e,j as o,a as r}from"./index-5d8381fa.js";import{T as m}from"./Tooltip-9c6e5ca8.js";import"./Button-b38cd737.js";import"./useFocusRing-00053998.js";import"./Hidden-a3b05456.js";import"./useButton-72d0cc9e.js";import"./OverlayArrow-84f53a0b.js";import"./context-f3b20c30.js";import"./Info-7030fced.js";/* empty css              */const n=e.div`
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
