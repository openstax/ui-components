import{s as t,j as r,F as l,a as o}from"./index.db0317c6.js";import{C as i}from"./inputTypes.59be489f.js";import"./Radio.dd4bda8e.js";import"./theme.11661764.js";import"./palette.15e4d008.js";import"./Tooltip.978590d7.js";import"./OverlayArrow.module.d105a73d.js";import"./context.module.340ae0da.js";import"./useButton.module.9b1836e5.js";import"./Info.a64bb908.js";import"./Checkbox.e7bea95b.js";const b=t.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,e=a=>r(b,{children:[r("h2",{children:["Size ",a.size]}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0})]}),p=()=>r(l,{children:[e({error:[],label:"Checkbox Label",variant:"primary",size:1.4}),e({error:[],label:"Checkbox Label",variant:"primary",size:1.6}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:1.8}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:2})]}),z=()=>r(l,{children:[e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.4}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.6}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.8}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:2})]}),L=()=>r(l,{children:[e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.4}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.6}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.8}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:2})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as defaultCheckbox,L as disabledCheckbox,z as errorCheckbox};
