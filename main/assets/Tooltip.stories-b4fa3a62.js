import{s as i,j as o,a as r}from"./index-89f0057f.js";import{T as m}from"./Tooltip-1ab9786b.js";import"./Button-d2a9785f.js";import"./useFocusRing-6a2857f1.js";import"./Hidden-13350c24.js";import"./useFocusable-c9d9f24a.js";import"./useButton-77cc8ec9.js";import"./OverlayArrow-a57d3c31.js";import"./context-d9609410.js";import"./Info-c2ae72bf.js";import"./palette-97ed00c9.js";const n=i.div`
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
