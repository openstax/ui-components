import{s as e,j as o,a as r}from"./index-ed625cde.js";import{T as m}from"./Tooltip-1a4e873c.js";import"./Button-a7ff1a96.js";import"./useFocusRing-cc05e034.js";import"./Hidden-f9091ba8.js";import"./useButton-a8d8fc83.js";import"./OverlayArrow-310e1115.js";import"./context-bcf03603.js";import"./Info-97dca5c3.js";/* empty css              */const n=e.div`
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
