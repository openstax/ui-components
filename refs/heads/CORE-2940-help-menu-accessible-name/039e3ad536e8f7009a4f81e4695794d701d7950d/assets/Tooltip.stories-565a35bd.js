import{s as i,j as o,a as r}from"./index-d0eeff93.js";import{T as m}from"./Tooltip-7ee8aa4e.js";import"./Button-62b42310.js";import"./useFocusRing-c035528e.js";import"./Hidden-b412fcc7.js";import"./useFocusable-ef53625b.js";import"./useButton-a32c83ad.js";import"./OverlayArrow-d4739839.js";import"./context-9c95bfe4.js";import"./Info-4d89f43f.js";import"./palette-97ed00c9.js";const n=i.div`
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
