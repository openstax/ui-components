import{s as r,a as e,F as i,j as n}from"./index.c9c1760a.js";import{R as o}from"./Radio.5603bd45.js";import"./theme.784106f9.js";import"./palette.15e4d008.js";import"./Tooltip.acd6aa56.js";import"./OverlayArrow.module.e0f4f6f5.js";import"./context.module.53eaea28.js";import"./useButton.module.d067c8df.js";import"./Info.97a61229.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
