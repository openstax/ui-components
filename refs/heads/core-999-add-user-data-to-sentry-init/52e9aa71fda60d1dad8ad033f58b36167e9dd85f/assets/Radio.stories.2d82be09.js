import{s as d,a as e,F as i,j as n}from"./index.cc4cf4d6.js";import{R as o}from"./Radio.bd9050bf.js";import"./theme.df157495.js";import"./palette.15e4d008.js";import"./Tooltip.4cdb45e6.js";import"./Button.module.c427d024.js";import"./useFocusRing.module.ad304b6e.js";import"./useButton.module.4575b742.js";import"./OverlayArrow.module.fc2b7af1.js";import"./Info.7d9c1d7f.js";import"./focusSafely.module.3c4610c1.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
