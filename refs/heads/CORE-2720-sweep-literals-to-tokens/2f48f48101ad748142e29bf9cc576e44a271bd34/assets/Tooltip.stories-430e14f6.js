import{s as i,j as o,a as r}from"./index-79db3132.js";import{T as m}from"./Tooltip-9c15b929.js";import"./Button-ab50370a.js";import"./useFocusRing-3a71dbcd.js";import"./Hidden-e12ebbb3.js";import"./useFocusable-b16fea34.js";import"./useButton-5e799b05.js";import"./OverlayArrow-c18358f2.js";import"./context-19590b2d.js";import"./Info-fdd75a88.js";/* empty css              */const n=i.div`
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
`,x=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
