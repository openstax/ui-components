import{s as n,a as e,F as d,j as o}from"./index.77dc174b.js";import{R as i}from"./Radio.a69bc1d3.js";import"./theme.efb68a94.js";import"./palette.5e342580.js";import"./Tooltip.2dd6c113.js";import"./Button.module.fe582f09.js";import"./useFocusRing.module.cd4dc1fd.js";import"./context.module.25fdc995.js";import"./useButton.module.be4798f5.js";import"./OverlayArrow.module.39fcfdd7.js";import"./Info.b8caa697.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
