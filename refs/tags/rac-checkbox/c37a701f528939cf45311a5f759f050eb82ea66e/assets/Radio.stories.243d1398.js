import{s as d,a as e,F as i,j as n}from"./index.69df08e3.js";import{R as o}from"./Radio.15f0de4d.js";import"./theme.0ee214ef.js";import"./palette.15e4d008.js";import"./Tooltip.05997b77.js";import"./Button.module.5c547130.js";import"./useFocusRing.module.dedd9800.js";import"./useButton.module.65a63c6a.js";import"./OverlayArrow.module.534189c3.js";import"./Info.aa1950fc.js";import"./focusSafely.module.a715af01.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
