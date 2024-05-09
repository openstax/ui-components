import{s as n,j as r,a as c,F as d}from"./index.86a287c8.js";import{c as a}from"./theme.9ff62946.js";import"./palette.15e4d008.js";const l={primary:{accentColor:a.palette.mediumBlue,boxShadow:"none"},light:{accentColor:a.palette.white,boxShadow:"0 0 1px 0"}},p=n.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: ${e=>e.bold?700:400}
`,x=n.input`
  accent-color: ${e=>l[e.variant].accentColor};
  width: ${e=>e.checkboxSize}rem;
  height: ${e=>e.checkboxSize}rem;
  margin: 0 1.6rem 0 0;
  &:checked {
    box-shadow: ${e=>l[e.variant].boxShadow};
  }
`,i=({children:e,variant:o="primary",bold:h=!1,size:m=1.6,labelProps:s,...b})=>r(p,{bold:h,...s,children:[c(x,{...b,type:"checkbox",variant:o,checkboxSize:m}),e]}),u=n.div`
  text-transform: capitalize;
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,t=(e,o)=>r(u,{children:[r("h2",{children:["Size ",o]}),c(i,{size:o,variant:e,children:"Checkbox label"}),c(i,{size:o,variant:e,defaultChecked:!0,children:"Checkbox label"}),c(i,{size:o,variant:e,defaultChecked:!0,bold:!0,children:"Checkbox label"})]}),w=()=>r(d,{children:[t("primary",1.4),t("primary",1.6),t("primary",1.8),t("primary",2)]}),f=()=>r(d,{children:[t("light",1.4),t("light",1.6),t("light",1.8),t("light",2)]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Light,w as Primary};
