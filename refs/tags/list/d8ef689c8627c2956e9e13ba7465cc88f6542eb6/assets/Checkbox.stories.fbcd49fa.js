import{c as r}from"./theme.c08b50a7.js";import{s as l,j as e,F as u}from"./index.6131aa58.js";import"./palette.15e4d008.js";var t="/home/runner/work/ui-components/ui-components/src/components/Checkbox.tsx";const s=l.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: ${o=>o.bold?700:"400"}
`,m={primary:{accentColor:r.palette.mediumBlue,boxShadow:"none"},light:{accentColor:r.palette.white,boxShadow:"0 0 1px 0"}},h=l.input`
  accent-color: ${o=>m[o.variant].accentColor};
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 1.6rem;
  &:checked {
    box-shadow: ${o=>m[o.variant].boxShadow};
  }
`,i=({children:o,variant:c="primary",bold:a=!1,...d})=>e(s,{bold:a,children:[e(h,{...d,type:"checkbox",variant:c},void 0,!1,{fileName:t,lineNumber:43,columnNumber:7},void 0),o]},void 0,!0,{fileName:t,lineNumber:42,columnNumber:5},void 0);var n="/home/runner/work/ui-components/ui-components/src/components/Checkbox.stories.tsx";const v=()=>e(u,{children:[e(i,{children:"Check me"},void 0,!1,{fileName:n,lineNumber:4,columnNumber:3},void 0),e("br",{},void 0,!1,{fileName:n,lineNumber:5,columnNumber:3},void 0),e(i,{defaultChecked:!0,children:"Uncheck me"},void 0,!1,{fileName:n,lineNumber:6,columnNumber:3},void 0),e("br",{},void 0,!1,{fileName:n,lineNumber:7,columnNumber:3},void 0),e(i,{defaultChecked:!0,children:"Uncheck me"},void 0,!1,{fileName:n,lineNumber:8,columnNumber:3},void 0),e(i,{defaultChecked:!0,variant:"light",children:"Uncheck me"},void 0,!1,{fileName:n,lineNumber:9,columnNumber:3},void 0)]},void 0,!0);typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{v as Default};
