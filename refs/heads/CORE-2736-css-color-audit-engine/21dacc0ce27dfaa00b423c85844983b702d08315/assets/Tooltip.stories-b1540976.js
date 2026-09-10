import{s as e,j as o,a as r}from"./index-227b3044.js";import{T as m}from"./Tooltip-fea436e5.js";import"./Button-4e35eab5.js";import"./useFocusRing-190fa8e6.js";import"./Hidden-4f2eec60.js";import"./useButton-f5ef4e1a.js";import"./OverlayArrow-76dcb88f.js";import"./context-24948818.js";import"./Info-4e969331.js";import"./palette-12edeb86.js";const n=e.div`
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
