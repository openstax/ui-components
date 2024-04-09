import{s as n,j as a,a as r,F as d}from"./index.2aa33a75.js";import{c as t}from"./theme.d95f6de0.js";import"./palette.15e4d008.js";const m=n.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`,c=n.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${t.palette.white};
  font: inherit;
  color: ${t.palette.pale};
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
    box-shadow: inset 1em 1em ${t.palette.mediumBlue};
  }

  &:checked::before {
    opacity: 1;
  }
`,o=({children:e,...i})=>a(m,{children:[r(c,{...i,type:"radio"}),e]}),l=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,s=e=>a(l,{children:[r(o,{name:"primary",variant:e,children:"Label 1"}),r(o,{name:"primary",variant:e,defaultChecked:!0,children:"Label 2"}),r(o,{name:"primary",variant:e,children:"Label 3"})]}),y=()=>r(d,{children:s("primary")});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Primary};
