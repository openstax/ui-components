import{s as r,a as e,F as i,j as n}from"./index.d71b63e4.js";import{R as o}from"./Radio.2ea4f96c.js";import"./theme.83822438.js";import"./palette.15e4d008.js";import"./Tooltip.067fa578.js";import"./OverlayArrow.module.a5a85031.js";import"./focusSafely.module.9436f867.js";import"./context.module.50c8c51c.js";import"./Info.4641507c.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
