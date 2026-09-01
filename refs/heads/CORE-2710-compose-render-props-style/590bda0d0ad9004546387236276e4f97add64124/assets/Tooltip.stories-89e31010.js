import{s as e,j as o,a as r}from"./index-33dfc534.js";import{T as m}from"./Tooltip-08f4583a.js";import"./Button-8942e7f3.js";import"./useFocusRing-a9acb7d7.js";import"./Hidden-aa4d981a.js";import"./useButton-a7599e13.js";import"./OverlayArrow-f1f6457f.js";import"./context-4b1e3f2b.js";import"./Info-501a520f.js";import"./palette-12edeb86.js";const n=e.div`
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
