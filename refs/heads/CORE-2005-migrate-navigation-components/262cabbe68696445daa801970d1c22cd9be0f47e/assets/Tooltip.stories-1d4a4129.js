import{s as e,j as o,a as r}from"./index-9a095811.js";import{T as m}from"./Tooltip-5cffce94.js";import"./Button-6a470fb8.js";import"./useFocusRing-494ec84e.js";import"./Hidden-7e906c98.js";import"./useButton-19451389.js";import"./OverlayArrow-e051cb54.js";import"./context-dada6add.js";import"./Info-a69ac5e9.js";import"./palette-97ed00c9.js";const n=e.div`
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
