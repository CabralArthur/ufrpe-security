## Troca de informação com iframes

- A partir do arquivo `frame1.html` foi possível acessar todos os iframes presentes dentro do `index.html`

- Após isso, foi escutado o evento de click nos botões presentes dentro dos 2 `<frame>'s`.

- Ao ser clicado, a função `postMessage` é chamada

- O evento de message é escutado e, troca-se o conteúdo dos inputs dos frames