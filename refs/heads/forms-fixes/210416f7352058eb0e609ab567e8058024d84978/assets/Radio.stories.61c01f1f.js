import{s as r,a as e,F as i,j as n}from"./index.7f6fe903.js";import{R as o}from"./Radio.6e52f8f3.js";import"./theme.8a4542f1.js";import"./palette.15e4d008.js";import"./Tooltip.6270b8cd.js";import"./OverlayArrow.module.86f53dee.js";import"./context.module.7db2e6c7.js";import"./useButton.module.bc299841.js";import"./Info.4259e434.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
