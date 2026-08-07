import{s as n,a as e,F as d,j as o}from"./index.54148a0f.js";import{R as i}from"./Radio.5643b837.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.292f6e10.js";import"./Button.module.e6166761.js";import"./useFocusRing.module.49c21ae5.js";import"./context.module.4a906004.js";import"./useButton.module.5c8ce93c.js";import"./OverlayArrow.module.8b74565a.js";import"./Info.e4839481.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
