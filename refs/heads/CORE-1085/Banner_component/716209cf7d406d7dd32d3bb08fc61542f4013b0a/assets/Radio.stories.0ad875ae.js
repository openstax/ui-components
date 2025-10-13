import{s as d,a as e,F as i,j as n}from"./index.d7c45636.js";import{R as o}from"./Radio.857a3744.js";import"./theme.83f6fe53.js";import"./palette.15e4d008.js";import"./Tooltip.0612baee.js";import"./Button.module.071aad07.js";import"./useFocusRing.module.78f817ac.js";import"./context.module.7ddc1581.js";import"./useButton.module.3d51d69d.js";import"./OverlayArrow.module.868fb81d.js";import"./Info.2119b085.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
