interface HeroTranslations {
  title: string;
  description: string;
}

const translations: { [language: string]: HeroTranslations } = {
en: {
  title: 'Solution-Oriented Developer',
  description: 'Dedicated to building efficient, scalable, and modern software applications.',
},

'pt-br': {
  title: 'Desenvolvedor Orientado a Soluções',
  description: 'Dedicado a construir aplicações de software eficientes, escaláveis e modernas.',
},


export default translations;
