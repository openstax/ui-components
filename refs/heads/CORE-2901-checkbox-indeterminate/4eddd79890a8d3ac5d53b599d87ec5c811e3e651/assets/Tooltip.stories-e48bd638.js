import{s as i,j as o,a as r}from"./index-e4caf523.js";import{T as m}from"./Tooltip-43bdce77.js";import"./Button-04adc989.js";import"./useFocusRing-1266b8d0.js";import"./Hidden-b8160308.js";import"./useFocusable-eb742270.js";import"./useButton-ccf95ed3.js";import"./OverlayArrow-a31e9a4f.js";import"./context-c127f537.js";import"./Info-1595558c.js";import"./palette-97ed00c9.js";const n=i.div`
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
