import{s as r,a as e,F as i,j as n}from"./index.e5446cb1.js";import{R as o}from"./Radio.760eda04.js";import"./theme.0517330b.js";import"./palette.15e4d008.js";import"./Tooltip.2f5440fd.js";import"./OverlayArrow.module.0d86807e.js";import"./focusSafely.module.bc6d02d3.js";import"./context.module.d3dfbe33.js";import"./Info.2b16191e.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
