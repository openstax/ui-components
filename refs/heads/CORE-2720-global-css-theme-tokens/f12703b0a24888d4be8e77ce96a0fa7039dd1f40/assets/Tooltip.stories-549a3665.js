import{s as e,j as o,a as r}from"./index-93d17b08.js";import{T as m}from"./Tooltip-bd10d20b.js";import"./Button-c66352ae.js";import"./useFocusRing-77bb4959.js";import"./Hidden-3663fa08.js";import"./useButton-e26933d1.js";import"./OverlayArrow-a7c74689.js";import"./context-bcc8d5e4.js";import"./Info-443491c2.js";/* empty css              */const n=e.div`
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
