import{s as e,j as o,a as r}from"./index-01aab04e.js";import{T as m}from"./Tooltip-f9f784b4.js";import"./Button-d37e2815.js";import"./useFocusRing-92e9968c.js";import"./Hidden-f60f1569.js";import"./useButton-0721e1ed.js";import"./OverlayArrow-98e46849.js";import"./context-499f7fac.js";import"./Info-df8f5935.js";/* empty css              */const n=e.div`
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
