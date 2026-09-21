import{s as i,j as o,a as r}from"./index-247519cd.js";import{T as m}from"./Tooltip-e8f6bdc3.js";import"./Button-d1709670.js";import"./useFocusRing-7bb3bea8.js";import"./Hidden-7174d28c.js";import"./useFocusable-fe993404.js";import"./useButton-b2dbc196.js";import"./OverlayArrow-aa974deb.js";import"./context-4c5e90e1.js";import"./Info-019784a3.js";import"./palette-12edeb86.js";const n=i.div`
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
