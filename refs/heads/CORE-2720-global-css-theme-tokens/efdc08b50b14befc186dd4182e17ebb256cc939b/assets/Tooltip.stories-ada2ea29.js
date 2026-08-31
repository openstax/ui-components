import{s as e,j as o,a as r}from"./index-efa75cd7.js";import{T as m}from"./Tooltip-afe285e3.js";import"./Button-84d913a4.js";import"./useFocusRing-6a4277b4.js";import"./Hidden-cfd2b6ef.js";import"./useButton-43f659a6.js";import"./OverlayArrow-52f2ee4e.js";import"./context-4715abc7.js";import"./Info-1ae56b66.js";/* empty css              */const n=e.div`
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
