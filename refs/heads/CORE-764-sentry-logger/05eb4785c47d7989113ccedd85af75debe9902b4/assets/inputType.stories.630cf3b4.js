import{s as t,j as r,F as l,a as o}from"./index.1658d0ff.js";import{C as i}from"./inputTypes.373122c5.js";import"./Radio.9c2f2d25.js";import"./theme.6b093367.js";import"./palette.15e4d008.js";import"./Tooltip.1fed0939.js";import"./OverlayArrow.module.b8c2a587.js";import"./context.module.9c47d877.js";import"./useButton.module.6a81afb6.js";import"./Info.45c64a54.js";import"./Checkbox.8c33a308.js";const b=t.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,e=a=>r(b,{children:[r("h2",{children:["Size ",a.size]}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0})]}),p=()=>r(l,{children:[e({error:[],label:"Checkbox Label",variant:"primary",size:1.4}),e({error:[],label:"Checkbox Label",variant:"primary",size:1.6}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:1.8}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:2})]}),z=()=>r(l,{children:[e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.4}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.6}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.8}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:2})]}),L=()=>r(l,{children:[e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.4}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.6}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.8}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:2})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as defaultCheckbox,L as disabledCheckbox,z as errorCheckbox};
