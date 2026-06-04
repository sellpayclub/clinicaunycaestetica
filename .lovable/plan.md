## Plano para resolver agora

1. **Não alterar mais o código**
   - O código já está correto no preview e no repositório.
   - O problema não é mais componente, imagem, cache local ou GitHub.

2. **Forçar a republicação pelo Lovable**
   - Abrir o fluxo de publicação do projeto.
   - Usar **Publish → Update** para gerar um novo bundle JS/CSS.
   - O resultado esperado é parar de servir `index-DjQplw_c.js` e passar a servir um novo arquivo `assets/index-*.js`.

3. **Validar a URL publicada oficial**
   - Conferir `https://clinicaunycaestetica.lovable.app` após o update.
   - Confirmar que a seção de especialistas não mostra Dra. Thays.
   - Confirmar que o HTML publicado referencia um bundle novo, não `index-DjQplw_c.js`.

4. **Validar o domínio customizado**
   - Conferir `https://clinicaunycaestetica.com`.
   - Se o `.lovable.app` estiver atualizado e o `.com` continuar antigo, o problema é conexão/roteamento do domínio customizado.

5. **Se o domínio continuar preso na versão antiga**
   - Verificar em **Project Settings → Domains** se `clinicaunycaestetica.com` e `www.clinicaunycaestetica.com` estão conectados ao projeto correto.
   - Garantir que o domínio primário e o redirecionamento `www`/sem `www` apontam para a mesma publicação.

## O que precisa acontecer

Você precisa aprovar a execução para eu tentar conduzir a validação/publicação pelo fluxo disponível aqui. Se a ferramenta não permitir clicar no botão de publicação diretamente, eu vou te passar exatamente onde clicar e depois valido as URLs publicadas.