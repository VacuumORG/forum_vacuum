# Perfil - Spec

| Verbos | Protegida | Rota                                          | Descrição                                                                             |
| ------ | --------- | --------------------------------------------- | ------------------------------------------------------------------------------------- |
| GET    | Não       | /api/v1/profiles                              | Esta rota retorna uma lista de perfis.                                                |
| POST   | Não       | /api/v1/profiles                              | Esta rota é usada para criar um novo perfil (usuário).                                |
| GET    | Sim       | /api/v1/profiles/$id:profile                  | Esta rota retorna informações sobre um perfil específico.                             |
| GET    | Sim       | /api/v1/profiles/$id:profile/topics           | Esta rota retorna uma lista de tópicos criados por um perfil específico.              |
| GET    | Sim       | /api/v1/profiles/$id:profile/comments         | Esta rota retornar uma lista de todos os comentários feitos por um perfil específico. |
