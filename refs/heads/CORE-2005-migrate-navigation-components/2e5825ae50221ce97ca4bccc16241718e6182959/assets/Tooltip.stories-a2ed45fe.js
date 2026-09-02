import{s as e,j as o,a as r}from"./index-aa97b753.js";import{T as m}from"./Tooltip-89e29106.js";import"./Button-ff2f792a.js";import"./useFocusRing-590b3db2.js";import"./Hidden-513fe1cd.js";import"./useButton-74f5d24a.js";import"./OverlayArrow-ef39f6d6.js";import"./context-991619e5.js";import"./Info-c7046233.js";/* empty css              */const n=e.div`
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
