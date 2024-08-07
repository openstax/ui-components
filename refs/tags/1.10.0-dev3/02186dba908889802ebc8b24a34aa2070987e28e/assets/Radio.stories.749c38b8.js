import{s as d,a as e,F as i,j as n}from"./index.db5b4afc.js";import{R as o}from"./Radio.26252775.js";import"./theme.23fb1031.js";import"./palette.15e4d008.js";import"./Tooltip.fe2ed584.js";import"./Button.module.6bd29747.js";import"./context.module.92dacfde.js";import"./useFocusRing.module.2d7a5aff.js";import"./OverlayArrow.module.58795d6b.js";import"./Info.d01d4b14.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
