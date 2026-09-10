import{s as e,j as o,a as r}from"./index-999e77ed.js";import{T as m}from"./Tooltip-740257f3.js";import"./Button-b43f686d.js";import"./useFocusRing-55667517.js";import"./Hidden-3d2dba0f.js";import"./useButton-25f6cf0a.js";import"./OverlayArrow-fd26ae4b.js";import"./context-cbd97d6e.js";import"./Info-2572de84.js";import"./palette-97ed00c9.js";const n=e.div`
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
