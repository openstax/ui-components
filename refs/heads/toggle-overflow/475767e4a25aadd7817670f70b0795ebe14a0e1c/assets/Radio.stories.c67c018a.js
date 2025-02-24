import{s as r,a as e,F as i,j as n}from"./index.c3ec57d8.js";import{R as o}from"./Radio.057c01a0.js";import"./theme.6ed67848.js";import"./palette.15e4d008.js";import"./Tooltip.6fb56cba.js";import"./OverlayArrow.module.4f5d57e7.js";import"./context.module.6f3ae749.js";import"./useButton.module.22ef923b.js";import"./Info.608e2c85.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
