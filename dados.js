let dados = [ 
  {
   "titulo": "abbr",
   "descricao": "Usada para representar uma abreviação ou acrônimo.",
   "exemplo": "<abbr title='Hypertext Markup Language'>HTML</abbr>"
  },
  {
   "titulo": "address",
   "descricao": "Define informações de contato do autor ou proprietário de um documento.",
   "exemplo": "<address>Contato: email@example.com</address> ; <address>Rua Exemplo, 123</address>"
  },
  {
    "titulo": "article",
    "descricao": "Representa um conteúdo independente em um documento, como um artigo de revista ou jornal.",
    "exemplo": "<article><h2>Artigo Título</h2><p>Conteúdo do artigo.</p></article>"
  },
  {
    "titulo": "aside",
    "descricao": "Define um conteúdo lateral que está relacionado ao conteúdo principal.",
    "exemplo": "<aside><p>Conteúdo relacionado.</p></aside>"
  },
  {
    "titulo": "audio",
    "descricao": "Utilizada para incorporar conteúdo de áudio em um documento.",
    "exemplo": "<audio controls><source src='audio.mp3' type='audio/mpeg'></audio>"
  },
  {
    "titulo": "b",
    "descricao": "Destaca o texto de forma importante, sem dar ênfase forte.",
    "exemplo": "<b>Texto em negrito</b>"
  },
  {
    "titulo": "base",
    "descricao": "Especifica a URL base para todos os URLs relativos em um documento.",
    "exemplo": "<base href='https://www.example.com/'>"
  },
  {
    "titulo": "bdi",
    "descricao": "Isola uma parte de texto que pode ser formatada em uma direção diferente da do texto ao redor.",
    "exemplo": "<bdi>Texto de Direção Independente</bdi>"
  },
  {
    "titulo": "canvas",
    "descricao": "Usada para desenhar gráficos em um documento através de scripts.",
    "exemplo": "<canvas id=\"myCanvas\" width=\"200\" height=\"100\"></canvas>"
  },
  {
    "titulo": "col",
    "descricao": "Especifica atributos para cada coluna de um grupo em uma tabela.",
    "exemplo": "<col span='2' style='background-color:lightgrey'>"
  },
  {
    "titulo": "colgroup",
    "descricao": "Define um grupo de uma ou mais colunas em uma tabela para formatação.",
    "exemplo": "<colgroup><col span='2' style='background-color:lightgrey'></colgroup>"
  },
  {
    "titulo": "data",
    "descricao": "Vincula o conteúdo legível ao formato de dados legíveis por máquina.",
    "exemplo": "<data value='2024-09-07'>7 de Setembro de 2024</data>"
  },
  {
    "titulo": "datalist",
    "descricao": "Define uma lista de opções predefinidas para um campo de entrada.",
    "exemplo": "<datalist id='opcoes'><option value='Opção 1'><option value='Opção 2'></datalist>"
  },
  {
    "titulo": "details",
    "descricao": "Cria uma widget de desdobramento que pode ser visualizado ou ocultado pelo usuário.",
    "exemplo": "<details><summary>Clique para mais informações</summary>Detalhes ocultos aqui</details>"
  },
  {
    "titulo": "dfn",
    "descricao": "Especifica um termo que está sendo definido em um conteúdo.",
    "exemplo": "<dfn>Termo Definido</dfn>"
  },
  {
    "titulo": "embed",
    "descricao": "Incorpora conteúdo externo, como um aplicativo ou plugin.",
    "exemplo": "<embed src='arquivo.swf' width='300' height='200'>"
  },
  {
    "titulo": "figure",
    "descricao": "Especifica conteúdo autônomo, como ilustrações, diagramas, fotos, listagens de códigos.",
    "exemplo": "<figure><img src='imagem.png'><figcaption>Descrição da Imagem</figcaption></figure>"
  },
  {
    "titulo": "form",
    "descricao": "Define um formulário HTML usado para coletar dados de entrada do usuário.",
    "exemplo": "<form action='/submit' method='post'></form>"
  },
  {
    "titulo": "hgroup",
    "descricao": "Agrupa um conjunto de cabeçalhos (h1-h6).",
    "exemplo": "<hgroup><h1>Título Principal</h1><h2>Subtítulo</h2></hgroup>"
  },
  {
    "titulo": "i",
    "descricao": "Representa um trecho de texto que se distingue do texto normal por alguma razão.",
    "exemplo": "<i>Texto em itálico</i>"
  },
  {
    "titulo": "iframe",
    "descricao": "Incorpora outra página HTML dentro da página atual.",
    "exemplo": "<iframe src='https://www.example.com' width='300' height='200'></iframe>"
  },
  {
    "titulo": "ins",
    "descricao": "Representa um texto que foi adicionado ao documento.",
    "exemplo": "<ins>Texto inserido</ins>"
  },
  {
    "titulo": "kbd",
    "descricao": "Representa uma entrada do usuário, geralmente do teclado.",
    "exemplo": "<kbd>Ctrl + C</kbd>"
  },
  {
    "titulo": "label",
    "descricao": "Define um rótulo para um elemento de entrada em um formulário.",
    "exemplo": "<label for='nome'>Nome:</label>"
  },
  {
    "titulo": "link",
    "descricao": "Especifica a relação entre o documento atual e um recurso externo; folha de estilo.",
    "exemplo": "<link rel='stylesheet' href='styles.css'>"
  },
  {
    "titulo": "map",
    "descricao": "Define um mapa de imagem para vincular áreas clicáveis dentro de uma imagem.",
    "exemplo": "<map name='imagemMap'><area shape='rect' coords='34,44,270,350' href='link.html'></map>"
  },
  {
    "titulo": "meta",
    "descricao": "Define metadados sobre o documento HTML, como descrição, palavras-chave e autor.",
    "exemplo": "<meta name='description' content='Descrição da página'>"
  },
  {
    "titulo": "meter",
    "descricao": "Representa uma medição escalar dentro de um intervalo conhecido.",
    "exemplo": "<meter value='2' min='0' max='10'>2 de 10</meter>"
  },
  {
    "titulo": "nav",
    "descricao": "Define um conjunto de links de navegação.",
    "exemplo": "<nav><a href='#'>Home</a> | <a href='#'>Sobre</a></nav>"
  },
  {
    "titulo": "object",
    "descricao": "Representa um recurso externo, como uma imagem, vídeo ou plugin.",
    "exemplo": "<object data='arquivo.swf' width='300' height='200'></object>"
  },
  {
    "titulo": "optgroup",
    "descricao": "Agrupa opções relacionadas dentro de um elemento <select>.",
    "exemplo": "<optgroup label='Grupo 1'><option value='1'>Opção 1</option></optgroup>"
  },
  {
    "titulo": "option",
    "descricao": "Define uma opção em um menu suspenso.",
    "exemplo": "<option value='valor'>Texto da Opção</option>"
  },
  {
    "titulo": "picture",
    "descricao": "Permite definir diferentes fontes de imagem para diferentes condições.",
    "exemplo": "<picture><source media='(min-width: 800px)' srcset='imagem-grande.jpg'><img src='imagem-pequena.jpg' alt='Descrição da Imagem'></picture>"
  },
  {
    "titulo": "progress",
    "descricao": "Representa o progresso de uma tarefa em andamento.",
    "exemplo": "<progress value='70' max='100'>70%</progress>"
  },
  {
    "titulo": "q",
    "descricao": "Representa uma citação curta.",
    "exemplo": "<q>Citação curta aqui</q>"
  },
  {
    "titulo": "rp",
    "descricao": "Fornece conteúdo para navegadores que não suportam a renderização de ruby.",
    "exemplo": "<rp>(</rp>Texto de Ruby<rp>)</rp>"
  },
  {
    "titulo": "rt",
    "descricao": "Define a anotação para caracteres de ruby.",
    "exemplo": "<ruby>漢 <rt>kanji</rt></ruby>"
  },
  {
    "titulo": "ruby",
    "descricao": "Representa a anotação de ruby para caracteres asiáticos.",
    "exemplo": "<ruby>漢 <rt>kanji</rt></ruby>"
  },
  {
    "titulo": "s",
    "descricao": "Indica texto que não é mais correto ou relevante.",
    "exemplo": "<s>Texto incorreto</s>"
  },
  {
    "titulo": "samp",
    "descricao": "Representa uma saída de exemplo de um programa de computador.",
    "exemplo": "<samp>Erro: Arquivo não encontrado</samp>"
  },
  {
    "titulo": "select",
    "descricao": "Cria um menu suspenso para o usuário selecionar opções.",
    "exemplo": "<select><option>Opção 1</option><option>Opção 2</option></select>"
  },
  {
    "titulo": "source",
    "descricao": "Especifica várias fontes para elementos de áudio ou vídeo.",
    "exemplo": "<source src='video.mp4' type='video/mp4'>"
  },
  {
    "titulo": "strike",
    "descricao": "Indica texto riscado (desatualizado, mas ainda suportado em alguns navegadores).",
    "exemplo": "<strike>Texto riscado</strike>"
  },
  {
    "titulo": "strong",
    "descricao": "Indica texto de grande importância.",
    "exemplo": "<strong>Texto em negrito forte</strong>"
  },
  {
    "titulo": "table",
    "descricao": "Define uma tabela HTML.",
    "exemplo": "<table><tr><td>Conteúdo</td></tr></table>"
  },
  {
    "titulo": "tbody",
    "descricao": "Agrupa o conteúdo do corpo de uma tabela.",
    "exemplo": "<tbody><tr><td>Conteúdo do Corpo</td></tr></tbody>"
  },
  {
    "titulo": "td",
    "descricao": "Define uma célula de dados em uma tabela.",
    "exemplo": "<td>Dados da Tabela</td>"
  },
  {
    "titulo": "textarea",
    "descricao": "Define uma área de texto multiline.",
    "exemplo": "<textarea rows='4' cols='50'>Texto de Exemplo</textarea>"
  },
  {
    "titulo": "time",
    "descricao": "Define uma data ou hora.",
    "exemplo": "<time datetime='2024-09-07'>7 de Setembro de 2024</time>"
  },
  {
    "titulo": "tr",
    "descricao": "Define uma linha em uma tabela.",
    "exemplo": "<tr><td>Dados</td></tr>"
  },
  {
    "titulo": "ul",
    "descricao": "Define uma lista não ordenada.",
    "exemplo": "<ul><li>Item 1</li><li>Item 2</li></ul>"
  },
  {
    "titulo": "var",
    "descricao": "Representa o nome de uma variável em uma expressão matemática ou programação.",
    "exemplo": "<var>x</var> = <var>y</var> + 2"
  },
  {
    "titulo": "video",
    "descricao": "Incorpora um vídeo no documento.",
    "exemplo": "<video controls><source src='video.mp4' type='video/mp4'></video>"
  },
  {
    "titulo": "wbr",
    "descricao": "Indica uma possível quebra de linha no texto.",
    "exemplo": "UmTexto<wbr>Longo"
  },
  {
    "titulo": "DNS (Sistema de Nomes de Domínio)",
    "descricao": "O sistema de nomes de domínio (DNS) permite que navegadores se comuniquem facilmente com servidores para apresentar o conteúdo de um site. Os servidores DNS “traduzem” os nomes de domínio para endereços IP.",
    "exemplo": "Ao digitar www.exemplo.com, o DNS traduz esse nome para o endereço IP correspondente, como 192.168.1.1."
  },
  {
    "titulo": "Editor DNS",
    "descricao": "Um editor DNS permite que o usuário modifique os registros DNS do seu domínio.",
    "exemplo": "No painel de controle do seu registrador de domínios, você pode usar um editor DNS para adicionar ou alterar registros como A, CNAME, ou MX."
  },
  {
    "titulo": "End of Life (Fim de Vida)",
    "descricao": "Termo que indica o fim próximo do suporte de um produto de hardware ou software.",
    "exemplo": "Um software que atinge o End of Life não receberá mais atualizações ou suporte técnico, como o Windows XP após sua descontinuação."
  },
  {
    "titulo": "Endereço de IP",
    "descricao": "Um endereço de IP (protocolo de internet) é uma sequência de números que serve como identificador único de dispositivos conectados à internet.",
    "exemplo": "O endereço IP 192.168.0.1 identifica um dispositivo específico em uma rede local."
  },
  {
    "titulo": "Gerenciador de Arquivos",
    "descricao": "Uma ferramenta intuitiva que permite ao usuário gerenciar os arquivos do seu site. O Gerenciador de Arquivos da Hostinger, por exemplo, dá ao usuário uma forma fácil de configurar o conteúdo dos seus sites sem utilizar aplicações de terceiros.",
    "exemplo": "Usando o Gerenciador de Arquivos, você pode fazer upload, mover, e excluir arquivos diretamente no painel de controle da sua hospedagem."
  },
  {
    "titulo": "Histórico de Utilização",
    "descricao": "Histórico de Utilização é um recurso presente no hPanel da Hostinger. Ele permite que clientes acompanhem fácil e regularmente os limites do seu plano de hospedagem.",
    "exemplo": "Você pode verificar quantos recursos como espaço em disco e largura de banda foram usados no painel de controle da sua conta de hospedagem."
  },
  {
    "titulo": "Hospedagem Cloud",
    "descricao": "Hospedagem cloud é um tipo de hospedagem web que usa uma rede virtual de servidores para hospedar sites. Alguns benefícios desse tipo de serviço incluem uma maior escalabilidade de recursos, equilíbrio de tráfego e segurança aprimorada.",
    "exemplo": "Serviços de Hospedagem Cloud, como os oferecidos pela Amazon Web Services (AWS), permitem que você aumente os recursos do servidor conforme o tráfego do seu site aumenta."
  },
  {
    "titulo": "Hospedagem Compartilhada",
    "descricao": "Trata-se do tipo de hospedagem web no qual um mesmo servidor hospeda vários sites. É a opção mais acessível e fácil de usar, tornando-a apropriada para iniciantes e sites de tamanho pequeno ou médio.",
    "exemplo": "Um plano de hospedagem compartilhada pode ser ideal para blogs pessoais ou pequenos sites empresariais, onde muitos sites dividem os recursos do mesmo servidor."
  },
  {
    "titulo": "Hospedagem Dedicada",
    "descricao": "Um tipo de hospedagem web na qual cada usuário tem um servidor físico dedicado para os seus sites. Devido ao custo alto e à manutenção mais delicada, trata-se de uma opção mais apropriada para grandes negócios online, que precisam lidar com taxas de tráfego muito altas.",
    "exemplo": "Um grande e-commerce com alto tráfego pode optar por hospedagem dedicada para garantir desempenho e segurança ideais."
  },
  {
    "titulo": "Hospedagem Web",
    "descricao": "O serviço que permite que o conteúdo do seu site fique disponível online. Essencialmente, adquirir um serviço de hospedagem web significa que você está alugando espaço em um servidor web para armazenar os arquivos e dados do seu site.",
    "exemplo": "Ao contratar um serviço de hospedagem web, você está pagando para armazenar arquivos do seu site, como HTML, CSS e imagens, em um servidor acessível pela internet."
  },
  {
    "titulo": "Hospedagem WordPress",
    "descricao": "Trata-se de uma forma de hospedagem especialmente para sites WordPress. Ela traz vários recursos e ferramentas ligados à plataforma, como instaladores de um clique e atualizações automáticas.",
    "exemplo": "Hospedagem WordPress pode incluir funcionalidades como instalação automática do WordPress, temas otimizados, e suporte especializado para resolver problemas relacionados ao CMS."
  },
  {
    "titulo": "Hospedagem VPS",
    "descricao": "VPS (servidor privado virtual) é um tipo de hospedagem web que aloca recursos dedicados aos seus usuários por meio de uma tecnologia de virtualização. A hospedagem VPS é ideal para sites que necessitam de controle sobre as configurações de servidor e possuem muito tráfego.",
    "exemplo": "Com uma VPS, você pode configurar o ambiente do servidor de acordo com suas necessidades específicas e ter mais controle sobre o desempenho do seu site."
  },
  {
    "titulo": "hPanel",
    "descricao": "O hPanel é um painel de controle especial criado pela Hostinger que permite aos usuários administrar suas contas de hospedagem sem precisar acessar o servidor.",
    "exemplo": "Usando o hPanel, você pode gerenciar configurações do servidor, instalar aplicativos, e visualizar estatísticas de uso de forma intuitiva."
  },
  {
    "titulo": "HTTP/HTTPS",
    "descricao": "HTTP e HTTPS são protocolos para transferência de informações e dados na internet. O que os diferencia é que o HTTPS usa protocolos SSL/TLS para criptografia, o que torna a transferência desses dados mais segura.",
    "exemplo": "Sites que usam HTTPS, como https://www.exemplo.com, criptografam a comunicação entre o navegador e o servidor para maior segurança."
  },
  {
    "titulo": "IMAP (Protocolo de Acesso a Mensagens de Internet)",
    "descricao": "IMAP é um protocolo de email de mão-dupla que permite aos usuários acessar e gerenciar seus emails a partir de diferentes dispositivos.",
    "exemplo": "Com IMAP, você pode acessar seus emails de vários dispositivos e o estado das mensagens (lidas, não lidas) será sincronizado entre todos eles."
  },
  {
    "titulo": "IOPS (Operações de Entrada e Saída por Segundo)",
    "descricao": "Trata-se de uma métrica para avaliar quantas tarefas, como escrever ou gravar dados, um disco pode realizar em um segundo.",
    "exemplo": "Um SSD com alta taxa de IOPS pode processar mais transações de dados por segundo do que um HDD tradicional, resultando em melhor desempenho."
  },
  {
    "titulo": "IPv4",
    "descricao": "Representa a quarta versão do protocolo de internet (IP). É usado para identificar dispositivos em uma rede usando um sistema de endereços de 32 bits.",
    "exemplo": "Um endereço IPv4 típico pode ser 192.168.1.1, que é usado para identificar um dispositivo específico em uma rede local."
  },
  {
    "titulo": "IPv6",
    "descricao": "IPv6 é a versão mais recente do IP. Ele traz funcionalidades mais avançadas que seus antecessores, como novas opções de endereços, desempenho mais veloz e segurança aprimorada.",
    "exemplo": "Um endereço IPv6 pode ser 2001:0db8:85a3:0000:0000:8a2e:0370:7334, oferecendo uma gama muito maior de endereços disponíveis em comparação ao IPv4."
  },
  {
    "titulo": "LAMP",
    "descricao": "LAMP é um stack de código aberto para desenvolvimento web que usa o sistema operacional Linux, banco de dados MySQL, servidor web Apache e a linguagem de programação PHP para criar e gerenciar aplicações web.",
    "exemplo": "Um site criado usando a stack LAMP pode ter o Linux como sistema operacional do servidor, Apache como servidor web, MySQL como banco de dados e PHP para a lógica do servidor."
  },
  {
    "titulo": "Largura de Banda",
    "descricao": "Largura de banda (bandwidth) refere-se à quantidade total de dados enviados ou recebidos durante um período específico numa conexão à internet.",
    "exemplo": "Se um site tem uma largura de banda de 100 GB por mês, ele pode transferir até 100 GB de dados para os visitantes antes de atingir o limite."
  },
  {
    "titulo": "LEMP",
    "descricao": "LEMP é uma variante do LAMP, um framework popular para projetar e implantar sites. Ao contrário do LAMP, ele usa servidores web Nginx.",
    "exemplo": "Um site que usa LEMP pode ter o Linux como sistema operacional, MySQL como banco de dados, Nginx como servidor web e PHP para a lógica do servidor."
  },
  {
    "titulo": "Licença GNU",
    "descricao": "Também conhecida como licença pública geral, é uma licença aberta feita para softwares que podem ser modificados e editados por qualquer usuário.",
    "exemplo": "O sistema operacional Linux é distribuído sob a Licença GNU, permitindo que qualquer um use, modifique e redistribua o software."
  },
  {
    "titulo": "Linux",
    "descricao": "Um sistema operacional tipo Unix, o Linux se tornou uma escolha popular entre desenvolvedores por conta da sua interface aberta e personalizável.",
    "exemplo": "Distribuições como Ubuntu e Fedora são exemplos de sistemas operacionais baseados no Linux."
  },
  {
    "titulo": "MySQL",
    "descricao": "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto. É amplamente usado para criar, gerenciar e manter bancos de dados.",
    "exemplo": "Um site que usa MySQL pode armazenar informações de usuários, posts e comentários em um banco de dados relacional."
  },
  {
    "titulo": "PHP",
    "descricao": "PHP é uma linguagem de script amplamente usada para o desenvolvimento web. Ela é frequentemente usada para criar páginas dinâmicas e interativas.",
    "exemplo": "Um site pode usar PHP para gerar conteúdo dinâmico, como páginas de perfil de usuário, baseadas em dados armazenados em um banco de dados."
  },
  {
    "titulo": "SQL",
    "descricao": "SQL (Structured Query Language) é uma linguagem de programação usada para gerenciar e manipular bancos de dados relacionais.",
    "exemplo": "Você pode usar SQL para consultar um banco de dados e obter todos os registros de uma tabela específica."
  },
  {
    "titulo": "SSL (Secure Sockets Layer)",
    "descricao": "SSL é um protocolo de segurança que estabelece um link criptografado entre um servidor web e um navegador. O HTTPS é a versão segura do HTTP, que usa SSL para proteger a troca de informações.",
    "exemplo": "A presença de um cadeado na barra de endereços do navegador indica que a conexão está usando SSL para proteger dados trocados entre o navegador e o servidor."
  },
  {
    "titulo": "TLD (Top-Level Domain)",
    "descricao": "O TLD é a parte final de um nome de domínio, localizada após o último ponto (\".\") no endereço de um site.",
    "exemplo": "Em www.exemplo.com, o TLD é \".com\"."
  },
  {
    "titulo": "Uptime",
    "descricao": "Uptime refere-se ao tempo que um servidor ou site está operacional e disponível para os usuários sem interrupções.",
    "exemplo": "Se um servidor tem um uptime de 99,9%, significa que ele está disponível quase todo o tempo, com muito pouco tempo de inatividade."
  },
  {
    "titulo": "keyframes",
    "descricao": "Regra CSS usada para definir os quadros-chave de uma animação.",
    "exemplo": "@keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }"
  },
  {
    "titulo": "flex",
    "descricao": "Propriedade CSS usada para definir o tamanho flexível de um item em um contêiner flexível.",
    "exemplo": "flex: 1;"
  },
  {
    "titulo": "grid",
    "descricao": "Propriedade CSS usada para definir um contêiner de layout baseado em grid.",
    "exemplo": "display: grid; grid-template-columns: 1fr 1fr;"
  },
  {
    "titulo": "font-family",
    "descricao": "Propriedade CSS usada para definir a fonte do texto de um elemento.",
    "exemplo": "font-family: Arial, sans-serif;"
  },
  {
    "titulo": "text-align",
    "descricao": "Propriedade CSS usada para definir o alinhamento do texto dentro de um elemento.",
    "exemplo": "text-align: center;"
  },
  {
    "titulo": "text-decoration",
    "descricao": "Propriedade CSS usada para definir a decoração do texto (por exemplo, sublinhado, riscado).",
    "exemplo": "text-decoration: underline;"
  },
  {
    "titulo": "text-transform",
    "descricao": "Propriedade CSS usada para definir a transformação do texto (por exemplo, maiúsculas, minúsculas).",
    "exemplo": "text-transform: uppercase;"
  },
  {
    "titulo": "letter-spacing",
    "descricao": "Propriedade CSS usada para definir o espaçamento entre letras em um texto.",
    "exemplo": "letter-spacing: 2px;"
  },
  {
    "titulo": "line-height",
    "descricao": "Propriedade CSS usada para definir a altura da linha de um texto.",
    "exemplo": "line-height: 1.5;"
  },
  {
    "titulo": "box-shadow",
    "descricao": "Propriedade CSS usada para definir a sombra ao redor de um elemento.",
    "exemplo": "box-shadow: 2px 2px 5px rgba(0,0,0,0.3);"
  },
  {
    "titulo": "text-shadow",
    "descricao": "Propriedade CSS usada para definir a sombra do texto.",
    "exemplo": "text-shadow: 1px 1px 2px rgba(0,0,0,0.5);"
  },
  {
    "titulo": "background-image",
    "descricao": "Propriedade CSS usada para definir uma imagem de fundo para um elemento.",
    "exemplo": "background-image: url('imagem.jpg');"
  },
  {
    "titulo": "background-size",
    "descricao": "Propriedade CSS usada para definir o tamanho da imagem de fundo.",
    "exemplo": "background-size: cover;"
  },
  {
    "titulo": "background-repeat",
    "descricao": "Propriedade CSS usada para definir se a imagem de fundo deve ser repetida.",
    "exemplo": "background-repeat: no-repeat;"
  },
  {
    "titulo": "background-position",
    "descricao": "Propriedade CSS usada para definir a posição da imagem de fundo.",
    "exemplo": "background-position: center;"
  },
  {
    "titulo": "transition",
    "descricao": "Propriedade CSS usada para definir a transição entre estados de um elemento.",
    "exemplo": "transition: all 0.3s ease;"
  },
  {
    "titulo": "cursor",
    "descricao": "Propriedade CSS usada para definir o tipo de cursor exibido quando o usuário passa o mouse sobre um elemento.",
    "exemplo": "cursor: pointer;"
  },
  {
    "titulo": "position: absolute",
    "descricao": "Define um posicionamento absoluto do elemento em relação ao contêiner mais próximo com posicionamento relativo.",
    "exemplo": "<div style='position: absolute; top: 10px; left: 20px;'>Posicionado Absoluto</div>"
  },
  {
    "titulo": "position: relative",
    "descricao": "Define um posicionamento relativo do elemento, permitindo deslocamento em relação à sua posição original.",
    "exemplo": "<div style='position: relative; top: 10px; left: 20px;'>Posicionado Relativo</div>"
  },
  {
    "titulo": "position: fixed",
    "descricao": "Define um posicionamento fixo do elemento, fixando-o em uma posição específica na tela.",
    "exemplo": "<div style='position: fixed; bottom: 10px; right: 10px;'>Posicionado Fixo</div>"
  },
  {
    "titulo": "position: sticky",
    "descricao": "Define um posicionamento que é fixo em relação ao contêiner quando o elemento atinge uma posição específica ao rolar.",
    "exemplo": "<header style='position: sticky; top: 0;'>Cabeçalho Fixo</header>"
  },
  {
    "titulo": "flex-direction",
    "descricao": "Propriedade CSS usada para definir a direção dos itens em um contêiner flexível.",
    "exemplo": "flex-direction: column;"
  },
  {
    "titulo": "align-items",
    "descricao": "Propriedade CSS usada para definir o alinhamento dos itens ao longo do eixo transversal em um contêiner flexível.",
    "exemplo": "align-items: center;"
  },
  {
    "titulo": "grid-template-columns",
    "descricao": "Propriedade CSS usada para definir o tamanho das colunas em um contêiner grid.",
    "exemplo": "grid-template-columns: 1fr 2fr;"
  },
  {
    "titulo": "grid-area",
    "descricao": "Propriedade CSS usada para definir a área de um item dentro de um contêiner grid.",
    "exemplo": "grid-area: header;"
  },
  {
    "titulo": "media query",
    "descricao": "Consulta CSS usada para aplicar estilos dependendo das características do dispositivo, como largura da tela.",
    "exemplo": "@media (max-width: 600px) { body { background-color: lightblue; } }"
  },
  {
    "titulo": "z-index",
    "descricao": "Propriedade CSS usada para definir a ordem de empilhamento de elementos sobrepostos.",
    "exemplo": "z-index: 10;"
  },
  {
    "titulo": "visibility: hidden",
    "descricao": "Esconde um elemento, mas ainda ocupa espaço no layout.",
    "exemplo": "<div style='visibility: hidden;'>Não visível</div>"
  },
  {
    "titulo": "visibility: visible",
    "descricao": "Torna um elemento visível.",
    "exemplo": "<div style='visibility: visible;'>Visível</div>"
  },
  {
    "titulo": "opacity",
    "descricao": "Propriedade CSS usada para definir a opacidade de um elemento.",
    "exemplo": "opacity: 0.5;"
  },
  {
    "titulo": "background-color",
    "descricao": "Propriedade CSS usada para definir a cor de fundo de um elemento.",
    "exemplo": "background-color: #f0f0f0;"
  },
  {
    "titulo": "border-style",
    "descricao": "Propriedade CSS usada para definir o estilo da borda de um elemento.",
    "exemplo": "border-style: solid;"
  },
  {
    "titulo": "border-width",
    "descricao": "Propriedade CSS usada para definir a largura da borda de um elemento.",
    "exemplo": "border-width: 2px;"
  },
  {
    "titulo": "border-color",
    "descricao": "Propriedade CSS usada para definir a cor da borda de um elemento.",
    "exemplo": "border-color: #333;"
  },
  {
    "titulo": "border-spacing",
    "descricao": "Propriedade CSS usada para definir o espaço entre as bordas das células em uma tabela.",
    "exemplo": "border-spacing: 10px;"
  },
  {
    "titulo": "caption-side",
    "descricao": "Propriedade CSS usada para definir a posição da legenda de uma tabela.",
    "exemplo": "caption-side: top;"
  },
  {
    "titulo": "list-style",
    "descricao": "Propriedade CSS usada para definir o estilo dos itens de lista, incluindo marcador e tipo.",
    "exemplo": "list-style: square inside;"
  },
  {
    "titulo": "list-style-type",
    "descricao": "Propriedade CSS usada para definir o tipo de marcador para itens de lista.",
    "exemplo": "list-style-type: disc;"
  },
  {
    "titulo": "padding-top",
    "descricao": "Propriedade CSS usada para definir o preenchimento superior de um elemento.",
    "exemplo": "padding-top: 5px;"
  },
  {
    "titulo": "padding-bottom",
    "descricao": "Propriedade CSS usada para definir o preenchimento inferior de um elemento.",
    "exemplo": "padding-bottom: 15px;"
  },
  {
    "titulo": "padding-left",
    "descricao": "Propriedade CSS usada para definir o preenchimento esquerdo de um elemento.",
    "exemplo": "padding-left: 20px;"
  },
  {
    "titulo": "height",
    "descricao": "Propriedade CSS usada para definir a altura de um elemento.",
    "exemplo": "height: 200px;"
  },
  {
    "titulo": "top",
    "descricao": "Propriedade CSS usada para definir a posição vertical de um elemento posicionado.",
    "exemplo": "top: 10px;"
  },
  {
    "titulo": "right",
    "descricao": "Propriedade CSS usada para definir a posição horizontal de um elemento posicionado.",
    "exemplo": "right: 15px;"
  },
  {
    "titulo": "bottom",
    "descricao": "Propriedade CSS usada para definir a posição vertical de um elemento posicionado.",
    "exemplo": "bottom: 20px;"
  },
  {
    "titulo": "left",
    "descricao": "Propriedade CSS usada para definir a posição horizontal de um elemento posicionado.",
    "exemplo": "left: 25px;"
  },
  {
    "titulo": "mix-blend-mode",
    "descricao": "Propriedade CSS usada para definir como um elemento deve ser misturado com o conteúdo abaixo.",
    "exemplo": "mix-blend-mode: multiply;"
  },
  {
    "titulo": "clip-path",
    "descricao": "Propriedade CSS usada para definir uma forma para recortar um elemento.",
    "exemplo": "clip-path: circle(50%);"
  },
  {
    "titulo": "mask",
    "descricao": "Propriedade CSS usada para aplicar uma máscara a um elemento.",
    "exemplo": "mask: url('mask.svg');"
  },
  {
    "titulo": "mask-position",
    "descricao": "Propriedade CSS usada para definir a posição da máscara em um elemento.",
    "exemplo": "mask-position: center;"
  },
  {
    "titulo": "contain-intrinsic-size",
    "descricao": "Propriedade CSS usada para definir um tamanho intrínseco para um elemento quando o valor de contain é 'size'.",
    "exemplo": "contain-intrinsic-size: 100px 100px;"
  },
  {
    "titulo": "contain-intrinsic-width",
    "descricao": "Propriedade CSS usada para definir a largura intrínseca de um elemento quando o valor de contain é 'size'.",
    "exemplo": "contain-intrinsic-width: 200px;"
  },
  {
    "titulo": "scroll-behavior",
    "descricao": "Propriedade CSS usada para definir o comportamento do rolar de uma página.",
    "exemplo": "scroll-behavior: smooth;"
  },
  {
    "titulo": "aspect-ratio",
    "descricao": "Propriedade CSS usada para definir a relação de aspecto de um elemento.",
    "exemplo": "aspect-ratio: 16/9;"
  },
  {
    "titulo": "shape-outside",
    "descricao": "Propriedade CSS usada para definir a forma de uma caixa de layout ao redor de um elemento flutuante.",
    "exemplo": "shape-outside: circle(50%);"
  },
  {
   "titulo": "replace",
   "descricao": "Método que substitui a primeira ocorrência de um padrão em uma string por uma nova substring.",
   "exemplo": "const novoTexto = 'banana'.replace('a', 'o'); // 'bonana'"
  },
  {
   "titulo": "class",
   "descricao": "Palavra-chave usada para definir uma classe em JavaScript, permitindo a criação de objetos com propriedades e métodos.",
   "exemplo": "class Carro { constructor(modelo) { this.modelo = modelo; } }"
  },
  {
   "titulo": "includes",
   "descricao": "Método que verifica se um array ou string contém um determinado elemento ou substring e retorna um booleano.",
   "exemplo": "const lista = ['maçã', 'banana', 'laranja']; lista.includes('banana'); // true"
  },
  {
   "titulo": "return",
   "descricao": "Palavra-chave usada para sair de uma função e opcionalmente retornar um valor.",
   "exemplo": "function soma(a, b) { return a + b; }"
  },
  {
   "titulo": "Function Declaration",
   "descricao": "Forma de definir uma função no JavaScript, usando a palavra-chave 'function'. A função é criada no momento da declaração.",
   "exemplo": "function soma(a, b) { return a + b; }"
  },
  {
   "titulo": "Arrow Function",
   "descricao": "Sintaxe curta para escrever funções no JavaScript, utilizando a sintaxe de 'flecha'.",
   "exemplo": "const soma = (a, b) => a + b;"
  },
  {
   "titulo": "Promise",
   "descricao": "Objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.",
   "exemplo": "const promessa = new Promise((resolve, reject) => { resolve('Dados recebidos'); });"
  },
  {
   "titulo": "Async/Await",
   "descricao": "Sintaxe para trabalhar com código assíncrono em JavaScript, tornando o código mais legível e fácil de entender.",
   "exemplo": "async function obterDados() { const resposta = await fetch('url'); return resposta.json(); }"
  },
  {
   "titulo": "Event Listener",
   "descricao": "Método usado para associar um evento a um elemento HTML, executando uma função quando o evento ocorre.",
   "exemplo": "document.getElementById('botao').addEventListener('click', () => { alert('Botão clicado!'); });"
  },
  {
    "titulo": "mask-size",
    "descricao": "Propriedade CSS usada para definir o tamanho da máscara.",
    "exemplo": "mask-size: cover;"
  },
  {
    "titulo": "mask-composite",
    "descricao": "Propriedade CSS usada para definir a combinação de múltiplas máscaras.",
    "exemplo": "mask-composite: exclude;"
  },
  {
    "titulo": "contain",
    "descricao": "Propriedade CSS usada para definir como um elemento deve ser contido dentro de seu contêiner.",
    "exemplo": "contain: content;"
  },
  {
    "titulo": "contain-intrinsic-height",
    "descricao": "Propriedade CSS usada para definir a altura intrínseca de um elemento quando o valor de contain é 'size'.",
    "exemplo": "contain-intrinsic-height: 300px;"
  },
  {
    "titulo": "scroll-snap-type",
    "descricao": "Propriedade CSS usada para definir o tipo de encaixe de rolagem em um contêiner.",
    "exemplo": "scroll-snap-type: x mandatory;"
  },
  {
    "titulo": "scrollbar-color",
    "descricao": "Propriedade CSS usada para definir a cor da barra de rolagem e do controle.",
    "exemplo": "scrollbar-color: #888 #eee;"
  },
  {
    "titulo": "text-justify",
    "descricao": "Propriedade CSS usada para definir a justificação do texto.",
    "exemplo": "text-justify: inter-word;"
  },
  {
    "titulo": "text-indent",
    "descricao": "Propriedade CSS usada para definir a indentação da primeira linha de um parágrafo.",
    "exemplo": "text-indent: 20px;"
  },
  {
    "titulo": "hyphens",
    "descricao": "Propriedade CSS usada para definir se e como as palavras devem ser divididas automaticamente no final da linha.",
    "exemplo": "hyphens: auto;"
  },
  {
    "titulo": "unicode-bidi",
    "descricao": "Propriedade CSS usada para definir como o texto bidirecional deve ser tratado.",
    "exemplo": "unicode-bidi: bidi-override;"
  },
  {
    "titulo": "max-width",
    "descricao": "Propriedade CSS usada para definir a largura máxima de um elemento.",
    "exemplo": "max-width: 100%;"
  },
  {
    "titulo": "min-width",
    "descricao": "Propriedade CSS usada para definir a largura mínima de um elemento.",
    "exemplo": "min-width: 200px;"
  },
  {
    "titulo": "background",
    "descricao": "Define a cor ou imagem de fundo.",
    "exemplo": "background: url(image.jpg) no-repeat center center;"
  },
  {
    "titulo": "border",
    "descricao": "Define as bordas de um elemento.",
    "exemplo": "border: 1px solid #000;"
  },
  {
    "titulo": "box-shadow",
    "descricao": "Define uma sombra ao redor de um elemento.",
    "exemplo": "box-shadow: 2px 2px 5px #888;"
  },
  {
    "titulo": "color",
    "descricao": "Define a cor do texto.",
    "exemplo": "color: #333;"
  },
  {
    "titulo": "flex",
    "descricao": "Define o crescimento e encolhimento de um item flexível.",
    "exemplo": "flex: 1;"
  },
  {
    "titulo": "font-size",
    "descricao": "Define o tamanho da fonte.",
    "exemplo": "font-size: 16px;"
  },
  {
    "titulo": "font-weight",
    "descricao": "Define o peso da fonte.",
    "exemplo": "font-weight: bold;"
  },
  {
    "titulo": "margin",
    "descricao": "Define a margem ao redor de um elemento.",
    "exemplo": "margin: 10px;"
  },
  {
    "titulo": "padding",
    "descricao": "Define o preenchimento dentro de um elemento.",
    "exemplo": "padding: 20px;"
  },
  {
    "titulo": "transform",
    "descricao": "Aplica uma transformação ao elemento.",
    "exemplo": "transform: rotate(45deg);"
  },
  {
    "titulo": "area",
    "descricao": "Define uma área clicável em uma imagem.",
    "exemplo": "<img src=\"imagem.jpg\" usemap=\"#imagemmap\"><map name=\"imagemmap\"><area shape=\"rect\" coords=\"34,44,270,350\" href=\"link.html\" alt=\"Descrição\"></map>"
  },
  {
    "titulo": "bdi",
    "descricao": "Isola a parte do texto que deve ser renderizada em uma direção diferente.",
    "exemplo": "<p>O <bdi>texto em outra direção</bdi> é destacado.</p>"
  },
  {
    "titulo": "bdo",
    "descricao": "Controla a direção do texto.",
    "exemplo": "<bdo dir=\"rtl\">Texto da direita para a esquerda.</bdo>"
  },
  {
    "titulo": "blockquote",
    "descricao": "Define uma citação de um longo trecho.",
    "exemplo": "<blockquote cite=\"source.html\"><p>Texto da citação.</p></blockquote>"
  },
  {
    "titulo": "body",
    "descricao": "Define o corpo do documento HTML.",
    "exemplo": "<body><h1>Olá, mundo!</h1></body>"
  },
  {
    "titulo": "br",
    "descricao": "Insere uma quebra de linha.",
    "exemplo": "<p>Primeira linha.<br>Segunda linha.</p>"
  },
  {
    "titulo": "button",
    "descricao": "Define um botão clicável.",
    "exemplo": "<button type=\"button\">Clique aqui</button>"
  },
  {
    "titulo": "caption",
    "descricao": "Define uma legenda para uma tabela.",
    "exemplo": "<table><caption>Legenda da Tabela</caption></table>"
  },
  {
    "titulo": "cite",
    "descricao": "Define uma referência a uma fonte.",
    "exemplo": "<cite>Autor, Título do Livro</cite>"
  },
  {
    "titulo": "code",
    "descricao": "Define um trecho de código de computador.",
    "exemplo": "<code>console.log(\"Olá, mundo!\");</code>"
  },
  {
    "titulo": "data",
    "descricao": "Define um valor de dados associado a um item.",
    "exemplo": "<time datetime=\"2024-09-01\">1 de setembro de 2024</time>"
  },
  {
    "titulo": "dd",
    "descricao": "Define uma descrição em uma lista de definição.",
    "exemplo": "<dl><dt>Termo</dt><dd>Descrição do termo.</dd></dl>"
  },
  {
    "titulo": "del",
    "descricao": "Define um texto que foi removido.",
    "exemplo": "<p>Texto original <del>Texto removido</del></p>"
  },
  {
    "titulo": "dialog",
    "descricao": "Define uma caixa de diálogo ou outro componente interativo.",
    "exemplo": "<dialog open>Conteúdo do diálogo.</dialog>"
  },
  {
    "titulo": "div",
    "descricao": "Define uma divisão ou seção em um documento.",
    "exemplo": "<div><p>Conteúdo da divisão.</p></div>"
  },
  {
    "titulo": "dl",
    "descricao": "Define uma lista de definição.",
    "exemplo": "<dl><dt>Termo</dt><dd>Descrição</dd></dl>"
  },
  {
    "titulo": "dt",
    "descricao": "Define um termo em uma lista de definição.",
    "exemplo": "<dl><dt>Termo</dt></dl>"
  },
  {
    "titulo": "em",
    "descricao": "Define texto enfatizado.",
    "exemplo": "<p><em>Texto enfatizado</em></p>"
  },
  {
    "titulo": "fieldset",
    "descricao": "Agrupa elementos relacionados em um formulário.",
    "exemplo": "<fieldset><legend>Informações do Usuário</legend><input type=\"text\"></fieldset>"
  },
  {
    "titulo": "footer",
    "descricao": "Define o rodapé de um documento ou seção.",
    "exemplo": "<footer><p>Rodapé do site.</p></footer>"
  },
  {
    "titulo": "h1",
    "descricao": "Define o título de nível 1.",
    "exemplo": "<h1>Título Principal</h1>"
  },
  {
    "titulo": "h2",
    "descricao": "Define o título de nível 2.",
    "exemplo": "<h2>Subtítulo</h2>"
  },
  {
    "titulo": "h3",
    "descricao": "Define o título de nível 3.",
    "exemplo": "<h3>Sub-subtítulo</h3>"
  },
  {
    "titulo": "h4",
    "descricao": "Define o título de nível 4.",
    "exemplo": "<h4>Título de Nível 4</h4>"
  },
  {
    "titulo": "h5",
    "descricao": "Define o título de nível 5.",
    "exemplo": "<h5>Título de Nível 5</h5>"
  },
  {
    "titulo": "h6",
    "descricao": "Define o título de nível 6.",
    "exemplo": "<h6>Título de Nível 6</h6>"
  },
  {
    "titulo": "head",
    "descricao": "Define o cabeçalho do documento HTML.",
    "exemplo": "<head><title>Título da Página</title></head>"
  },
  {
    "titulo": "header",
    "descricao": "Define o cabeçalho de um documento ou seção.",
    "exemplo": "<header><h1>Cabeçalho do Site</h1></header>"
  },
  {
    "titulo": "img",
    "descricao": "Define uma imagem.",
    "exemplo": "<img src=\"image.jpg\" alt=\"Descrição da Imagem\">"
  },
  {
    "titulo": "input",
    "descricao": "Define um campo de entrada.",
    "exemplo": "<input type=\"text\" placeholder=\"Digite aqui\">"
  },
  {
    "titulo": "li",
    "descricao": "Define um item em uma lista.",
    "exemplo": "<ul><li>Item 1</li><li>Item 2</li></ul>"
  },
  {
    "titulo": "main",
    "descricao": "Define o conteúdo principal do documento.",
    "exemplo": "<main><p>Conteúdo principal da página.</p></main>"
  },
  {
    "titulo": "mark",
    "descricao": "Define texto marcado.",
    "exemplo": "<p><mark>Texto marcado</mark></p>"
  },
  {
    "titulo": "menu",
    "descricao": "Define um menu de comandos.",
    "exemplo": "<menu><menuitem label=\"Opção 1\"></menuitem></menu>"
  },
  {
    "titulo": "noscript",
    "descricao": "Define um conteúdo alternativo para navegadores que não suportam JavaScript.",
    "exemplo": "<noscript><p>JavaScript não está habilitado.</p></noscript>"
  },
  {
    "titulo": "ol",
    "descricao": "Define uma lista ordenada.",
    "exemplo": "<ol><li>Item 1</li><li>Item 2</li></ol>"
  },
  {
    "titulo": "optgroup",
    "descricao": "Define um grupo de opções em um elemento",
    "exemplo": "<select><optgroup label=\"Frutas\"><option>Maçã</option><option>Banana</option></optgroup></select>"
  },
  {
    "titulo": "output",
    "descricao": "Define o resultado de um cálculo.",
    "exemplo": "<output for=\"calc\" name=\"result\">Resultado</output>"
  },
  {
    "titulo": "p",
    "descricao": "Define um parágrafo.",
    "exemplo": "<p>Texto do parágrafo.</p>"
  },
  {
    "titulo": "pre",
    "descricao": "Define texto pré-formatado.",
    "exemplo": "<pre>Texto pré-formatado\nLinha 2</pre>"
  },
  {
    "titulo": "script",
    "descricao": "Define um bloco de código JavaScript.",
    "exemplo": "<script>alert('Olá, mundo!');</script>"
  },
  {
    "titulo": "section",
    "descricao": "Define uma seção em um documento.",
    "exemplo": "<section><h2>Seção Título</h2><p>Conteúdo da seção.</p></section>"
  },
  {
    "titulo": "small",
    "descricao": "Define texto menor.",
    "exemplo": "<p><small>Texto menor</small></p>"
  },
  {
    "titulo": "span",
    "descricao": "Define uma seção em linha.",
    "exemplo": "<p>Texto <span>em destaque</span></p>"
  },
  {
    "titulo": "style",
    "descricao": "Define estilos CSS.",
    "exemplo": "<style>body { background-color: #f0f0f0; }</style>"
  },
  {
    "titulo": "sub",
    "descricao": "Define texto subíndice.",
    "exemplo": "<p>H<sub>2</sub>O</p>"
  },
  {
    "titulo": "summary",
    "descricao": "Define um resumo para um elemento",
    "exemplo": "<details><summary>Mais informações</summary><p>Conteúdo adicional.</p></details>"
  },
  {
    "titulo": "sup",
    "descricao": "Define texto sobrescrito.",
    "exemplo": "<p>E=mc<sup>2</sup></p>"
  },
  {
    "titulo": "template",
    "descricao": "Define um template que pode ser instanciado no JavaScript.",
    "exemplo": "<template id=\"my-template\"><p>Conteúdo do template</p></template>"
  },
  {
    "titulo": "tfoot",
    "descricao": "Define o rodapé de uma tabela.",
    "exemplo": "<table><tfoot><tr><td>Rodapé</td></tr></tfoot></table>"
  },
  {
    "titulo": "th",
    "descricao": "Define uma célula de cabeçalho em uma tabela.",
    "exemplo": "<table><tr><th>Cabeçalho</th></tr></table>"
  },
  {
    "titulo": "thead",
    "descricao": "Define o cabeçalho de uma tabela.",
    "exemplo": "<table><thead><tr><th>Cabeçalho</th></tr></thead></table>"
  },
  {
    "titulo": "title",
    "descricao": "Define o título do documento.",
    "exemplo": "<title>Título da Página</title>"
  },
  {
    "titulo": "u",
    "descricao": "Define texto sublinhado.",
    "exemplo": "<p><u>Texto sublinhado</u></p>"
  },
  {
    "titulo": "legend",
    "descricao": "Define uma legenda para um elemento",
    "exemplo": "<fieldset><legend>Informações do Usuário</legend><input type=\"text\"></fieldset>"
  },
  {
    "titulo": "animation",
    "descricao": "Propriedade CSS usada para aplicar animações em elementos.",
    "exemplo": "animation: slide 3s infinite;"
  },
  {
    "titulo": "animation-delay",
    "descricao": "Propriedade CSS usada para definir o atraso antes do início de uma animação.",
    "exemplo": "animation-delay: 2s;"
  },
  {
    "titulo": "animation-duration",
    "descricao": "Propriedade CSS usada para definir a duração da animação.",
    "exemplo": "animation-duration: 4s;"
  },
  {
    "titulo": "animation-fill-mode",
    "descricao": "Propriedade CSS usada para definir o estado de uma animação antes e depois de sua execução.",
    "exemplo": "animation-fill-mode: forwards;"
  },
  {
    "titulo": "animation-iteration-count",
    "descricao": "Propriedade CSS usada para definir o número de vezes que uma animação deve ser repetida.",
    "exemplo": "animation-iteration-count: infinite;"
  },
  {
    "titulo": "animation-name",
    "descricao": "Propriedade CSS usada para definir o nome da animação a ser aplicada ao elemento.",
    "exemplo": "animation-name: fadeIn;"
  },
  {
    "titulo": "animation-play-state",
    "descricao": "Propriedade CSS usada para definir se a animação está em execução ou pausada.",
    "exemplo": "animation-play-state: paused;"
  },
  {
    "titulo": "backface-visibility",
    "descricao": "Propriedade CSS usada para definir se a parte de trás de um elemento 3D está visível quando virada.",
    "exemplo": "backface-visibility: hidden;"
  },
  {
    "titulo": "background-attachment",
    "descricao": "Propriedade CSS usada para definir se uma imagem de fundo permanece fixa ou se rola com a página.",
    "exemplo": "background-attachment: fixed;"
  },
  {
    "titulo": "background-blend-mode",
    "descricao": "Propriedade CSS usada para definir o modo de mistura entre a cor de fundo e a imagem de fundo.",
    "exemplo": "background-blend-mode: multiply;"
  },
  {
    "titulo": "background-origin",
    "descricao": "Propriedade CSS usada para definir a posição de origem da imagem de fundo.",
    "exemplo": "background-origin: border-box;"
  },
  {
    "titulo": "border-image",
    "descricao": "Propriedade CSS usada para definir uma imagem como borda de um elemento.",
    "exemplo": "border-image: url('border.png') 30 round;"
  },
  {
    "titulo": "border-image-slice",
    "descricao": "Propriedade CSS usada para definir a área da imagem de borda a ser usada.",
    "exemplo": "border-image-slice: 10%;"
  },
  {
    "titulo": "border-top-left-radius",
    "descricao": "Propriedade CSS usada para definir o raio da borda superior esquerda de um elemento.",
    "exemplo": "border-top-left-radius: 5px;"
  },
  {
    "titulo": "border-top-right-radius",
    "descricao": "Propriedade CSS usada para definir o raio da borda superior direita de um elemento.",
    "exemplo": "border-top-right-radius: 5px;"
  },
  {
    "titulo": "border-bottom-left-radius",
    "descricao": "Propriedade CSS usada para definir o raio da borda inferior esquerda de um elemento.",
    "exemplo": "border-bottom-left-radius: 10px;"
  },
  {
    "titulo": "border-bottom-right-radius",
    "descricao": "Propriedade CSS usada para definir o raio da borda inferior direita de um elemento.",
    "exemplo": "border-bottom-right-radius: 10px;"
  },
  {
    "titulo": "box-decoration-break",
    "descricao": "Propriedade CSS usada para definir como as bordas de elementos em bloco devem se comportar durante a quebra.",
    "exemplo": "box-decoration-break: clone;"
  },
  {
    "titulo": "box-reflect",
    "descricao": "Propriedade CSS usada para definir um reflexo para um elemento.",
    "exemplo": "box-reflect: below 5px;"
  },
  {
    "titulo": "caret-color",
    "descricao": "Propriedade CSS usada para definir a cor do cursor de texto em elementos de entrada.",
    "exemplo": "caret-color: red;"
  },
  {
    "titulo": "clip",
    "descricao": "Propriedade CSS usada para definir a área visível de um elemento posicionado.",
    "exemplo": "clip: rect(0, 0, 50px, 50px);"
  },
  {
    "titulo": "column-count",
    "descricao": "Propriedade CSS usada para definir o número de colunas em um layout de múltiplas colunas.",
    "exemplo": "column-count: 3;"
  },
  {
    "titulo": "column-gap",
    "descricao": "Propriedade CSS usada para definir o espaço entre as colunas em um layout de múltiplas colunas.",
    "exemplo": "column-gap: 20px;"
  },
  {
    "titulo": "column-span",
    "descricao": "Propriedade CSS usada para definir se um elemento deve abranger várias colunas em um layout de múltiplas colunas.",
    "exemplo": "column-span: all;"
  },
  {
    "titulo": "column-width",
    "descricao": "Propriedade CSS usada para definir a largura ideal de uma coluna em um layout de múltiplas colunas.",
    "exemplo": "column-width: 200px;"
  },
  {
    "titulo": "contain",
    "descricao": "Propriedade CSS usada para definir quais aspectos de um elemento são contidos.",
    "exemplo": "contain: layout style;"
  },
  {
    "titulo": "counter-reset",
    "descricao": "Propriedade CSS usada para redefinir um contador CSS.",
    "exemplo": "counter-reset: section;"
  },
  {
    "titulo": "counter-increment",
    "descricao": "Propriedade CSS usada para incrementar um contador CSS.",
    "exemplo": "counter-increment: section;"
  },
  {
    "titulo": "filter",
    "descricao": "Propriedade CSS usada para aplicar efeitos gráficos a um elemento.",
    "exemplo": "filter: grayscale(100%);"
  },
  {
    "titulo": "flex-flow",
    "descricao": "Propriedade CSS usada para definir a direção e o fluxo de um contêiner flexível.",
    "exemplo": "flex-flow: row wrap;"
  },
  {
    "titulo": "flow",
    "descricao": "Propriedade CSS usada para definir o fluxo de elementos.",
    "exemplo": "flow: row;"
  },
  {
    "titulo": "font-kerning",
    "descricao": "Propriedade CSS usada para definir o ajuste de kerning (espaçamento entre caracteres).",
    "exemplo": "font-kerning: normal;"
  },
  {
    "titulo": "font-optical-sizing",
    "descricao": "Propriedade CSS usada para definir se a fonte deve ajustar automaticamente seu tamanho óptico.",
    "exemplo": "font-optical-sizing: auto;"
  },
  {
    "titulo": "grid-template",
    "descricao": "Propriedade CSS usada para definir o layout de um contêiner de grid.",
    "exemplo": "grid-template: 100px 200px / auto;"
  },
  {
    "titulo": "grid-template-areas",
    "descricao": "Propriedade CSS usada para definir as áreas nomeadas de um grid.",
    "exemplo": "grid-template-areas: \"header header\" \"main sidebar\" \"footer footer\";"
  },
  {
    "titulo": "grid-template-columns",
    "descricao": "Propriedade CSS usada para definir a largura das colunas de um grid.",
    "exemplo": "grid-template-columns: 1fr 2fr;"
  },
  {
    "titulo": "grid-template-rows",
    "descricao": "Propriedade CSS usada para definir a altura das linhas de um grid.",
    "exemplo": "grid-template-rows: 100px auto 100px;"
  },
  {
    "titulo": "hyphens",
    "descricao": "Propriedade CSS usada para definir como a hifenização deve ser aplicada ao texto.",
    "exemplo": "hyphens: auto;"
  },
  {
    "titulo": "image-rendering",
    "descricao": "Propriedade CSS usada para definir como uma imagem deve ser renderizada.",
    "exemplo": "image-rendering: pixelated;"
  },
  {
    "titulo": "initial-letter",
    "descricao": "Propriedade CSS usada para definir o tamanho e o estilo da primeira letra de um parágrafo.",
    "exemplo": "initial-letter: 3em;"
  },
  {
    "titulo": "mix-blend-mode",
    "descricao": "Propriedade CSS usada para definir como o conteúdo deve ser misturado com o conteúdo abaixo dele.",
    "exemplo": "mix-blend-mode: multiply;"
  },
  {
    "titulo": "object-fit",
    "descricao": "Propriedade CSS usada para definir como o conteúdo de um elemento deve se ajustar ao seu contêiner.",
    "exemplo": "object-fit: cover;"
  },
  {
    "titulo": "object-position",
    "descricao": "Propriedade CSS usada para definir a posição de um objeto dentro de seu contêiner.",
    "exemplo": "object-position: center;"
  },
  {
    "titulo": "overscroll-behavior",
    "descricao": "Propriedade CSS usada para definir o comportamento ao rolar além do limite de um contêiner.",
    "exemplo": "overscroll-behavior: contain;"
  },
  {
    "titulo": "pointer-events",
    "descricao": "Propriedade CSS usada para definir como os eventos do mouse devem ser tratados para um elemento.",
    "exemplo": "pointer-events: none;"
  },
  {
    "titulo": "scroll-behavior",
    "descricao": "Propriedade CSS usada para definir o comportamento da rolagem suave.",
    "exemplo": "scroll-behavior: smooth;"
  },
  {
    "titulo": "shape-outside",
    "descricao": "Propriedade CSS usada para definir a forma de um contorno ao redor de um elemento flutuante.",
    "exemplo": "shape-outside: circle(50%);"
  },
  {
    "titulo": "text-shadow",
    "descricao": "Propriedade CSS usada para adicionar sombra ao texto.",
    "exemplo": "text-shadow: 2px 2px 4px #000000;"
  },
  {
    "titulo": "text-stroke",
    "descricao": "Propriedade CSS usada para definir o contorno do texto.",
    "exemplo": "text-stroke: 1px #000000;"
  },
  {
    "titulo": "transform",
    "descricao": "Propriedade CSS usada para aplicar transformações como rotação, escalonamento e translação.",
    "exemplo": "transform: rotate(45deg);"
  },
  {
    "titulo": "transform-origin",
    "descricao": "Propriedade CSS usada para definir o ponto de origem das transformações.",
    "exemplo": "transform-origin: top left;"
  },
  {
    "titulo": "transition",
    "descricao": "Propriedade CSS usada para definir a transição suave entre estados de um elemento.",
    "exemplo": "transition: background-color 0.3s ease;"
  },
  {
    "titulo": "user-select",
    "descricao": "Propriedade CSS usada para definir se o usuário pode selecionar o texto.",
    "exemplo": "user-select: none;"
  },
  {
    "titulo": "will-change",
    "descricao": "Propriedade CSS usada para informar ao navegador que um elemento vai mudar, para otimizar o desempenho.",
    "exemplo": "will-change: transform;"
  },
  {
    "titulo": "grid-template-areas",
    "descricao": "Propriedade CSS usada para definir as áreas de um contêiner de grade por nome.",
    "exemplo": "grid-template-areas: 'header header' 'nav main' 'footer footer';"
  },
  {
    "titulo": "image-rendering",
    "descricao": "Propriedade CSS usada para definir o método de renderização de imagens.",
    "exemplo": "image-rendering: pixelated;"
  },
  {
    "titulo": "isolation",
    "descricao": "Propriedade CSS usada para definir se um elemento deve criar um novo contexto de empilhamento.",
    "exemplo": "isolation: isolate;"
  },
  {
    "titulo": "line-break",
    "descricao": "Propriedade CSS usada para definir como a quebra de linha deve ocorrer em textos de idiomas asiáticos.",
    "exemplo": "line-break: strict;"
  },
  {
    "titulo": "margin-block",
    "descricao": "Propriedade CSS que define a margem entre o início e o fim de um bloco.",
    "exemplo": "margin-block: 10px 20px;"
  },
  {
    "titulo": "margin-inline",
    "descricao": "Propriedade CSS que define a margem nas direções inline de um bloco.",
    "exemplo": "margin-inline: 15px;"
  },
  {
    "titulo": "overscroll-behavior",
    "descricao": "Propriedade CSS usada para definir o comportamento do rolar quando o limite de rolagem é alcançado.",
    "exemplo": "overscroll-behavior: contain;"
  },
  {
    "titulo": "place-content",
    "descricao": "Propriedade CSS que é um atalho para definir o alinhamento de conteúdo em um contêiner de grid ou flexível.",
    "exemplo": "place-content: center;"
  },
  {
    "titulo": "resize",
    "descricao": "Propriedade CSS usada para definir se e como um elemento pode ser redimensionado.",
    "exemplo": "resize: both;"
  },
  {
    "titulo": "scrollbar-width",
    "descricao": "Propriedade CSS usada para definir a largura da barra de rolagem.",
    "exemplo": "scrollbar-width: thin;"
  },
  {
    "titulo": "text-align-last",
    "descricao": "Propriedade CSS usada para definir o alinhamento da última linha de um bloco de texto.",
    "exemplo": "text-align-last: center; text-align-last: justify;"
  },
  {
    "titulo": "text-overflow",
    "descricao": "Propriedade CSS usada para definir como o texto que ultrapassa a caixa de um elemento deve ser tratado.",
    "exemplo": "text-overflow: ellipsis;"
  },
  {
    "titulo": "touch-action",
    "descricao": "Propriedade CSS usada para definir quais ações de toque devem ser realizadas pelo navegador.",
    "exemplo": "touch-action: pan-y;"
  },
  {
    "titulo": "user-select",
    "descricao": "Propriedade CSS usada para definir se o texto pode ser selecionado pelo usuário.",
    "exemplo": "user-select: none;"
  },
  {
    "titulo": "visibility",
    "descricao": "Propriedade CSS usada para definir a visibilidade de um elemento.",
    "exemplo": "visibility: hidden;"
  },
  {
    "titulo": "white-space",
    "descricao": "Propriedade CSS usada para definir como o espaço em branco e quebras de linha são tratados.",
    "exemplo": "white-space: nowrap;"
  },
  {
    "titulo": "will-change",
    "descricao": "Propriedade CSS usada para indicar quais propriedades de um elemento serão alteradas no futuro.",
    "exemplo": "will-change: transform;"
  },
  {
    "titulo": "transition-delay",
    "descricao": "Propriedade CSS usada para definir o tempo de espera antes do início de uma transição.",
    "exemplo": "transition-delay: 1s;"
  },
  {
    "titulo": "transition-duration",
    "descricao": "Propriedade CSS usada para definir a duração de uma transição.",
    "exemplo": "transition-duration: 0.5s;"
  },
  {
    "titulo": "transition-property",
    "descricao": "Propriedade CSS usada para definir as propriedades que devem ser animadas durante uma transição.",
    "exemplo": "transition-property: opacity, transform;"
  },
  {
    "titulo": "figcaption",
    "descricao": "Define uma legenda para um elemento.",
    "exemplo": "<figure><img src=\"imagem.jpg\" alt=\"Imagem\"><figcaption>Legenda da imagem</figcaption></figure>"
  },
  {
    "titulo": "display: block",
    "descricao": "Faz com que o elemento seja exibido como um bloco, ocupando toda a largura disponível e quebrando a linha antes e depois dele.",
    "exemplo": "display: block;"
  },
  {
    "titulo": "display: inline",
    "descricao": "Faz com que o elemento seja exibido na mesma linha, respeitando a largura de seu conteúdo, sem quebrar a linha antes ou depois dele.",
    "exemplo": "display: inline;"
  },
  {
    "titulo": "display: inline-block",
    "descricao": "Combina as características de 'inline' e 'block', permitindo definir largura e altura, mas ainda alinhando com outros elementos na mesma linha.",
    "exemplo": "display: inline-block;"
  },
  {
    "titulo": "display: none",
    "descricao": "Remove o elemento do fluxo de renderização, fazendo com que ele não ocupe espaço na página.",
    "exemplo": "display: none;"
  },
  {
    "titulo": "display: flex",
    "descricao": "Define um contêiner flexível, permitindo organizar elementos filhos com layouts mais complexos de forma simplificada.",
    "exemplo": "display: flex;"
  },
  {
    "titulo": "display: inline-flex",
    "descricao": "Funciona como 'flex', mas o contêiner é exibido na mesma linha, como um elemento 'inline'.",
    "exemplo": "display: inline-flex;"
  },
  {
    "titulo": "display: grid",
    "descricao": "Define um contêiner de grade para organizar elementos em linhas e colunas, permitindo layouts mais estruturados.",
    "exemplo": "display: grid;"
  },
  {
    "titulo": "display: inline-grid",
    "descricao": "Funciona como 'grid', mas o contêiner é exibido na mesma linha, como um elemento 'inline'.",
    "exemplo": "display: inline-grid;"
  },
  {
    "titulo": "display: table",
    "descricao": "Faz com que o elemento se comporte como uma tabela, incluindo linhas e células.",
    "exemplo": "display: table;"
  },
  {
    "titulo": "display: table-row",
    "descricao": "Faz com que o elemento se comporte como uma linha de tabela.",
    "exemplo": "display: table-row;"
  },
  {
    "titulo": "display: table-cell",
    "descricao": "Faz com que o elemento se comporte como uma célula de tabela.",
    "exemplo": "display: table-cell;"
  },
  {
    "titulo": "display: table-column",
    "descricao": "Representa uma coluna em uma tabela. Geralmente é usado para estilização.",
    "exemplo": "display: table-column;"
  },
  {
    "titulo": "display: table-column-group",
    "descricao": "Agrupa uma ou mais colunas em uma tabela.",
    "exemplo": "display: table-column-group;"
  },
  {
    "titulo": "display: table-footer-group",
    "descricao": "Define um grupo de rodapé para uma tabela.",
    "exemplo": "display: table-footer-group;"
  },
  {
    "titulo": "display: table-header-group",
    "descricao": "Define um grupo de cabeçalho para uma tabela.",
    "exemplo": "display: table-header-group;"
  },
  {
    "titulo": "display: table-row-group",
    "descricao": "Agrupa uma ou mais linhas em uma tabela.",
    "exemplo": "display: table-row-group;"
  },
  {
    "titulo": "display: list-item",
    "descricao": "Faz com que o elemento se comporte como um item de lista, incluindo um marcador de lista, se aplicável.",
    "exemplo": "display: list-item;"
  },
  {
    "titulo": "display: run-in",
    "descricao": "Faz com que o elemento se comporte como um bloco ou inline, dependendo do contexto ao redor.",
    "exemplo": "display: run-in;"
  },
  {
    "titulo": "display: contents",
    "descricao": "Faz com que o elemento seja ignorado, mas seus filhos ainda sejam renderizados.",
    "exemplo": "display: contents;"
  },
  {
    "titulo": "display: initial",
    "descricao": "Define o valor padrão da propriedade, conforme especificado na especificação do CSS.",
    "exemplo": "display: initial;"
  },
  {
    "titulo": "display: inherit",
    "descricao": "Herda o valor da propriedade 'display' do elemento pai.",
    "exemplo": "display: inherit;"
  },
  {
    "titulo": "display: revert",
    "descricao": "Reverte a propriedade para o valor definido pelo estilo de usuário ou estilo do navegador.",
    "exemplo": "display: revert;"
  },
  {
    "titulo": "display: unset",
    "descricao": "Remove qualquer valor definido para a propriedade, fazendo com que ela herde o valor do pai ou defina o valor padrão.",
    "exemplo": "display: unset;"
  },
  {
    "titulo": "display: flex-inline",
    "descricao": "Funciona como 'flex', mas o contêiner é exibido como um elemento 'inline'.",
    "exemplo": "display: flex-inline;"
  },
  {
    "titulo": "display: grid-inline",
    "descricao": "Funciona como 'grid', mas o contêiner é exibido como um elemento 'inline'.",
    "exemplo": "display: grid-inline;"
  },  
  
]


