import{s as e,j as o,a as r}from"./index-48586389.js";import{T as m}from"./Tooltip-b04b02a1.js";import"./Button-8f4a3088.js";import"./useFocusRing-58ccd65f.js";import"./Hidden-ee8b7291.js";import"./useButton-03d2b8df.js";import"./OverlayArrow-5b3cc154.js";import"./context-9615daf2.js";import"./Info-063a49b8.js";/* empty css              */const n=e.div`
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
