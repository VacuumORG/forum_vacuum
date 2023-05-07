# Forum Vacuum

## Descrição do projeto

Desenvolvimento do Site da Vacuum na modalidade Fórum.

Desenvolvido de ponta a ponta por membros da comunidade, com 3 grandes áreas, Frontend, Backend e Design (UI/UX), além de Gestão de Projetos.

O objetivo é disponibilizar todas as funcionalidades e ferramentas que temos na comunidade do Discord para pessoas que não estão inseridas dentro da comunidade, ampliando seu alcance, gerando novas oportunidades de networking, desenvolvimento profissional e pessoal.

## Informações técnicas

### Tecnologias em uso

- NodeJS v19.8.1
- React v18.2.0
- NextJS v13.2.4
- Supabase v2.21.0

### Como executar o projeto

Extras:

- Instale o Yarn: `npm install -g yarn`

Projeto:

1. Clone o projeto: `git clone git@github.com:VacuumORG/forum_vacuun_front.git`
2. Acesse a pasta do projeto: `cd forum_vacuun_front`
3. Instale as dependências do projeto: `yarn install`
4. Rode o projeto: `yarn dev`

## Informações para os contribuidores

### Normas para PR

Antes de enviar um Pull Request (PR) para o projeto, por favor, execute os seguintes verificadores:

- Excutando os Testes: `yarn cy:run`
  - Caso algum teste quebre, corriga antes de enviar o PR.
- Executando a Formatação de código: `yarn fmt`
  - Caso esteja com erro na formatação, tente corrigir com: `yarn fmt:fix`

### Normas de nomeclaturas

- Branchs: O nome das branchs deve seguir o nome abaixo

Os nomes das branchs devem seguir o seguinte padrão:

- Nova funcionalidade: `feat/<nova funcionalidade>`
- Correção de problemas: `fix/<problema a resolver>`

Os textos dos commits devem seguir os seguintes padrões:

- [Padrões de commit](https://github.com/iuricode/padroes-de-commits)
