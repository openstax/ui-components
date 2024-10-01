import{s as r,a as e,F as i,j as n}from"./index.4ecba276.js";import{R as o}from"./Radio.aa2bb957.js";import"./theme.8e8d162f.js";import"./palette.15e4d008.js";import"./Tooltip.4938ca89.js";import"./OverlayArrow.module.c33d1f47.js";import"./focusSafely.module.ee363900.js";import"./context.module.5160584b.js";import"./Info.55cf2893.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
