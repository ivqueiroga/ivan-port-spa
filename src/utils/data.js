import { DiReact, DiGit, DiGithubBadge, DiLinux} from 'react-icons/di';
import {SiAdobephotoshop, SiAdobepremierepro, SiBlender, SiRedux} from 'react-icons/si'
import img1 from '../assets/images/projects/portfolio-spa.png';
import img2 from '../assets/images/projects/Pokedex_vue.png';
import img3 from '../assets/videos/JumpMan.webm';
import img4 from '../assets/images/projects/Pixel-Frame.png';
import img5 from '../assets/images/projects/CLEP.png';

const data = {
  icons :[
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
      name: 'Portfólio SPA',
      photoPath: {type: 'img', link: img1,},
      description: 'Portfolio Single Page Application criado em React com conteúdo responsivo',
      genre: ['Webpage',],
      languages: ['React','TS'],
      status: 'OK',
      link: {github: 'https://github.com/ivqueiroga/ivan-port-spa', webpage: 'https://ivan-portfolio-spa.vercel.app/', youtube: ''}
    },
    {
      name: 'CLEP',
      photoPath: {type: 'img', link: img5,},
      description: 'Aplicação feita em React Native utilizando a plataforma Expo para aprimorar a jogabilidade do jogo conceito homônimo',
      genre: ['GameApp',],
      languages: ['React Native','Expo'],
      status: 'OK',
      link: {github: 'https://github.com/ivqueiroga/Clep', webpage: '', youtube: 'https://youtube.com/shorts/FqLGLxJFKU0?feature=share'}
    },
    {
      name: 'Pokedex Vue',
      photoPath: {type: 'img', link: img2,},
      description: 'Aplicação Pokedex feito no framework Vue.js',
      genre: ['App',],
      languages: ['Vue',],
      status: 'KO - SERÁ REFEITO',
      link: {github: 'https://github.com/ivqueiroga/Pokedex', webpage: 'https://pokedex-phi-coral.vercel.app/', youtube: ''}
    },
    {
      name: 'Jump Man',
      photoPath: {type: 'video', link: img3,},
      description: 'Jogo feito em C++ utilizando o Platform.IO, plataforma colaborativa para projetos em microcontrolador',
      genre: ['Game',],
      languages: ['C++',],
      status: 'WIP, ON HOLD',
      link: {github: 'https://github.com/ivqueiroga/JumpMan', webpage: '', youtube: ''}
    },
    {
      name: 'Pixel Frame',
      photoPath: {type: 'img', link: img4,},
      description: 'Aplicativo feito em React Native para utilização e definição de parâmetros de luminária led a ser desenvolvida em um ESP32',
      genre: ['App',],
      languages: ['React Native', 'JS'],
      status: 'WIP, ON HOLD',
      link: {github: 'https://github.com/ivqueiroga/PixelFrame-React-Native', webpage: '', youtube: ''}
    },
    
  ]
}

// G:\Ivan\Projetos\ivan-port-spa\src\assets\images\Foto_Perfil.jpg

export default data;