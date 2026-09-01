import{s as e,j as o,a as r}from"./index-07737410.js";import{T as m}from"./Tooltip-14c38ad6.js";import"./Button-f8e2af3b.js";import"./useFocusRing-fc56b421.js";import"./Hidden-ab24aad2.js";import"./useButton-6d87c5f3.js";import"./OverlayArrow-6766d0d8.js";import"./context-dd2ba26f.js";import"./Info-875dfcf6.js";/* empty css              */const n=e.div`
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
