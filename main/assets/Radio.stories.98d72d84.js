import{s as r,a as e,F as i,j as n}from"./index.12463530.js";import{R as o}from"./Radio.eb35bbf7.js";import"./theme.c69c5b07.js";import"./palette.15e4d008.js";import"./Tooltip.76e83b39.js";import"./OverlayArrow.module.66535994.js";import"./focusSafely.module.265105f0.js";import"./context.module.97458d97.js";import"./Info.3c4afed1.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
