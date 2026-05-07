import{s as n,a as e,F as d,j as o}from"./index.92dc451b.js";import{R as i}from"./Radio.dd40cc77.js";import"./theme.11c81b00.js";import"./palette.5e342580.js";import"./Tooltip.81cec7ed.js";import"./Button.module.68431157.js";import"./useFocusRing.module.d89eaa9f.js";import"./context.module.8756b534.js";import"./useButton.module.61570390.js";import"./OverlayArrow.module.f4844a5a.js";import"./Info.40c2dc03.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
