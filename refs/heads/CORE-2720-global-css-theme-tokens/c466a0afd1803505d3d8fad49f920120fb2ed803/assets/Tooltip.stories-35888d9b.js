import{s as e,j as o,a as r}from"./index-2afbc490.js";import{T as m}from"./Tooltip-75f45d77.js";import"./Button-a93b4fc8.js";import"./useFocusRing-0320f06e.js";import"./Hidden-b97ec2c4.js";import"./useButton-d70dd0e1.js";import"./OverlayArrow-f4fcbe88.js";import"./context-77e128cf.js";import"./Info-0848aebb.js";/* empty css              */const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
