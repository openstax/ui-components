import{s as i,a as o,j as e}from"./index-39374954.js";import{T as m}from"./Tooltip-d72f6a4e.js";import"./Button-145e8075.js";import"./useFocusRing-d027a49b.js";import"./Hidden-1f47b864.js";import"./useFocusable-7bad8d9d.js";import"./useButton-e2c0b9c7.js";import"./OverlayArrow-d0ff76bc.js";import"./context-f4336b6c.js";import"./useControlledState-75701df8.js";import"./Info-544e0b0a.js";/* empty css              */const n=i.div`
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
`,y=()=>o(n,{children:["right","top","bottom"].map((t,r)=>e(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},r))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
