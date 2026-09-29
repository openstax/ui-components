import{s as i,j as o,a as r}from"./index-87130c24.js";import{T as m}from"./Tooltip-5fc781f8.js";import"./Button-54ff0f13.js";import"./useFocusRing-fdc8b9a6.js";import"./Hidden-b262045f.js";import"./useButton-837d32f5.js";import"./OverlayArrow-7c28895e.js";import"./context-f0ec1d82.js";import"./Info-6cca72c2.js";import"./palette-97ed00c9.js";const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,a=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,b=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default};
