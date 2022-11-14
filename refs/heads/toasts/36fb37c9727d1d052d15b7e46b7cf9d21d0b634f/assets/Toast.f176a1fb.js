import{s as g,C as i,R as l,j as o}from"./index.6d11a179.js";import{c as t}from"./theme.e1e15d89.js";var n="/home/runner/work/ui-components/ui-components/src/components/Toast.tsx";const m=500,s=1e3,N=g.div`
  min-height: 5rem;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  ${e=>!e.inline&&i`
    max-width: 28rem;
  `}
  font-size: 1.4rem;

  ${e=>e.dismissAfterMs&&i`
    animation-duration: ${m}ms;
    animation-timing-function: ease;
    animation-delay: ${e.dismissAfterMs-m}ms;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-play-state: running;
    animation-fill-mode: forwards;
    animation-name: toast-animation;

    @keyframes toast-animation {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
  `}

  ${e=>e.inline&&i`
    margin: 0 auto;
    box-shadow: none;
    border: 1px solid rgba(0,0,0,0.2);
  `}

  > * {
    flex-grow: 1;
  }

  .title {
    padding: 1rem;
    font-weight: bold;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  .body {
    padding: 1rem;
  }

  .success {
    .title {
      color: ${t.palette.darkerGreen};
      background-color: ${t.palette.paleGreen};
    }
  }

  .neutral {
    .title {
      color: ${t.palette.neutralDarker};
      background-color: ${t.palette.neutralLighter};
    }
  }

  .failure {
    .title {
      color: ${t.palette.darkRed};
      background-color: ${t.palette.paleRed};
      .openstax-icon[type="close"] {
        color: ${t.palette.neutralDark};
        margin-left: 2rem;
        align-self: flex-start;
      }
    }
    .body {
      button {
        padding-left: 0;
        font-size: 1.6rem;
      }
    }
  }
`,y=({id:e,title:c,children:d,variant:u="neutral",inline:f=!1,dismissAfterMs:a,onDismiss:r})=>{const[p,b]=l.useState(!0);return l.useEffect(()=>{!a||setTimeout(()=>{b(!1),r&&r(e)},a)},[]),p?(a&&a<s&&(a=s),o(N,{dismissAfterMs:a,inline:f,children:o("div",{className:u,children:[o("div",{className:"title",children:c},void 0,!1,{fileName:n,lineNumber:151,columnNumber:7},void 0),o("div",{className:"body",children:d},void 0,!1,{fileName:n,lineNumber:152,columnNumber:7},void 0)]},void 0,!0,{fileName:n,lineNumber:150,columnNumber:5},void 0)},void 0,!1,{fileName:n,lineNumber:148,columnNumber:10},void 0)):null};export{y as T};
