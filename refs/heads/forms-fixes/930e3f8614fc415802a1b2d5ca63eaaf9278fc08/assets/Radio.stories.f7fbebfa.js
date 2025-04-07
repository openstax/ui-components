import{s as r,a as e,F as i,j as n}from"./index.8c45433e.js";import{R as o}from"./Radio.5d732c10.js";import"./theme.cc1478df.js";import"./palette.15e4d008.js";import"./Tooltip.16a9dbe2.js";import"./OverlayArrow.module.c54b575b.js";import"./context.module.cbd0577b.js";import"./useButton.module.83703885.js";import"./Info.31a7ba92.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
