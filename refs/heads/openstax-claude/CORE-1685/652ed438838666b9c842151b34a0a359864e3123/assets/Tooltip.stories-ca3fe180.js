import{s as e,j as o,a as r}from"./index-29e5d55f.js";import{T as m}from"./Tooltip-db438ca6.js";import"./Button-48a0500c.js";import"./useFocusRing-6000b397.js";import"./Hidden-a03ca6e2.js";import"./useButton-42fa0005.js";import"./OverlayArrow-de1d480b.js";import"./context-ea524128.js";import"./Info-0863c526.js";/* empty css              */const n=e.div`
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
