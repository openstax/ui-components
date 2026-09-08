import{s as e,j as o,a as r}from"./index-9fa36535.js";import{T as m}from"./Tooltip-288c7871.js";import"./Button-405406ba.js";import"./useFocusRing-34924ee4.js";import"./Hidden-aa435808.js";import"./useButton-651ec869.js";import"./OverlayArrow-247d3915.js";import"./context-a47b5475.js";import"./Info-bf6d6dcb.js";/* empty css              */const n=e.div`
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
