import{s as i,j as o,a as r}from"./index-db397794.js";import{T as m}from"./Tooltip-b1453611.js";import"./Button-a5679d83.js";import"./useFocusRing-336a9457.js";import"./Hidden-a435d37e.js";import"./useFocusable-02bf7fc2.js";import"./useButton-83c895e4.js";import"./OverlayArrow-ea316ebd.js";import"./context-dc898f16.js";import"./Info-1c0e6b10.js";import"./palette-97ed00c9.js";/* empty css              */const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,b=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default};
