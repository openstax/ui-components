import{s as r,a as e,F as i,j as n}from"./index.d946ceb7.js";import{R as o}from"./Radio.f759fc9d.js";import"./theme.466d367f.js";import"./palette.15e4d008.js";import"./Tooltip.ca67c255.js";import"./OverlayArrow.module.4a5c8978.js";import"./context.module.c92214f5.js";import"./Info.b09bdccd.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),b=()=>e(i,{children:d({name:"default"})}),w=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default,w as WithTooltip};
