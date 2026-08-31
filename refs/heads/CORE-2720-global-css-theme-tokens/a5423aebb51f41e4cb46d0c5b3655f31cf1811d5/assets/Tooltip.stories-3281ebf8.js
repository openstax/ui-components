import{s as e,j as o,a as r}from"./index-56567ee4.js";import{T as m}from"./Tooltip-c8c6f9ca.js";import"./Button-b1950775.js";import"./useFocusRing-f3392966.js";import"./Hidden-04362631.js";import"./useButton-ed27459c.js";import"./OverlayArrow-b4e4b37c.js";import"./context-7f757fc3.js";import"./Info-10e2514a.js";/* empty css              */const n=e.div`
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
