import{s as r,a as e,F as i,j as n}from"./index.349cec74.js";import{R as o}from"./Radio.e305f776.js";import"./theme.0a91c3da.js";import"./palette.15e4d008.js";import"./Tooltip.e2d2e70c.js";import"./OverlayArrow.module.a6503097.js";import"./context.module.cad9001c.js";import"./useButton.module.919bbfe3.js";import"./Info.69e3969b.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
