import{s as n,a as e,F as d,j as o}from"./index.29966ebf.js";import{R as i}from"./Radio.803aa920.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.aa4d14f2.js";import"./Button.module.a3dcc30a.js";import"./useFocusRing.module.4fa3b96f.js";import"./context.module.2d79b1a7.js";import"./useButton.module.9de1aa60.js";import"./OverlayArrow.module.60671de4.js";import"./Info.eb295ef4.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
