import{c as o}from"./theme.284ae27b.js";import{s as a,j as s,a as h}from"./index.7b00a96b.js";const t={primary:{accentColor:o.palette.mediumBlue,boxShadow:"none"},light:{accentColor:o.palette.white,boxShadow:"0 0 1px 0"},error:{accentColor:o.palette.darkRed,boxShadow:"none"}},d=a.label`
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
`,p=({children:e,variant:c="primary",bold:r=!1,size:n=1.6,labelProps:i,...l})=>s(d,{bold:r,...i,children:[h(x,{...l,type:"checkbox",variant:c,checkboxSize:n}),e]});export{p as C};
