import{s as e,j as o,a as r}from"./index-eac84b02.js";import{T as m}from"./Tooltip-e635ee9a.js";import"./Button-e29a942f.js";import"./useFocusRing-ecbf1847.js";import"./Hidden-80fbdcd6.js";import"./useButton-1485832c.js";import"./OverlayArrow-f26b0e4a.js";import"./context-ee98b5ab.js";import"./Info-e7bfe977.js";/* empty css              */const n=e.div`
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
