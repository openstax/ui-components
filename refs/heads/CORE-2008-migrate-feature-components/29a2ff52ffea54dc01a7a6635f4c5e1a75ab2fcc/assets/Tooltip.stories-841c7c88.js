import{s as e,j as o,a as r}from"./index-1912049b.js";import{T as m}from"./Tooltip-173c8c3b.js";import"./Button-ecc9a0a1.js";import"./useFocusRing-c92e3d1f.js";import"./Hidden-832715c7.js";import"./useButton-8b79c930.js";import"./OverlayArrow-e6409473.js";import"./context-ca482b50.js";import"./Info-e2e01a22.js";/* empty css              */const n=e.div`
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
