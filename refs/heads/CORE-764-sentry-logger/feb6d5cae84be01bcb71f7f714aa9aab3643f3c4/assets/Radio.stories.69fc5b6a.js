import{s as r,a as e,F as i,j as n}from"./index.c08e3dbc.js";import{R as o}from"./Radio.5ecc17f4.js";import"./theme.86c39b7c.js";import"./palette.15e4d008.js";import"./Tooltip.b1eb06cb.js";import"./OverlayArrow.module.ec5ae3cb.js";import"./context.module.f21aa855.js";import"./useButton.module.4b963912.js";import"./Info.ab66a65d.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
