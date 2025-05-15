import{s as d,a as e,F as i,j as n}from"./index.3eca7034.js";import{R as o}from"./Radio.4013835d.js";import"./theme.9a6f3037.js";import"./palette.15e4d008.js";import"./Tooltip.e2d8043a.js";import"./Button.module.beb3e37f.js";import"./useFocusRing.module.b489b1c4.js";import"./useButton.module.b4ddbfd9.js";import"./OverlayArrow.module.be335e74.js";import"./Info.10824f2e.js";import"./focusSafely.module.e3cc60a5.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
