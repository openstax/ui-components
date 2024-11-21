import{s as i,a as t,F as h,j as s}from"./index.15efebc5.js";import"./Radio.cf240007.js";import{C as y}from"./Checkbox.0a686091.js";const m=i.label`
  display: flex;
  flex-direction: column;
  flex: 0;
  justify-content: stretch;
`,x=i.span`
  white-space: nowrap;
  font-weight: bold;
  display: block;
`,u=i.p`
  font-style: italic;
  margin: 0;
  padding: 0;
`,f=({value:n,...r})=>n?t(u,{...r,children:n}):null,w=n=>n.show?t(h,{children:"*"}):null,g=i.input`
  flex: 1;
  justify-content: stretch;
`,b=i.div`
  flex-direction: row;
  display: flex;
`,I=({label:n,addon:r,help:a,wrapperProps:o,onChangeValue:c,...e})=>s(m,{...o,children:[s(x,{children:[t(w,{show:e.required}),n,":"]}),s(b,{children:[t(g,{type:"text",...e,onChange:l=>{var d;c==null||c(e.transformValue?e.transformValue(l.target.value):l.target.value),(d=e.onChange)==null||d.call(e,l)}}),r]}),t(f,{value:a})]});i.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;i(x)`
  white-space: normal;
`;const v=i.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`,j=i.p`
  color: #C22032;
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  line-height: 2.5rem;
`,q=({label:n,help:r,wrapperProps:a,error:o,onChangeValue:c,...e})=>s(m,{...a,children:[t(v,{children:t(y,{...e,onChange:l=>{var d;c==null||c(!!l.target.checked),(d=e.onChange)==null||d.call(e,l)},children:s(x,{children:[t(w,{show:e.required}),n]})})}),t(f,{value:r}),o!==void 0&&t(h,{children:o.map(l=>t(j,{children:l}))})]});export{q as C,I as T};
