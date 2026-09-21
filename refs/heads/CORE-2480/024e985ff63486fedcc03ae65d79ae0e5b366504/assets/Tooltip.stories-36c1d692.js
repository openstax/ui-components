import{s as i,j as o,a as r}from"./index-6cd24583.js";import{T as m}from"./Tooltip-c2a8b686.js";import"./Button-83711127.js";import"./useFocusRing-136035f6.js";import"./Hidden-b56be6cb.js";import"./useFocusable-cb4a8080.js";import"./useButton-dc0bede6.js";import"./OverlayArrow-949d70c9.js";import"./context-32821ff3.js";import"./Info-f2db1fd4.js";import"./palette-12edeb86.js";const n=i.div`
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
