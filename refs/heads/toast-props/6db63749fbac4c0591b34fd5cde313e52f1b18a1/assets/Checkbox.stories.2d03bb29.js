import{s as n,j as r,a as c,F as d}from"./index.8ced7031.js";import{c as a}from"./theme.dcd31e2c.js";import"./palette.15e4d008.js";const l={primary:{accentColor:a.palette.mediumBlue,boxShadow:"none"},light:{accentColor:a.palette.white,boxShadow:"0 0 1px 0"}},b=n.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: ${e=>e.bold?700:400}
`,p=n.input`
  accent-color: ${e=>l[e.variant].accentColor};
  width: ${e=>e.checkboxSize}rem;
  height: ${e=>e.checkboxSize}rem;
  margin: 0 1.6rem 0 0;
  &:checked {
    box-shadow: ${e=>l[e.variant].boxShadow};
  }
`,i=({children:e,variant:o="primary",bold:h=!1,size:m=1.6,...s})=>r(b,{bold:h,children:[c(p,{...s,type:"checkbox",variant:o,checkboxSize:m}),e]}),x=n.div`
  text-transform: capitalize;
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,t=(e,o)=>r(x,{children:[r("h2",{children:["Size ",o]}),c(i,{size:o,variant:e,children:"Checkbox label"}),c(i,{size:o,variant:e,defaultChecked:!0,children:"Checkbox label"}),c(i,{size:o,variant:e,defaultChecked:!0,bold:!0,children:"Checkbox label"})]}),g=()=>r(d,{children:[t("primary",1.4),t("primary",1.6),t("primary",1.8),t("primary",2)]}),w=()=>r(d,{children:[t("light",1.4),t("light",1.6),t("light",1.8),t("light",2)]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Light,g as Primary};
