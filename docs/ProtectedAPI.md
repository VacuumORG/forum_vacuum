# Definição da Proteção das API's

## authGuard

O `authGuard` é um módulo responsável por garantir que as solicitações sejam autorizadas antes de prosseguir. Ele usa o `httpVerbGuard` para verificar se a solicitação HTTP está dentro de uma lista de métodos aceitos. Em seguida, ele usa o Supabase para atualizar a sessão do usuário e retornar a sessão e o usuário se for bem-sucedido.

### Uso

```typescript
import { NextApiRequest, NextApiResponse } from 'next'
import { auth, httpVerb } from './authGuard'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = await auth(req, res, httpVerb.GET, httpVerb.POST)
  if (!token) return

  // Continue com a lógica do seu handler
}
```

### Parâmetros

- `req: NextApiRequest` - O objeto de solicitação do Next.js
- `res: NextApiResponse` - O objeto de resposta do Next.js
- `httpVerbs: httpVerb[]` - Uma lista de métodos HTTP aceitos

### Retorno

O método `auth` retorna um objeto contendo a sessão e o usuário se a solicitação estiver autorizada. Se a solicitação não estiver autorizada, ele retorna uma resposta HTTP com o código de status apropriado e uma mensagem de erro.

## httpVerbGuard

O `httpVerbGuard` é um módulo que verifica se o método HTTP de uma solicitação está dentro de uma lista especificada de métodos aceitos.

### Uso

```typescript
import { NextApiRequest, NextApiResponse } from 'next'
import { httpVerbGuard, httpVerb } from './httpVerbGuard'

function handler(req: NextApiRequest, res: NextApiResponse) {
  const { released } = httpVerbGuard(req, res, httpVerb.GET, httpVerb.POST)
  if (!released) return

  // Continue com a lógica do seu handler
}
```

### Parâmetros

- `req: NextApiRequest` - O objeto de solicitação do Next.js
- `res: NextApiResponse` - O objeto de resposta do Next.js
- `httpVerbs: httpVerb[]` - Uma lista de métodos HTTP aceitos

### Retorno

O método `httpVerbGuard` retorna o objeto de resposta do Next.js se a solicitação estiver dentro dos limites dos métodos HTTP aceitos. Se a solicitação não estiver dentro dos limites, ele retorna uma resposta HTTP com o código de status apropriado e uma mensagem de erro.
