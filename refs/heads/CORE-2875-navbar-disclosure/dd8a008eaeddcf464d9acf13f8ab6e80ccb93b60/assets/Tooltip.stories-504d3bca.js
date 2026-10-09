import{s as i,a as o,j as e}from"./index-9fa372e2.js";import{T as m}from"./Tooltip-dbdc6fc8.js";import"./Button-62a86978.js";import"./useFocusRing-b04b7fd9.js";import"./Hidden-4e96534d.js";import"./useFocusable-fa2ccb33.js";import"./useButton-df90484e.js";import"./OverlayArrow-dc7a3584.js";import"./context-0c7f66df.js";import"./useControlledState-f2d774c0.js";import"./Info-57e59be7.js";/* empty css              */const n=i.div`
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
