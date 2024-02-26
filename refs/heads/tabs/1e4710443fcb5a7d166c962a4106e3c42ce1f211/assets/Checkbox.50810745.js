import{c as o}from"./theme.9a0e474d.js";import{s as a,j as l,a as s}from"./index.ddba72d4.js";const t={primary:{accentColor:o.palette.mediumBlue,boxShadow:"none"},light:{accentColor:o.palette.white,boxShadow:"0 0 1px 0"}},h=a.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: ${e=>e.bold?700:400}
`,x=a.input`
  accent-color: ${e=>t[e.variant].accentColor};
  width: ${e=>e.checkboxSize}rem;
  height: ${e=>e.checkboxSize}rem;
  margin: 0 1.6rem 0 0;
  &:checked {
    box-shadow: ${e=>t[e.variant].boxShadow};
  }
`,d=({children:e,variant:c="primary",bold:r=!1,size:i=1.6,...n})=>l(h,{bold:r,children:[s(x,{...n,type:"checkbox",variant:c,checkboxSize:i}),e]});export{d as C};
