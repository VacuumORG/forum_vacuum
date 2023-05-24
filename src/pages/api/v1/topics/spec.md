# Tópico - Spec

| Verbos | Protegida | Rota                              | Descrição                                                                        |
| ------ | --------- | --------------------------------- | -------------------------------------------------------------------------------- |
| POST   | Não       | /api/v1/topics                    | Esta rota é usada para criar o tópico.                                           |
| GET    | Não       | /api/v1/topics                    | Esta rota retorna todos os tópicos com parâmetros.                               |
| GET    | Não       | /api/v1/topics/$id:topic          | Esta rota retorna informações sobre um tópico específico.                        |
| GET    | Não       | /api/v1/topics/$id:topic/comments | Esta rota retorna uma lista de commentários de acordo com um tópcio específico.  |
| GET    | Não       | /api/v1/topics/$id:topic/likes    | Esta rota retornar uma contagem dos likes feitos em um tópico específico.        |
| GET    | Não       | /api/v1/topics/$id:topic/views    | Esta rota retornar uma contagem de visualizações feitos em um tópico específico. |
