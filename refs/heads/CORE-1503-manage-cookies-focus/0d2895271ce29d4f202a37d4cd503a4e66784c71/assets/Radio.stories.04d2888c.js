import{s as n,a as e,F as d,j as o}from"./index.044e9759.js";import{R as i}from"./Radio.4734632a.js";import"./theme.446491bd.js";import"./palette.5e342580.js";import"./Tooltip.b511f4f2.js";import"./Button.module.2ab6cbdf.js";import"./useFocusRing.module.e6272c9c.js";import"./context.module.799210ff.js";import"./useButton.module.dc39a4cd.js";import"./OverlayArrow.module.b370df4e.js";import"./Info.d9b567fb.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
