import{s as l,j as o,F as d}from"./index.107524e4.js";import{c}from"./theme.6c738ccc.js";import"./palette.15e4d008.js";var m="/home/runner/work/ui-components/ui-components/src/components/Checkbox.tsx";const a={primary:{accentColor:c.palette.mediumBlue,boxShadow:"none"},light:{accentColor:c.palette.white,boxShadow:"0 0 1px 0"}},b=l.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: ${e=>e.bold?700:400}
`,p=l.input`
  accent-color: ${e=>a[e.variant].accentColor};
  width: ${e=>e.checkboxSize}rem;
  height: ${e=>e.checkboxSize}rem;
  margin: 0 1.6rem 0 0;
  &:checked {
    box-shadow: ${e=>a[e.variant].boxShadow};
  }
`,n=({children:e,variant:i="primary",bold:u=!1,size:h=1.6,...s})=>o(b,{bold:u,children:[o(p,{...s,type:"checkbox",variant:i,checkboxSize:h},void 0,!1,{fileName:m,lineNumber:47,columnNumber:7},void 0),e]},void 0,!0,{fileName:m,lineNumber:46,columnNumber:5},void 0);var t="/home/runner/work/ui-components/ui-components/src/components/Checkbox.stories.tsx";const x=l.div`
  text-transform: capitalize;
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=(e,i)=>o(x,{children:[o("h2",{children:["Size ",i]},void 0,!0,{fileName:t,lineNumber:16,columnNumber:3},void 0),o(n,{size:i,variant:e,children:"Checkbox label"},void 0,!1,{fileName:t,lineNumber:17,columnNumber:3},void 0),o(n,{size:i,variant:e,defaultChecked:!0,children:"Checkbox label"},void 0,!1,{fileName:t,lineNumber:18,columnNumber:3},void 0),o(n,{size:i,variant:e,defaultChecked:!0,bold:!0,children:"Checkbox label"},void 0,!1,{fileName:t,lineNumber:19,columnNumber:3},void 0)]},void 0,!0,{fileName:t,lineNumber:15,columnNumber:94},void 0),k=()=>o(d,{children:[r("primary",1.4),r("primary",1.6),r("primary",1.8),r("primary",2)]},void 0,!0),w=()=>o(d,{children:[r("light",1.4),r("light",1.6),r("light",1.8),r("light",2)]},void 0,!0);typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Light,k as Primary};
