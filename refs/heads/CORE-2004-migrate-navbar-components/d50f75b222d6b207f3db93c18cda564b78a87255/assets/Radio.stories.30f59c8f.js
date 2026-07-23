import{s as n,a as e,F as d,j as o}from"./index.6fd44928.js";import{R as i}from"./Radio.8d1576d0.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.25299ccd.js";import"./Button.module.fdc1cbd1.js";import"./useFocusRing.module.7fb81ac7.js";import"./context.module.8ac6cc48.js";import"./useButton.module.a678132f.js";import"./OverlayArrow.module.44f336e4.js";import"./Info.d869b96b.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
