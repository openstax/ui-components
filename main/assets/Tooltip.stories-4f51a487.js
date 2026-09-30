import{s as i,j as o,a as r}from"./index-3e184d5b.js";import{T as m}from"./Tooltip-bd4b23b7.js";import"./Button-57e31eed.js";import"./useFocusRing-7e1f9672.js";import"./Hidden-8b17cf0c.js";import"./useFocusable-1eebc208.js";import"./useButton-ad0916b4.js";import"./OverlayArrow-fb654c63.js";import"./context-ad297ebc.js";import"./Info-49b47473.js";import"./palette-97ed00c9.js";const n=i.div`
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
