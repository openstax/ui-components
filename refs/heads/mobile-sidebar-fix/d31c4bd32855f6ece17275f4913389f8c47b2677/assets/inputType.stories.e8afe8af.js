import{s as l,j as r,F as t,a as o}from"./index.5eeca385.js";import{C as i}from"./inputTypes.7d48fb61.js";import"./Radio.e750c0e6.js";import"./theme.0dad3fd4.js";import"./palette.15e4d008.js";import"./Tooltip.16d7905b.js";import"./Button.module.e8cabd4e.js";import"./context.module.6355ca2c.js";import"./useFocusRing.module.6f98d58c.js";import"./OverlayArrow.module.aeb45026.js";import"./Info.e89a4858.js";import"./Checkbox.83a33e33.js";const b=l.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,e=a=>r(b,{children:[r("h2",{children:["Size ",a.size]}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0}),o(i,{...a,defaultChecked:!0})]}),z=()=>r(t,{children:[e({error:[],label:"Checkbox Label",variant:"primary",size:1.4}),e({error:[],label:"Checkbox Label",variant:"primary",size:1.6}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:1.8}),e({error:void 0,label:"Checkbox Label",variant:"primary",size:2})]}),L=()=>r(t,{children:[e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.4}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.6}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:1.8}),e({error:["Error messages go here"],label:"Checkbox Label",variant:"error",size:2})]}),g=()=>r(t,{children:[e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.4}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.6}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:1.8}),e({error:[],disabled:!0,label:"Checkbox Label",variant:"disabled",size:2})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{z as defaultCheckbox,g as disabledCheckbox,L as errorCheckbox};
