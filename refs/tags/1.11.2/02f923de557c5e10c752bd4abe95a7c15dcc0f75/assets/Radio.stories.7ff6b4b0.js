import{s as d,a as e,F as i,j as n}from"./index.86305c29.js";import{R as o}from"./Radio.5201cf95.js";import"./theme.d8137da6.js";import"./palette.15e4d008.js";import"./Tooltip.61c5e9e2.js";import"./Button.module.db1b96f7.js";import"./context.module.5974ac9f.js";import"./useFocusRing.module.5b7967c7.js";import"./OverlayArrow.module.3253a0ca.js";import"./Info.118ecd81.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
