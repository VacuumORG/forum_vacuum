# Forum Vacuum

> Frontend do projeto

## Tecnologias

- Next Framework - v13.2.4
- Nodejs - v19.8.1

## Como rodar o projeto no ambiente de desenvolvimento

Clone o projeto

```bash
git clone git@github.com:VacuumORG/forum_vacuun_front.git
```

Baixe as dependencias do projeto

```bash
yarn
```

Comando para iniciar o projeto

```bash
yarn dev
```

---

## Pontos para ter atenção

Antes de enviar uma branch nova para o projeto, garanta a funcionalidade dele e sem warnings rodando o seguinte comando

1. Confira se os testes estão passando

   ```bash
       yarn cy:run
   ```

2. Confira a formatação dos arquivo se estão seguindo os padrões sugeridos

   ```bash
       yarn fmt
   ```

   > Caso não passe rode

   ```bash
       yarn fmt:fix
   ```

O nome das branchs deve seguir o nome abaixo

`feat/<nova funcionalidade>`
`fix/<problema a resolver>`

[Padrões de commit](https://github.com/iuricode/padroes-de-commits)
