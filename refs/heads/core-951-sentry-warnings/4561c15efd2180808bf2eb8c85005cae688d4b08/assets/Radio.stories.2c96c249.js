import{s as d,a as e,F as i,j as n}from"./index.e92077b1.js";import{R as o}from"./Radio.18c05010.js";import"./theme.e8d94f64.js";import"./palette.15e4d008.js";import"./Tooltip.475352b8.js";import"./Button.module.3474e1d5.js";import"./useFocusRing.module.49385ee1.js";import"./useButton.module.ad3d5e36.js";import"./OverlayArrow.module.2fb7ae21.js";import"./Info.0eb66876.js";import"./focusSafely.module.d078e4c1.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
