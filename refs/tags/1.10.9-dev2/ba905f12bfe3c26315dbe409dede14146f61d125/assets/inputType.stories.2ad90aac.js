import{s as t,j as r,F as l,a as o}from"./index.9b4d0b0c.js";import{C as i}from"./inputTypes.cd1243ba.js";import"./Radio.35384702.js";import"./theme.4c0edb2c.js";import"./palette.15e4d008.js";import"./Tooltip.37e8df02.js";import"./OverlayArrow.module.6b37123e.js";import"./focusSafely.module.f27b7bd6.js";import"./context.module.dcbfd98d.js";import"./Info.e1655112.js";import"./Checkbox.c2fa2c43.js";const b=t.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,e=a=>r(b,{children:[r("h2",{children:["Size ",a.size]}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0})]}),p=()=>r(l,{children:[e({error:[],label:"Checkbox Label",variant:"primary",size:1.4}),e({error:[],label:"Checkbox Label",variant:"primary",size:1.6}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:1.8}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:2})]}),z=()=>r(l,{children:[e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.4}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.6}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.8}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:2})]}),L=()=>r(l,{children:[e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.4}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.6}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.8}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:2})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as defaultCheckbox,L as disabledCheckbox,z as errorCheckbox};