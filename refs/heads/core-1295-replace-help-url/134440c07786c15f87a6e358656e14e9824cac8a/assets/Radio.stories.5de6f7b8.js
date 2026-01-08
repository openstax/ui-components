import{s as d,a as e,F as i,j as n}from"./index.1983aed6.js";import{R as o}from"./Radio.2f06d517.js";import"./theme.d12a3597.js";import"./palette.15e4d008.js";import"./Tooltip.e4a80a73.js";import"./Button.module.dd9a53d5.js";import"./useFocusRing.module.33b74371.js";import"./context.module.fc300464.js";import"./useButton.module.2002e613.js";import"./OverlayArrow.module.c14db693.js";import"./Info.64599d5d.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
