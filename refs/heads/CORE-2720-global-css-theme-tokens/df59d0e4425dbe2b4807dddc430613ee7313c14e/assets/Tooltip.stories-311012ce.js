import{s as e,j as o,a as r}from"./index-8df119fb.js";import{T as m}from"./Tooltip-e8e3ef03.js";import"./Button-bb486c23.js";import"./useFocusRing-1fc32b3f.js";import"./Hidden-f5191ecf.js";import"./useButton-dff11677.js";import"./OverlayArrow-74dc1068.js";import"./context-2b32887b.js";import"./Info-a254a734.js";/* empty css              */const n=e.div`
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
