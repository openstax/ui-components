import{s as e,j as o,a as r}from"./index-938a0573.js";import{T as m}from"./Tooltip-b8c710cf.js";import"./Button-39ff9b08.js";import"./useFocusRing-5f823fca.js";import"./Hidden-57e62661.js";import"./useButton-63db7dd1.js";import"./OverlayArrow-29401119.js";import"./context-a5de5510.js";import"./Info-559650fa.js";/* empty css              */const n=e.div`
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
