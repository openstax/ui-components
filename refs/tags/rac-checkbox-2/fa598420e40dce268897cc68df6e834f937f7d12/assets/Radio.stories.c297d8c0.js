import{s as d,a as e,F as i,j as n}from"./index.2fc3ab85.js";import{R as o}from"./Radio.4142c4f9.js";import"./theme.98def16e.js";import"./palette.15e4d008.js";import"./Tooltip.3fd52b4e.js";import"./Button.module.315a5916.js";import"./useFocusRing.module.58ef531e.js";import"./useButton.module.b0be8fbd.js";import"./OverlayArrow.module.b8e27375.js";import"./Info.5058a457.js";import"./focusSafely.module.36681aa3.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
