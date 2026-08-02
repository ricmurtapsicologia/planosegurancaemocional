# Plano de Segurança Emocional — v2.0.0

Aplicação estática, mobile-first e local-first para apoiar a elaboração e o uso de um plano pessoal de segurança em momentos de crise emocional intensa.

## Arquitetura clínica

A aplicação separa deliberadamente dois contextos:

1. **Usar meu plano agora** — baixa carga cognitiva, uma etapa por vez, priorizando plano previamente preparado, apoio humano e escalonamento de cuidado.
2. **Montar/revisar meu plano** — ambiente mais completo para personalização colaborativa fora do pico da crise.

O plano segue a lógica geral de intervenções de safety planning: sinais de alerta, estratégias internas, contextos sociais, pessoa de confiança, profissionais/serviços, ambiente mais seguro e razões/valores para ganhar tempo.

## Segurança e limites

- não realiza diagnóstico ou avaliação automática de risco;
- não substitui atendimento profissional ou de emergência;
- contato por WhatsApp com o psicólogo é explicitamente apresentado como canal não emergencial;
- conteúdo evita descrições de métodos ou instruções perigosas;
- recursos corporais são opcionais e de baixa exigência física;
- áudio é gerado localmente pela Web Speech API do navegador, sem arquivo externo ou streaming.

## Privacidade

Durante edição, o conteúdo é mantido em `sessionStorage`. A persistência em `localStorage` só ocorre após ação explícita do usuário em **Salvar neste dispositivo**. Há opção de apagar todos os dados salvos.

GitHub Pages não deve ser utilizado para prontuário, diagnóstico, notas clínicas identificáveis ou outros registros protegidos.

## Engenharia

- HTML, CSS e JavaScript separados;
- nenhuma dependência de CDN;
- nenhuma imagem remota;
- Content Security Policy restritiva;
- PWA offline com Service Worker;
- funcionamento essencial independente de YouTube;
- `prefers-reduced-motion`;
- navegação por teclado e foco visível;
- impressão nativa do navegador em substituição a bibliotecas externas para PDF.

## Arquivos

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`
- `assets/icon.svg`

## Nota profissional

Antes de utilizar como peça pública de divulgação profissional, inserir no rodapé o número de CRP validado do responsável. Não inventar ou inferir o registro.
