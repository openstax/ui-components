import{s as d,a as e,F as i,j as n}from"./index.2992ac91.js";import{R as o}from"./Radio.11d71f8e.js";import"./theme.9fdaa9cc.js";import"./palette.15e4d008.js";import"./Tooltip.64170ef1.js";import"./Button.module.aabdc13c.js";import"./context.module.6c4ad29d.js";import"./focusSafely.module.072663a8.js";import"./useFocusRing.module.e457a829.js";import"./OverlayArrow.module.669ad689.js";import"./Info.f3c1efc6.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
