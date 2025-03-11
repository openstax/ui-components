import{s as r,a as e,F as i,j as n}from"./index.c232f93f.js";import{R as o}from"./Radio.7b202a22.js";import"./theme.1a9b3d09.js";import"./palette.15e4d008.js";import"./Tooltip.8272fdb9.js";import"./OverlayArrow.module.c9a65f9c.js";import"./context.module.cc94b508.js";import"./useButton.module.5ba0736d.js";import"./Info.3a3337b0.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
