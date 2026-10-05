import{s as i,j as o,a as r}from"./index-2e65f05b.js";import{T as m}from"./Tooltip-41dcce81.js";import"./Button-7fb25889.js";import"./useFocusRing-3abf6e42.js";import"./Hidden-bdbc1592.js";import"./useFocusable-1417ef2d.js";import"./useButton-2464df1a.js";import"./OverlayArrow-187d9106.js";import"./context-6333154e.js";import"./Info-c93bc253.js";import"./palette-97ed00c9.js";const n=i.div`
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
