import{s as d,a as e,F as i,j as n}from"./index.4b08728c.js";import{R as o}from"./Radio.06436351.js";import"./theme.df929a98.js";import"./palette.15e4d008.js";import"./Tooltip.0bdff49d.js";import"./Button.module.a8d503ab.js";import"./useFocusRing.module.670a7b33.js";import"./useButton.module.be6cd92c.js";import"./OverlayArrow.module.0d92ead0.js";import"./Info.31779c26.js";import"./focusSafely.module.7969ec51.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
