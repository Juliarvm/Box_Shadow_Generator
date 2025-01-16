# Gerador de Box Shadow

Este é um projeto de Gerador de Box Shadow que permite criar e personalizar sombras de elementos para usar em seus projetos CSS. A interface interativa permite configurar todos os parâmetros da sombra, como deslocamento, intensidade de borrão, cor, opacidade, e muito mais. Após configurar os valores desejados, o usuário pode copiar a regra gerada diretamente para o seu arquivo CSS.

## Tecnologias Utilizadas
- HTML: Estrutura da página.
- CSS: Estilização da interface e dos elementos.
- JavaScript: Lógica para gerar e atualizar as propriedades de box-shadow.

## Funcionalidades
- Escolher a Forma: O usuário pode selecionar entre retângulo, quadrado, círculo ou losango para aplicar a sombra.
- Configuração de Deslocamento: Personalize os valores de deslocamento horizontal e vertical da sombra.
- Controle de Intensidade de Borrão (Blur): Ajuste a intensidade do borrão para suavizar a sombra.
- Controle de Espalhamento (Spread): Defina a intensidade do espalhamento da sombra.
- Cor da Sombra: Escolha a cor da sombra usando um seletor de cores.
- Opacidade: Altere a opacidade da sombra.
- Sombra Interna (Inset): Habilite ou desabilite a sombra interna.
- Visualização em Tempo Real: Visualize a sombra gerada em tempo real no box de pré-visualização.
- Geração de Regra CSS: Aplique as configurações e copie a regra gerada no formato padrão CSS, Webkit e Moz para usar diretamente no seu projeto.


## Instruções para Executar o Sistema
1. Clone o repositório para o seu ambiente local
2. Navegue até a pasta do projeto
3. Abra o arquivo index.html em um navegador de sua escolha
4. O sistema estará acessível diretamente pela interface web, e você poderá interagir com as funcionalidades de geração de box-shadow.


## Decisões de Projeto
- HTML foi usado para estruturar o conteúdo da página e organizar os controles e a visualização do efeito.
- CSS foi utilizado para estilizar a interface, com flexbox para garantir que os controles e a pré-visualização ficassem bem alinhados.
- JavaScript foi utilizado para manipular os valores dos controles e gerar a regra CSS correspondente, atualizando a visualização em tempo real.