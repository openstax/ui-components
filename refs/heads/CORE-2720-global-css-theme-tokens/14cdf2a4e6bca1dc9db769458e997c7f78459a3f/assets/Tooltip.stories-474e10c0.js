import{s as e,j as o,a as r}from"./index-a5104ed9.js";import{T as m}from"./Tooltip-17d2682b.js";import"./Button-5df05487.js";import"./useFocusRing-b302a674.js";import"./Hidden-b0c48dfc.js";import"./useButton-654bcf8a.js";import"./OverlayArrow-79eaf2ea.js";import"./context-7d36c235.js";import"./Info-3bb07f36.js";/* empty css              */const n=e.div`
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
