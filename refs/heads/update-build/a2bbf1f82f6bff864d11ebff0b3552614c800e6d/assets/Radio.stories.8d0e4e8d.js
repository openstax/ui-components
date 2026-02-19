import{s as n,a as e,F as d,j as o}from"./index.eef28c89.js";import{R as i}from"./Radio.4c725817.js";import"./theme.f6710c2f.js";import"./palette.5e342580.js";import"./Tooltip.f3ebc02f.js";import"./Button.module.23437f88.js";import"./useFocusRing.module.5deef2a0.js";import"./context.module.bcec7b30.js";import"./useButton.module.c5fcf265.js";import"./OverlayArrow.module.2878aacd.js";import"./Info.ea16e01a.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
