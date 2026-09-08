import{s as e,j as o,a as r}from"./index-d2ebc542.js";import{T as m}from"./Tooltip-82fd0fc9.js";import"./Button-e9f92fac.js";import"./useFocusRing-b04b9460.js";import"./Hidden-260343e0.js";import"./useButton-f57ded61.js";import"./OverlayArrow-4e4b07b6.js";import"./context-b761f651.js";import"./Info-2f0fd6dc.js";/* empty css              */const n=e.div`
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
