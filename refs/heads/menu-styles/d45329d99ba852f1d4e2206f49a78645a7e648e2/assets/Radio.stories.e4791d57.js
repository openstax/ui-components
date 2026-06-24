import{s as n,a as e,F as d,j as o}from"./index.c7c660c5.js";import{R as i}from"./Radio.32f12c34.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.1ed276eb.js";import"./Button.module.2786e428.js";import"./useFocusRing.module.3721d014.js";import"./context.module.10a21c16.js";import"./useButton.module.7669760d.js";import"./OverlayArrow.module.0b3423fe.js";import"./Info.9b4ce768.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
