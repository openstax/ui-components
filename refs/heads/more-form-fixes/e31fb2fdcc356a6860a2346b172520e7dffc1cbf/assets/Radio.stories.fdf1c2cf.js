import{s as r,a as e,F as i,j as n}from"./index.572cdb40.js";import{R as o}from"./Radio.d16d8be7.js";import"./theme.ed4b6f91.js";import"./palette.15e4d008.js";import"./Tooltip.dbd8c50e.js";import"./OverlayArrow.module.96eee65c.js";import"./context.module.d321f89c.js";import"./useButton.module.ac31a409.js";import"./Info.37d018fc.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
