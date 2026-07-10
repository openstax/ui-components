import{s as c,j as i,F as d,a as e}from"./index.dc15c21a.js";import{C as t}from"./Checkbox.f336efb8.js";import"./sharedCheckboxStyles.6dbfd3f8.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.43c83908.js";import"./Button.module.50840617.js";import"./useFocusRing.module.218800ae.js";import"./context.module.8323f7a9.js";import"./useButton.module.e12a1c82.js";import"./OverlayArrow.module.70bd92e8.js";import"./Info.bfdb4fba.js";const n=c.div`
  text-transform: capitalize;
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,o=(r,l)=>i(n,{children:[i("h2",{children:["Size ",l]}),e(t,{size:l,variant:r,children:"Checkbox label"}),e(t,{size:l,variant:r,defaultChecked:!0,children:"Checkbox label"}),e(t,{size:l,variant:r,defaultChecked:!0,bold:!0,children:"Checkbox label"})]}),w=()=>i(d,{children:[o("primary",1.4),o("primary",1.6),o("primary",1.8),o("primary",2)]}),v=()=>i(d,{children:[o("light",1.4),o("light",1.6),o("light",1.8),o("light",2)]}),a=(r,l)=>i(n,{children:[i("h2",{children:[r," - Size ",l]}),e(t,{size:l,variant:r,disabled:!0,children:"Checkbox label"}),e(t,{size:l,variant:r,disabled:!0,defaultChecked:!0,children:"Checkbox label"}),e(t,{size:l,variant:r,disabled:!0,defaultChecked:!0,bold:!0,children:"Checkbox label"})]}),D=()=>i(d,{children:[a("primary",1.6),a("primary",2),a("light",1.6),a("light",2)]}),h=c.div`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  & + & {
    margin-top: 3.2rem;
  }
`,j=()=>i(d,{children:[i(h,{children:[e("h2",{children:"Primary"}),e(t,{variant:"primary",tooltipText:"Tooltip text for checkbox goes here",children:"Checkbox label"}),e(t,{variant:"primary",defaultChecked:!0,tooltipText:"Tooltip text for checkbox goes here",children:"Checked label with tooltip"}),e(t,{variant:"primary",disabled:!0,tooltipText:"This option is unavailable",children:"Disabled label with tooltip"}),e(t,{variant:"primary",disabled:!0,defaultChecked:!0,tooltipText:"This option is unavailable",children:"Disabled checked label with tooltip"})]}),i(h,{children:[e("h2",{children:"Light"}),e(t,{variant:"light",tooltipText:"Tooltip text for checkbox goes here",children:"Checkbox label"}),e(t,{variant:"light",defaultChecked:!0,tooltipText:"Tooltip text for checkbox goes here",children:"Checked label with tooltip"}),e(t,{variant:"light",disabled:!0,tooltipText:"This option is unavailable",children:"Disabled label with tooltip"}),e(t,{variant:"light",disabled:!0,defaultChecked:!0,tooltipText:"This option is unavailable",children:"Disabled checked label with tooltip"})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Disabled,v as Light,w as Primary,j as WithTooltip};
