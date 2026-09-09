import{s as e,j as o,a as r}from"./index-a835b609.js";import{T as m}from"./Tooltip-26baeb6b.js";import"./Button-dbeab431.js";import"./useFocusRing-d7041216.js";import"./Hidden-e8ca6c27.js";import"./useButton-bbe6cf1c.js";import"./OverlayArrow-db0174ec.js";import"./context-fce45ba8.js";import"./Info-8f43a1f7.js";/* empty css              */const n=e.div`
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
