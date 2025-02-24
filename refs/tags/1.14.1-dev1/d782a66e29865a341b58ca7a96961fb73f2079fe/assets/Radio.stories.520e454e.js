import{s as r,a as e,F as i,j as n}from"./index.1e44f4c0.js";import{R as o}from"./Radio.6cf6d890.js";import"./theme.28a98c57.js";import"./palette.15e4d008.js";import"./Tooltip.51db22f1.js";import"./OverlayArrow.module.0b223e07.js";import"./context.module.84b59f56.js";import"./useButton.module.55626caa.js";import"./Info.0f8eed4e.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
