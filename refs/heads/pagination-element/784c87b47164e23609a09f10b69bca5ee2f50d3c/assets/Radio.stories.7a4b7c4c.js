import{s as r,a as e,F as i,j as n}from"./index.84c7ebb3.js";import{R as o}from"./Radio.beff3798.js";import"./theme.1ced6a05.js";import"./palette.15e4d008.js";import"./Tooltip.de1c7ede.js";import"./OverlayArrow.module.c4e53cac.js";import"./context.module.2f4720ec.js";import"./useButton.module.a84be4f5.js";import"./Info.1f0f2739.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
