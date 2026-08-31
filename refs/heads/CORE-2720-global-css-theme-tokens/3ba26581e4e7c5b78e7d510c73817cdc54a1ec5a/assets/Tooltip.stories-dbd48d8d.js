import{s as e,j as o,a as r}from"./index-19f50d4b.js";import{T as m}from"./Tooltip-cb8a5c26.js";import"./Button-03a71992.js";import"./useFocusRing-aa44c4b3.js";import"./Hidden-abb1c533.js";import"./useButton-96c31b6e.js";import"./OverlayArrow-ab306edc.js";import"./context-cee1e766.js";import"./Info-ded6098c.js";/* empty css              */const n=e.div`
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
