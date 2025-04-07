import{s as r,a as e,F as i,j as n}from"./index.42ac0c1e.js";import{R as o}from"./Radio.ef9d250b.js";import"./theme.a24d6312.js";import"./palette.15e4d008.js";import"./Tooltip.e5cccbf5.js";import"./OverlayArrow.module.28184022.js";import"./context.module.cf15fa30.js";import"./useButton.module.c582f78e.js";import"./Info.fddbb76d.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
