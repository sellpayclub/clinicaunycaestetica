Confirmado: o preview está correto e não mostra Dra. Thays, mas o site publicado/domínio customizado ainda carrega um bundle antigo (`assets/index-DjQplw_c.js`) e por isso mostra Dra. Thays. A publicação está pública, então não é bloqueio de privacidade.

Plano de ação:

1. Forçar uma nova versão real do frontend
   - Fazer uma pequena alteração visível/identificável e segura no código já correto, para garantir que o sistema gere um novo bundle com hash diferente.
   - Manter a Dra. Thays removida da lista de especialistas.

2. Validar no preview
   - Confirmar novamente que o preview não contém `Dra. Thays`, `Tricologista` ou o bundle antigo.

3. Republicar corretamente
   - Abrir o fluxo de publicação para usar `Publish → Update`.
   - Depois da publicação, validar o domínio `.lovable.app` e o domínio customizado `clinicaunycaestetica.com`.

4. Se o domínio customizado continuar antigo após o `.lovable.app` atualizar
   - Tratar como problema de roteamento/DNS/domínio customizado, não de código.
   - Verificar se o domínio está redirecionando para `www.clinicaunycaestetica.com` e se ambos (`clinicaunycaestetica.com` e `www.clinicaunycaestetica.com`) estão conectados ao mesmo projeto.
   - Orientar ajuste em Project Settings → Domains, se necessário.

Resultado esperado:
- Preview, `clinicaunycaestetica.lovable.app` e `clinicaunycaestetica.com` exibindo a mesma versão, sem Dra. Thays.