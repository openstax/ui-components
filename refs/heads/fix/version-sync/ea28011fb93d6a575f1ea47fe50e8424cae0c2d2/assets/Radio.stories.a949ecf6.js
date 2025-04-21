import{s as r,a as e,F as i,j as n}from"./index.2334f5c7.js";import{R as o}from"./Radio.c4b0087d.js";import"./theme.ce43059c.js";import"./palette.15e4d008.js";import"./Tooltip.fb35aba4.js";import"./OverlayArrow.module.f12ec114.js";import"./context.module.a8e6087e.js";import"./useButton.module.4a734ab1.js";import"./Info.f158c0dd.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
