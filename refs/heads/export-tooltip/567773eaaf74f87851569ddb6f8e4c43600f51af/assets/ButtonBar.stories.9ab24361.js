import{s as o,a as e,R as l,j as c}from"./index.2656daaa.js";import{t as u,b as p,a as h,c as b}from"./Tabs.7a393c9e.js";import"./module.f4fd91d8.js";import"./theme.063d0398.js";import"./palette.15e4d008.js";const S=o.div`
  ${u}
  ${p}

  > * {
    all: unset;
    ${h}
    ${b}
  }
`,d=({size:n="medium",children:r,...s})=>e(S,{size:n,...s,children:r}),C=o.div`
  padding: 2.4rem;
`,$=()=>{const[n,r]=l.useState("medium"),[s,m]=l.useState([0,2,null]),i=(t,a)=>{m([...s.slice(0,t),a,...s.slice(t+1)])};return c(C,{children:[c("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:t=>r(t.currentTarget.value),defaultValue:n,children:["large","medium","small"].map(t=>e("option",{children:t},t))})]}),e("br",{}),e("br",{}),e(d,{size:n,children:["First Item","Second Item"].map((t,a)=>e("a",{"data-selected":s[0]===a,onClick:()=>i(0,a),children:t}))}),e("br",{}),e("br",{}),e(d,{size:n,children:["First Item","Second Item","Third Item"].map((t,a)=>e("a",{"data-selected":s[1]===a,onClick:()=>i(1,a),children:t}))}),e("br",{}),e("br",{}),e(d,{size:n,children:["First Item with a really long title","Second Item","Third Item"].map((t,a)=>e("a",{"data-selected":s[2]===a,onClick:()=>i(2,a),children:t}))})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{$ as Examples};
