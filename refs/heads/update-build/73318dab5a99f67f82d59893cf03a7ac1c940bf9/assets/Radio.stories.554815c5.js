import{s as n,a as e,F as d,j as o}from"./index.fb5a3664.js";import{R as i}from"./Radio.a12d9d48.js";import"./theme.ec49cf02.js";import"./palette.5e342580.js";import"./Tooltip.ee5691cc.js";import"./Button.module.495b8627.js";import"./useFocusRing.module.220ce024.js";import"./context.module.3e6f6c3a.js";import"./useButton.module.f61d153a.js";import"./OverlayArrow.module.7dfb772d.js";import"./Info.5180bd66.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
