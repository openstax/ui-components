import{s as e,j as o,a as r}from"./index-577d0a5a.js";import{T as m}from"./Tooltip-281fcf9d.js";import"./Button-7c6f3ab8.js";import"./useFocusRing-7bbbd5d4.js";import"./Hidden-085b841a.js";import"./useButton-824a4808.js";import"./OverlayArrow-6cc77e74.js";import"./context-c4ef1062.js";import"./Info-1006e5f0.js";/* empty css              */const n=e.div`
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
