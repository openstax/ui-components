import{s as d,a as e,F as i,j as n}from"./index.44e7dce0.js";import{R as o}from"./Radio.df2536f3.js";import"./theme.3505e05e.js";import"./palette.5e342580.js";import"./Tooltip.c4227c6d.js";import"./Button.module.ec48a869.js";import"./useFocusRing.module.933bdf96.js";import"./context.module.9404bc0d.js";import"./useButton.module.3d03dc55.js";import"./OverlayArrow.module.925b3370.js";import"./Info.c84e5f80.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
