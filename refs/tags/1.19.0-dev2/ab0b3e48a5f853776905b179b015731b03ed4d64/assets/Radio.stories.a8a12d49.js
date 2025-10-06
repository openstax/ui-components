import{s as d,a as e,F as i,j as n}from"./index.f87a91fe.js";import{R as o}from"./Radio.6df92656.js";import"./theme.8e2e2444.js";import"./palette.15e4d008.js";import"./Tooltip.9b914a44.js";import"./Button.module.463f6375.js";import"./useFocusRing.module.b8376a91.js";import"./context.module.c597e578.js";import"./useButton.module.43f19e26.js";import"./OverlayArrow.module.cfc1c070.js";import"./Info.8afdc032.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
