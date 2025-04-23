import{s as r,a as e,F as i,j as n}from"./index.ebc6ccd9.js";import{R as o}from"./Radio.209c241d.js";import"./theme.24b097fc.js";import"./palette.15e4d008.js";import"./Tooltip.e55c3706.js";import"./OverlayArrow.module.e7fcb60f.js";import"./context.module.0eda717c.js";import"./useButton.module.3625bbdc.js";import"./Info.baaa8bdd.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
