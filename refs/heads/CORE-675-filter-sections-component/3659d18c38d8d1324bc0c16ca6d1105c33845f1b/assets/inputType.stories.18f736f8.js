import{s as l,j as r,F as t,a as o}from"./index.01c0db81.js";import{C as i}from"./inputTypes.7c6632ae.js";import"./Radio.3340473a.js";import"./theme.ab1bbf07.js";import"./palette.15e4d008.js";import"./Tooltip.149fdaed.js";import"./OverlayArrow.module.5b8202c5.js";import"./context.module.cf25de0a.js";import"./Hidden.module.217ec4fb.js";import"./useButton.module.ed9fc12f.js";import"./Info.a5c3f2d4.js";import"./Checkbox.c405f9e6.js";const b=l.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,e=a=>r(b,{children:[r("h2",{children:["Size ",a.size]}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0})]}),z=()=>r(t,{children:[e({error:[],label:"Checkbox Label",variant:"primary",size:1.4}),e({error:[],label:"Checkbox Label",variant:"primary",size:1.6}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:1.8}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:2})]}),L=()=>r(t,{children:[e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.4}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.6}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.8}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:2})]}),g=()=>r(t,{children:[e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.4}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.6}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.8}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:2})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{z as defaultCheckbox,g as disabledCheckbox,L as errorCheckbox};
