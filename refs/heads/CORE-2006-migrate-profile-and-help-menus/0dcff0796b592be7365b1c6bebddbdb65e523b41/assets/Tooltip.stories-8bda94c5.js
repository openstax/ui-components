import{s as e,j as o,a as r}from"./index-902f1469.js";import{T as m}from"./Tooltip-25e87a3a.js";import"./theme-8bbc88f0.js";import"./palette-f868513b.js";import"./Button-3c404b9a.js";import"./useFocusRing-66f2b1cb.js";import"./context-5ec8525c.js";import"./useButton-7d405c6c.js";import"./OverlayArrow-af645a22.js";import"./Info-a935cdf2.js";const n=e.div`
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
