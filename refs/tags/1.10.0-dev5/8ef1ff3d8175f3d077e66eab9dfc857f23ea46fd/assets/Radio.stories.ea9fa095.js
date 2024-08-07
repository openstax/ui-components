import{s as d,a as e,F as i,j as n}from"./index.6aefe75b.js";import{R as o}from"./Radio.9bc62813.js";import"./theme.35c41bf1.js";import"./palette.15e4d008.js";import"./Tooltip.7965f10d.js";import"./Button.module.06e93033.js";import"./context.module.c1c358e2.js";import"./useFocusRing.module.8e81e6a9.js";import"./OverlayArrow.module.ac204c83.js";import"./Info.21acbab2.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
