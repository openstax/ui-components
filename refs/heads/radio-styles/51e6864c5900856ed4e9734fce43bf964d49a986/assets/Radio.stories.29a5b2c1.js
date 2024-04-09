import{s as n,j as a,a as t,F as i}from"./index.19909a57.js";import{c as r}from"./theme.9440ab02.js";import"./palette.15e4d008.js";const l=n.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`,c=n.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${r.palette.white};
  font: inherit;
  color: ${r.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    opacity: 0;
    box-shadow: inset 1em 1em ${r.palette.mediumBlue};
  }

  &:checked::before {
    opacity: 1;
  }
`,o=({children:e,...d})=>a(l,{children:[t(c,{...d,type:"radio"}),e]}),m=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,s=e=>a(m,{children:[t(o,{...e,children:"Label 1"}),t(o,{...e,defaultChecked:!0,children:"Label 2"}),t(o,{...e,children:"Label 3"})]}),b=()=>t(i,{children:s({name:"default"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default};
