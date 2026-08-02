# Plano de Segurança Emocional — v2.1.0

Aplicação estática, mobile-first e local-first para apoiar a elaboração e o uso de um plano pessoal de segurança em momentos de crise emocional intensa.

## Arquitetura clínica

A aplicação separa deliberadamente dois contextos:

1. **Usar meu plano agora** — baixa carga cognitiva, uma etapa por vez, priorizando plano previamente preparado, apoio humano e escalonamento de cuidado.
2. **Montar/revisar meu plano** — ambiente mais completo para personalização colaborativa fora do pico da crise.

O plano segue a lógica geral de intervenções de safety planning: sinais de alerta, estratégias internas, contextos sociais, pessoa de confiança, profissionais/serviços, ambiente mais seguro e razões/valores para ganhar tempo.

## Ajustes da v2.1.0

- CTA de **Ajuda humana agora** permanece visível durante todo o modo de crise;
- contatos personalizados já salvos são priorizados no modal de ajuda;
- correção do estado visual/ARIA dos botões de voz;
- áudios guiados passaram de temporização fixa para encadeamento pelo término real de cada frase;
- navegação passou a respeitar histórico do navegador e gesto/botão voltar do dispositivo;
- armazenamento local agora falha de forma controlada quando o navegador bloqueia Web Storage;
- último passo passou a indicar claramente **Recomeçar os passos**;
- contraste do dourado usado em texto pequeno foi elevado;
- impressão/PDF preserva identificação profissional e amplia `textarea` antes da impressão;
- Service Worker passou a armazenar apenas respostas locais válidas e recebeu cache `v2.1.0`;
- metadados básicos de compartilhamento e URL canônica foram adicionados;
- identificação profissional pública atualizada para **Richelmy Murta Pinto — Psicólogo clínico — CRP 04/54.383**.

## Segurança e limites

- não realiza diagnóstico ou avaliação automática de risco;
- não substitui atendimento profissional ou de emergência;
- contato por WhatsApp com o psicólogo é explicitamente apresentado como canal não emergencial;
- conteúdo evita descrições de métodos ou instruções perigosas;
- recursos corporais são opcionais e de baixa exigência física;
- áudio usa a Web Speech API quando disponível; a disponibilidade e o funcionamento sem conexão dependem das vozes oferecidas pelo navegador/dispositivo.

## Privacidade

Durante edição, o conteúdo é mantido em `sessionStorage`. A persistência em `localStorage` só ocorre após ação explícita do usuário em **Salvar neste dispositivo**. Há opção de apagar todos os dados salvos.

As operações de Web Storage são encapsuladas para que bloqueios do navegador ou modos restritivos não interrompam o restante da aplicação.

GitHub Pages não deve ser utilizado para prontuário, diagnóstico, notas clínicas identificáveis ou outros registros protegidos.

## Engenharia

- HTML, CSS e JavaScript separados;
- nenhuma dependência de CDN ou framework;
- nenhuma imagem remota;
- Content Security Policy restritiva via `<meta>`;
- PWA offline com Service Worker;
- funcionamento essencial independente de YouTube;
- `prefers-reduced-motion`;
- navegação por teclado e foco visível;
- histórico de navegação para `#inicio`, `#agora` e `#revisar`;
- impressão nativa do navegador em substituição a bibliotecas externas para PDF.

### Nota sobre CSP no GitHub Pages

A diretiva `frame-ancestors` não é aplicada quando declarada por `<meta http-equiv="Content-Security-Policy">`. Por isso ela não é apresentada como proteção ativa nesta versão. Uma política anti-embedding robusta exige cabeçalho HTTP configurável na hospedagem.

## Arquivos

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`
- `assets/icon.svg`

## Identificação profissional

**Richelmy Murta Pinto**  
Psicólogo clínico  
**CRP 04/54.383**

## Versão

`v2.1.0` — ajustes cirúrgicos de segurança de uso, ergonomia cognitiva, acessibilidade, navegação, áudio, persistência local, impressão e identificação profissional.
