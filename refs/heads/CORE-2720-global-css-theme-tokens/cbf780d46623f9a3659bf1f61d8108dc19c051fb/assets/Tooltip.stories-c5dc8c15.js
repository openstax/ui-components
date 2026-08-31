import{s as e,j as o,a as r}from"./index-361a69ef.js";import{T as m}from"./Tooltip-4fcb5f36.js";import"./Button-c69ad0d2.js";import"./useFocusRing-756d490a.js";import"./Hidden-e9536434.js";import"./useButton-b3a17176.js";import"./OverlayArrow-35890460.js";import"./context-9f717169.js";import"./Info-eeb7b9bb.js";/* empty css              */const n=e.div`
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
