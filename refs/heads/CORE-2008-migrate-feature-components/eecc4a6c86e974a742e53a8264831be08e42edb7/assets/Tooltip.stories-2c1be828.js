import{s as i,j as o,a as r}from"./index-e717459e.js";import{T as m}from"./Tooltip-4fd3ffc7.js";import"./Button-3269081f.js";import"./useFocusRing-abe4deb6.js";import"./Hidden-d9cf3262.js";import"./useFocusable-8569acbe.js";import"./useButton-ed661356.js";import"./OverlayArrow-a5efea00.js";import"./context-43c1acb3.js";import"./Info-5ffd92ff.js";/* empty css              */const n=i.div`
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
