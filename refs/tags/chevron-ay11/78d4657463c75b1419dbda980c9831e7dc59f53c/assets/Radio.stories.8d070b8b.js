import{s as d,a as e,F as i,j as n}from"./index.2f575498.js";import{R as o}from"./Radio.6a8ed7af.js";import"./theme.8efc2a1a.js";import"./palette.15e4d008.js";import"./Tooltip.2b586812.js";import"./Button.module.d262e02c.js";import"./useFocusRing.module.95573eec.js";import"./useButton.module.56ccb212.js";import"./OverlayArrow.module.af7c4ff0.js";import"./Info.c93bd6dc.js";import"./focusSafely.module.8f39a0a4.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
