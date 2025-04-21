import{s as r,a as e,F as i,j as n}from"./index.5f5753fc.js";import{R as o}from"./Radio.1ec6cd2b.js";import"./theme.a6d44360.js";import"./palette.15e4d008.js";import"./Tooltip.a050fc01.js";import"./OverlayArrow.module.e123dba0.js";import"./context.module.930c39f0.js";import"./useButton.module.b99775bc.js";import"./Info.26b6cbb7.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
