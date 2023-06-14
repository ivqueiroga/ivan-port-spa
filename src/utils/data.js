import {DiJavascript, DiCss3, DiHtml5, DiReact, DiGit, DiGithubBadge, DiLinux} from 'react-icons/di';
import {SiAdobephotoshop, SiAdobepremierepro, SiBlender, SiRedux} from 'react-icons/si'

const data = {
  icons :[
    {name: 'JS', icon: DiJavascript, text: 'JavaScript é uma linguagem de programação de alto nível, orientada a objetos e baseada em scripts, usada para adicionar interatividade e funcionalidade dinâmica a páginas web.'},
    {name: 'CSS', icon: DiCss3, text: 'CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a aparência e o layout de elementos em uma página web.'},
    {name: 'HTML', icon: DiHtml5, text: 'HTML (HyperText Markup Language) é uma linguagem de marcação utilizada para criar páginas web e estruturar o conteúdo da página.'},
    {name: 'ReactJS', icon: DiReact, text: 'ReactJS é uma biblioteca de JavaScript de código aberto, desenvolvida pelo Facebook, que permite a criação de interfaces de usuário eficientes e reativas para aplicações web.'},
    {name: 'Redux', icon: SiRedux, text: 'React Redux é uma biblioteca que fornece uma arquitetura de gerenciamento de estado para aplicações React, permitindo uma manipulação centralizada do estado da aplicação e facilitando a comunicação entre componentes.'},
    {name: 'Git', icon: DiGit, text: 'Git é um sistema de controle de versão distribuído amplamente utilizado no desenvolvimento de software, que permite o rastreamento e gerenciamento eficiente de alterações em arquivos, facilitando o trabalho colaborativo e o controle de histórico de projetos.'},
    {name: 'Github', icon: DiGithubBadge, text: 'GitHub é uma plataforma de hospedagem baseada em nuvem que utiliza o sistema de controle de versão Git, permitindo que desenvolvedores e equipes colaborem no desenvolvimento de projetos, compartilhem código, acompanhem alterações e gerenciem problemas de forma eficiente.'},
    {name: 'Linux', icon: DiLinux, text: 'Linux é um sistema operacional de código aberto, baseado no kernel do Unix, que oferece uma plataforma estável, flexível e altamente personalizável para executar programas e gerenciar recursos de hardware em computadores.'},
    {name: 'Photoshop', icon: SiAdobephotoshop, text: 'Adobe Photoshop é um software de edição de imagens, amplamente utilizado na indústria criativa, que permite a manipulação, correção, criação e aprimoramento de fotos e elementos gráficos de forma profissional.'},
    {name: 'Premiere', icon: SiAdobepremierepro, text: 'Adobe Premiere é um software de edição de vídeo utilizado para a criação e edição de produções audiovisuais, oferecendo recursos avançados de edição, efeitos, transições e mixagem de áudio.'},
    {name: 'Blender', icon: SiBlender, text: 'Blender é um software de modelagem 3D e animação, de código aberto, que permite a criação de imagens, animações e efeitos visuais de alta qualidade.'},
  ],
  iconsInports: ['Di','Si'],
  projects: [{
      'name': 'Lorem Ipsum',
      'photoPath': '../assets/images',
      'type': 'Game',
      'languages': 'C++',
      'status': 'WIP',
    },
  ]
}

export default data;