import React from 'react';
import Card from '../Card';

const Skills = () => {
  return (
  <section id='skills'>
    <h1>Competências</h1>
    <div className="grid">
      <Card title='React' description='Virtual DOM, Componentização, Data flow e states, Conditional Rendering, tipagem com Typescript, hooks, context, api e libs importantes, como axios, styled components e outros...' icon={'images/react.jpg'}/>
      <Card title='Typescript' description='Tipagem em geral para uso em React e Next.js.' icon={'images/typescript.png'}/>
      <Card title='Javascript' description='Objetos, Classes, Prototypes, Loops, Arrow Functions, Promises, Ajax, Fetch e AsyncAwait.' icon={'images/javascript.png'}/>
      <Card title='Sass' description='Estilização em geral, Flex e Grid, Tipografia, box-model e shadow-box, contextual classes and variables, canvas, transitions e transform, etc.' icon={'images/sass.png'}/>
      <Card title='Next.js' description='Server-side Rendering, Static-site Generation, Client-side Rendering, Dynamic routing, Authentication e Incremental Static Regeneration.' icon={'images/nextjs-icon.svg'}/>
      <Card title='Git' description='Versionamento de código em geral.' icon={'images/git.png'}/>
      <Card title='SQL' description='Manipulação de dados em geral.' icon={'images/sql.png'}/>
      <Card title='Design Responsivo' description='Design responsivo com media queries, rem, e porcentagens.' icon={'images/responsive.svg'}/>
    </div>

  </section>
);
}

export default Skills;