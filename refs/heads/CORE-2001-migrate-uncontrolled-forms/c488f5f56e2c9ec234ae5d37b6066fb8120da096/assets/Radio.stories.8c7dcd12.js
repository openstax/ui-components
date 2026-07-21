import{s as n,a as e,F as d,j as o}from"./index.293f3b4f.js";import{R as i}from"./Radio.201b64bb.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.b08aefc8.js";import"./Button.module.42cfa224.js";import"./useFocusRing.module.ec25c893.js";import"./context.module.98babce9.js";import"./useButton.module.095cbd18.js";import"./OverlayArrow.module.17445b5a.js";import"./Info.86028be0.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
