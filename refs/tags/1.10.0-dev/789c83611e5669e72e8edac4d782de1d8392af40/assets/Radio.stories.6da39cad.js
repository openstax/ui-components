import{s as r,a as e,F as i,j as n}from"./index.e0faa04b.js";import{R as o}from"./Radio.c2f1b23a.js";import"./theme.2ba066c9.js";import"./palette.15e4d008.js";import"./Tooltip.8a3184bb.js";import"./OverlayArrow.module.5ca0fd35.js";import"./context.module.5e87eef7.js";import"./Info.62e3b765.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),b=()=>e(i,{children:d({name:"default"})}),w=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default,w as WithTooltip};
