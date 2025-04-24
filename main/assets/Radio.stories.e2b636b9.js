import{s as r,a as e,F as i,j as n}from"./index.4766e129.js";import{R as o}from"./Radio.0e10c61f.js";import"./theme.62734316.js";import"./palette.15e4d008.js";import"./Tooltip.6f24c3ed.js";import"./OverlayArrow.module.63e65c22.js";import"./context.module.c3bc7894.js";import"./useButton.module.0514c436.js";import"./Info.9e09f714.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
