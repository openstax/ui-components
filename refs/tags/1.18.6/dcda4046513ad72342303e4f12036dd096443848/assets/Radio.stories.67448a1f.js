import{s as d,a as e,F as i,j as n}from"./index.de1284b4.js";import{R as o}from"./Radio.9562e557.js";import"./theme.475b90c2.js";import"./palette.15e4d008.js";import"./Tooltip.b1f20877.js";import"./Button.module.a6404ee5.js";import"./useFocusRing.module.527368b8.js";import"./context.module.de9cd171.js";import"./useButton.module.e9b5cef1.js";import"./OverlayArrow.module.e5bc4e12.js";import"./Info.6e12c4ec.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
