import{s as t,j as r,F as l,a as o}from"./index.eb6ac3b8.js";import{C as i}from"./inputTypes.5fda932f.js";import"./Radio.7c63ab62.js";import"./theme.0a16f905.js";import"./palette.15e4d008.js";import"./Tooltip.f2b8cf80.js";import"./OverlayArrow.module.7a0706e6.js";import"./focusSafely.module.150f5f9a.js";import"./context.module.8968ea18.js";import"./Info.468f020f.js";import"./Checkbox.519258a0.js";const b=t.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,e=a=>r(b,{children:[r("h2",{children:["Size ",a.size]}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0})]}),p=()=>r(l,{children:[e({error:[],label:"Checkbox Label",variant:"primary",size:1.4}),e({error:[],label:"Checkbox Label",variant:"primary",size:1.6}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:1.8}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:2})]}),z=()=>r(l,{children:[e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.4}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.6}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.8}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:2})]}),L=()=>r(l,{children:[e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.4}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.6}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.8}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:2})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as defaultCheckbox,L as disabledCheckbox,z as errorCheckbox};