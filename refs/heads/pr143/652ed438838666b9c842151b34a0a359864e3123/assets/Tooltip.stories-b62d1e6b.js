import{s as e,j as o,a as r}from"./index-c88d8e22.js";import{T as m}from"./Tooltip-ede9a3df.js";import"./Button-74d06b37.js";import"./useFocusRing-8afad64a.js";import"./Hidden-1449fc0d.js";import"./useButton-085a8945.js";import"./OverlayArrow-19b57bcd.js";import"./context-6d799e86.js";import"./Info-46c0d846.js";/* empty css              */const n=e.div`
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
