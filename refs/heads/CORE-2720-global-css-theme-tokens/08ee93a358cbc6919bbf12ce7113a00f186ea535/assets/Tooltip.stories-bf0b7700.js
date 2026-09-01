import{s as e,j as o,a as r}from"./index-ce89b5cf.js";import{T as m}from"./Tooltip-bb5a0c4b.js";import"./Button-62eb0919.js";import"./useFocusRing-9253c5ae.js";import"./Hidden-77c3ea3b.js";import"./useButton-f664661f.js";import"./OverlayArrow-1daecf92.js";import"./context-d6df7c80.js";import"./Info-1a04065a.js";/* empty css              */const n=e.div`
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
