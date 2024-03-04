import{s,a as e,R as l,j as r}from"./index.3d5ddc64.js";import{t as o,b as c,a as m,c as u}from"./Tabs.4a6e45c5.js";import"./theme.bec4d521.js";import"./palette.15e4d008.js";const h=s.div`
  ${o}
  ${c}

  > * {
    all: unset;
    ${m}
    ${u}
  }
`,d=({size:t="medium",children:a,...i})=>e(h,{size:t,...i,children:a}),b=s.div`
  padding: 2.4rem;
`,B=()=>{const[t,a]=l.useState("medium");return r(b,{children:[r("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:n=>a(n.currentTarget.value),defaultValue:t,children:["large","medium","small"].map(n=>e("option",{children:n},n))})]}),e("br",{}),e("br",{}),r(d,{size:t,children:[e("a",{children:"First Item"}),e("a",{"data-selected":!0,children:"Second Item"})]}),e("br",{}),e("br",{}),r(d,{size:t,children:[e("button",{children:"First Item"}),e("button",{"data-selected":!0,children:"Second Item"}),e("button",{children:"Third Item"})]}),e("br",{}),e("br",{}),r(d,{size:t,children:[e("button",{children:"First Item with a really long title"}),e("button",{children:"Second Item"}),e("button",{children:"Third Item"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{B as Examples};
