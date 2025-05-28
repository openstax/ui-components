import{s as d,a as e,F as i,j as n}from"./index.8357a086.js";import{R as o}from"./Radio.4c9a7ddf.js";import"./theme.3b3bbdc1.js";import"./palette.15e4d008.js";import"./Tooltip.5c5d7d1d.js";import"./Button.module.59ce13d8.js";import"./useFocusRing.module.8d534ba9.js";import"./useButton.module.1db1a81e.js";import"./OverlayArrow.module.ed713784.js";import"./Info.5bdd838e.js";import"./focusSafely.module.620f3353.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
