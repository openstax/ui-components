import{s as r,a as e,F as i,j as n}from"./index.3012ffb9.js";import{R as o}from"./Radio.9939b4d1.js";import"./theme.71eec472.js";import"./palette.15e4d008.js";import"./Tooltip.c54d54c4.js";import"./OverlayArrow.module.71412295.js";import"./focusSafely.module.743974a8.js";import"./context.module.7c9209dd.js";import"./Info.ba6e626a.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
