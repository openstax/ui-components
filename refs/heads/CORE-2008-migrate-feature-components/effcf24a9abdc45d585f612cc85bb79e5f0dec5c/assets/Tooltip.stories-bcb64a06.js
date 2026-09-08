import{s as e,j as o,a as r}from"./index-95cff52e.js";import{T as m}from"./Tooltip-34baa4e8.js";import"./Button-58458ed3.js";import"./useFocusRing-7cc48709.js";import"./Hidden-66cd1acc.js";import"./useButton-14176c5f.js";import"./OverlayArrow-16c71e7d.js";import"./context-e6658072.js";import"./Info-a5e8f9a9.js";/* empty css              */const n=e.div`
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
