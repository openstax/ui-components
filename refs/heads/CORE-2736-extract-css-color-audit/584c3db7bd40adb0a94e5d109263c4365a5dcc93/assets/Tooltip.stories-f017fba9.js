import{s as e,j as o,a as r}from"./index-82f51220.js";import{T as m}from"./Tooltip-50044fac.js";import"./Button-512b74c8.js";import"./useFocusRing-0468a4fb.js";import"./Hidden-185278e9.js";import"./useButton-cc3aa4a5.js";import"./OverlayArrow-abf73f10.js";import"./context-a33c6e69.js";import"./Info-422800d9.js";/* empty css              */const n=e.div`
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
