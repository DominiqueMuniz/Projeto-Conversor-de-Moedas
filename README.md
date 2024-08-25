Descrição do projeto:
    O "Conversor de Moedas" é uma aplicação web que tem como função principal converter valores entre diferentes moedas. Utilizando uma API pública de taxas de câmbio, a aplicação fornece conversões precisas e em tempo real entre as principais moedas do mundo. A interface é intuitiva e fácil de usar, tornando o processo de conversão simples e eficiente.

    FUNCIONALIDADES:
    - Conversão de Moedas em Tempo Real: Converte valores de uma moeda para outra usando taxas de câmbio atualizadas.
    - Seleção de Moedas: Permite que o usuário selecione a moeda de origem e a moeda de destino para a conversão, tais moedas são buscadas direto da API e são carregadas na janela principal quando todo o arquivo HTML e CSS estão totalmente carregados.
    - Entrada de Valor Personalizada: O usuário pode inserir o valor que deseja converter.
    - Interface Responsiva: A aplicação é responsiva e se adapta a diferentes tamanhos de tela, oferecendo uma experiência de usuário consistente em dispositivos móveis e desktops, a partir de um certo limite de pixel de largura a tela se organiza para que a aba de resultado fique abaixo do formulario de conversão.

Instruções de como executar a aplicação:
    1º Execute o arquivo Index.html para ter acesso a aplicação.
    2º Digite o Valor que deseja converter no local indicado pelo texto "Digite o valor".
    3º Selecione as Moedas, neste local o usuario deve escolher a moeda de origem e a moeda de destino usando os menus suspensos.
    4º Clique no botão "Converter" para ver o resultado da conversão.

Tecnologias utilizadas:
    - HTML: Para a estruturação da página web.
    - CSS: Para o estilo e layout da interface, incluindo suporte para design responsivo.
    - TypeScript: Para a lógica da aplicação e integração com a API de taxas de câmbio.
    - API de Taxas de Câmbio: A aplicação consome dados de uma API que retorna um objeto JSON com as taxas de câmbio em relação ao dólar americano , possibilitando assim converter outros valores utilizando o USD como base, foi utilizado neste projeto a ExchangeRate-API que oferece um endpoint de exemplo gratuito para testar a conversão de moedas sem necessidade de uma chave de API.

Possíveis melhorias futuras:
    - Aprimoramento da Aba de Resultados: Expandir a funcionalidade da aba de resultados para incluir gráficos que exibam a valorização das moedas ao longo do tempo, destacando também o valor atual de cada moeda. Na versão atual do projeto, apenas o valor da conversão é apresentado, sem fornecer informações detalhadas sobre o valor individual de cada moeda.

    - Implementação de Gráficos de Variação: Adicionar gráficos que mostrem a variação semanal ou mensal das moedas selecionadas. Isso permitirá aos usuários acompanhar flutuações e tendências de mercado, facilitando uma análise mais profunda sobre a performance das moedas ao longo do tempo.