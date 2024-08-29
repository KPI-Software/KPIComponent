# Construtor de Componente KPI Software Web

Este repositório contém um construtor de componente da KPI Software Web, desenvolvido com NextJS. O componente é projetado para exibir indicadores-chave de desempenho em uma interface de usuário de forma clara e intuitiva.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:


### `src/components/Model/index.tsx`

O componente `Model` é o pai do seu componente, ele vai ser responsavel por encapsular o seu componente. Nesse caso, as dimensões do seu componente devem se comportar de acordo com as dimensões do `Model`

### `src/components/YourComponent/index.tsx`

O componente `YourComponent` é o seu componente! Fique a vontade de colocar qualquer nome! O seu componente vai receber os dados, via props, e com eles, você criará o seu componente.

# ⚠️ **Importante!!**

Você deve **configurar um ecossistema** dentro da pasta do seu componente, incluindo a criação de **hooks**, **contextos**, **utilitários** e outros elementos necessários. Manter essa estrutura é essencial para garantir a **organização** e a **consistência** do projeto.

**Qualquer tentativa de criar essas separações em diretórios diferentes será desconsiderada.**

Por favor, siga essas diretrizes para evitar problemas e garantir que o projeto permaneça bem estruturado.


### `src/types/KPIComponent.ts`

A interface `IKPIComponent` é a interface padrão de cada componente do KPI Software Web. Cada componente vai receber as seguintes propriedades. Para mais detalhes de qual é a funcionalidade de cada campo, acesse o arquivo `src/types/KPIComponent.ts`.

```typescript
export interface IKPIComponent<M = any, I = any, CL = any, CM = any> {
  owner: string;
  modelName: string;
  name: string;
  styles: {
    gap: number;
    skin: Record<number, { fontColor: string; backgroundColor: string }>;
  };
  propriety: {
    model: M;
    indicator: I;
  };
  values: {
    calculated: CL;
    component: CM;
  };
}
```

### `src/manifest.json`

O arquivo `manifest.json` contém informações sobre o seu componente KPI, como a configuração, metadados e outros parâmetros que definem como o componente deve ser exibido e utilizado.

**Exemplo de `manifest.json`:**

```json
{
  "name": "Nome do seu componente",
  "owner": "O seu nome",
  "version": "A versão do seu componente",
  "path": "Qual é o nome da pasta do seu componente"
}
```

### `src/mockedData.json`

O arquivo `mockedData.json` contém dados de exemplo para testar e configurar o componente KPI. Ele define várias propriedades relacionadas ao componente, incluindo informações sobre o proprietário, o nome do modelo, estilos e valores. O JSON segue o padrão da interface IKPIComponente.

### Duvidas?

Entre em contato com o suporte: contato@kpisoftware.com.br.
