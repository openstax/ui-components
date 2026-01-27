import{s as d,a as e,F as i,j as n}from"./index.12b7f06d.js";import{R as o}from"./Radio.9d06b40a.js";import"./theme.0fc322b0.js";import"./palette.5e342580.js";import"./Tooltip.c9342d78.js";import"./Button.module.23d07276.js";import"./useFocusRing.module.0c0506dc.js";import"./context.module.f77430b2.js";import"./useButton.module.ab5eefe6.js";import"./OverlayArrow.module.83406366.js";import"./Info.8fe180ba.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
