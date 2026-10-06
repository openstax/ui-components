import{s as i,j as o,a as r}from"./index-36cf09c5.js";import{T as m}from"./Tooltip-71f9d51a.js";import"./Button-0f87e7e0.js";import"./useFocusRing-fe0b982a.js";import"./Hidden-d77e5871.js";import"./useFocusable-c877227f.js";import"./useButton-92823e83.js";import"./OverlayArrow-c392d144.js";import"./context-0e58bf2f.js";import"./Info-fd72f4f6.js";import"./palette-97ed00c9.js";const n=i.div`
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
`,y=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
