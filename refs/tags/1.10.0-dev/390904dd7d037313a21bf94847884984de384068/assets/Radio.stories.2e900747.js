import{s as r,a as e,F as i,j as n}from"./index.40b5cd5d.js";import{R as o}from"./Radio.35182725.js";import"./theme.78126ace.js";import"./palette.15e4d008.js";import"./Tooltip.536baa7e.js";import"./OverlayArrow.module.a5e9789c.js";import"./context.module.d5710680.js";import"./Info.062e785b.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),b=()=>e(i,{children:d({name:"default"})}),w=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default,w as WithTooltip};
