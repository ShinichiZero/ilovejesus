import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        life: 'Life',
        miracles: 'Miracles on Earth',
        language: 'Language',
      },
      // Intro Gate
      intro: {
        dedication:
          'Dedicated to the One I serve, and He never left me and always protected me — my King and my Savior, Jesus Christ.',
        enter: 'Enter',
      },
      // Home Hub
      home: {
        title: 'Jesus Christ',
        subtitle: 'King of Kings · Lord of Lords',
        welcome: 'Welcome to a sacred space devoted to the life, miracles, and glory of our Lord Jesus Christ.',
        exploreLife: 'Explore His Life',
        exploreMiracles: 'Explore His Miracles',
      },
      // Life Page
      life: {
        title: 'The Life of Our Lord Jesus Christ',
        subtitle: 'An Orthodox Perspective',
        segments: {
          annunciation: {
            title: 'The Annunciation & Nativity',
            location: 'Bethlehem',
            text:
              'The Archangel Gabriel announced to the Most Holy Theotokos that she would conceive and bear the Son of God. The eternal Word became flesh and was born in a cave in Bethlehem, wrapped in swaddling clothes and laid in a manger. Angels proclaimed "Glory to God in the highest," and shepherds and Magi came to worship the newborn King.',
          },
          baptism: {
            title: 'The Baptism of Christ',
            location: 'Theophany — River Jordan',
            text:
              'At the age of thirty, Jesus came to the Jordan River where John the Baptist was baptizing. As Jesus rose from the water, the heavens were opened, the Holy Spirit descended upon Him like a dove, and the voice of the Father was heard: "This is My beloved Son, in whom I am well pleased." The Holy Trinity was revealed to all — this feast is called Theophany.',
          },
          ministry: {
            title: 'The Ministry & Transfiguration',
            location: 'Mount Tabor & Galilee',
            text:
              'For three years, the Lord preached the Kingdom of Heaven, healed the sick, cast out demons, and worked countless miracles. On Mount Tabor He was transfigured before Peter, James, and John — His face shone like the sun and His garments became white as light. Moses and Elijah appeared with Him, and the Father\'s voice said: "This is My beloved Son — hear Him."',
          },
          passion: {
            title: 'The Passion & Crucifixion',
            location: 'Jerusalem — Golgotha',
            text:
              'The Lord entered Jerusalem in triumph, instituted the Holy Eucharist at the Last Supper, and was betrayed by Judas. He was arrested, tried unjustly, crowned with thorns, and crucified on the Holy Cross at Golgotha. He died, and the veil of the Temple was torn in two. He was buried in the tomb of Joseph of Arimathea, and a great stone was rolled to cover it.',
          },
          resurrection: {
            title: 'The Holy Resurrection (Pascha) & Ascension',
            location: 'Jerusalem — Mount of Olives',
            text:
              'On the third day He rose from the dead, trampling down death by death, and appeared to the Myrrh-bearing women, His disciples, and over five hundred brethren at once. "Christ is Risen from the dead!" After forty days He ascended into Heaven from the Mount of Olives in glory, promising to send the Holy Spirit and to come again in glory to judge the living and the dead.',
          },
        },
      },
      // Miracles Page
      miracles: {
        title: 'Miracles on Earth',
        subtitle: 'The Signs and Wonders of Our Lord Jesus Christ',
        reference: 'Reference',
      },
      // Footer
      footer: {
        dedication: 'Dedicated with Love to The King of Kings',
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        life: 'Vida',
        miracles: 'Milagros en la Tierra',
        language: 'Idioma',
      },
      intro: {
        dedication:
          'Dedicado a Aquel a quien sirvo, quien nunca me abandonó y siempre me protegió — mi Rey y mi Salvador, Jesucristo.',
        enter: 'Entrar',
      },
      home: {
        title: 'Jesucristo',
        subtitle: 'Rey de Reyes · Señor de Señores',
        welcome:
          'Bienvenido a un espacio sagrado dedicado a la vida, los milagros y la gloria de nuestro Señor Jesucristo.',
        exploreLife: 'Explorar Su Vida',
        exploreMiracles: 'Explorar Sus Milagros',
      },
      life: {
        title: 'La Vida de Nuestro Señor Jesucristo',
        subtitle: 'Una Perspectiva Ortodoxa',
        segments: {
          annunciation: {
            title: 'La Anunciación y la Natividad',
            location: 'Belén',
            text:
              'El Arcángel Gabriel anunció a la Santísima Theotokos que concebiría y daría a luz al Hijo de Dios. El Verbo eterno se hizo carne y nació en una cueva en Belén, envuelto en pañales y acostado en un pesebre. Los ángeles proclamaron "Gloria a Dios en las alturas", y pastores y Magos vinieron a adorar al Rey recién nacido.',
          },
          baptism: {
            title: 'El Bautismo de Cristo',
            location: 'Teofanía — Río Jordán',
            text:
              'A la edad de treinta años, Jesús llegó al Río Jordán donde Juan el Bautista bautizaba. Al salir del agua, los cielos se abrieron, el Espíritu Santo descendió sobre Él como paloma, y se escuchó la voz del Padre: "Este es mi Hijo amado, en quien me he complacido." La Santísima Trinidad fue revelada a todos.',
          },
          ministry: {
            title: 'El Ministerio y la Transfiguración',
            location: 'Monte Tabor y Galilea',
            text:
              'Durante tres años, el Señor predicó el Reino de los Cielos, sanó enfermos, expulsó demonios y obró innumerables milagros. En el Monte Tabor fue transfigurado ante Pedro, Santiago y Juan — su rostro brilló como el sol y sus vestiduras se volvieron blancas como la luz.',
          },
          passion: {
            title: 'La Pasión y Crucifixión',
            location: 'Jerusalén — Gólgota',
            text:
              'El Señor entró triunfalmente en Jerusalén, instituyó la Santa Eucaristía en la Última Cena y fue traicionado por Judas. Fue arrestado, juzgado injustamente, coronado de espinas y crucificado en la Santa Cruz en el Gólgota. Murió, y el velo del Templo se rasgó en dos.',
          },
          resurrection: {
            title: 'La Santa Resurrección (Pascua) y Ascensión',
            location: 'Jerusalén — Monte de los Olivos',
            text:
              'Al tercer día resucitó de entre los muertos, aplastando la muerte con la muerte, y se apareció a las mujeres Miroóforas, sus discípulos y a más de quinientos hermanos a la vez. Después de cuarenta días ascendió al Cielo desde el Monte de los Olivos en gloria.',
          },
        },
      },
      miracles: {
        title: 'Milagros en la Tierra',
        subtitle: 'Las Señales y Maravillas de Nuestro Señor Jesucristo',
        reference: 'Referencia',
      },
      footer: {
        dedication: 'Dedicado con Amor al Rey de Reyes',
      },
    },
  },
  la: {
    translation: {
      nav: {
        home: 'Domus',
        life: 'Vita',
        miracles: 'Miracula in Terra',
        language: 'Lingua',
      },
      intro: {
        dedication:
          'Dedicatum Illi cui servio, qui numquam me deseruit et semper me protexit — Regi meo et Salvatori meo, Iesu Christo.',
        enter: 'Intra',
      },
      home: {
        title: 'Iesus Christus',
        subtitle: 'Rex Regum · Dominus Dominantium',
        welcome:
          'Salve in hoc loco sacro vitae, miraculis et gloriae Domini nostri Iesu Christi dedicato.',
        exploreLife: 'Vita Eius Explora',
        exploreMiracles: 'Miracula Eius Explora',
      },
      life: {
        title: 'Vita Domini Nostri Iesu Christi',
        subtitle: 'Ex Perspectiva Orthodoxa',
        segments: {
          annunciation: {
            title: 'Annuntiatio et Nativitas',
            location: 'Bethlehem',
            text:
              'Angelus Gabriel Sanctissimae Theotocos annuntiavit eam Filium Dei concepturam et parituram. Verbum aeternum caro factum est et in spelunca Bethlehem natum est, pannis involutum et in praesepio positum. Angeli "Gloria in excelsis Deo" proclamaverunt, et pastores et Magi ad adorandum Regem novum venerunt.',
          },
          baptism: {
            title: 'Baptismus Christi',
            location: 'Theophania — Flumen Iordanis',
            text:
              'Triginta annorum Iesus ad Flumen Iordanis venit ubi Ioannes baptizabat. Ascendenti de aqua caeli aperti sunt, Spiritus Sanctus sicut columba descendit, et vox Patris audita est: "Hic est Filius meus dilectus." Sanctissima Trinitas omnibus revelata est.',
          },
          ministry: {
            title: 'Ministerium et Transfiguratio',
            location: 'Mons Tabor et Galilaea',
            text:
              'Per tres annos Dominus Regnum Caelorum praedicavit, aegros sanavit, daemones eiecit et innumerabilia miracula fecit. In Monte Tabor coram Petro, Iacobo et Ioanne transfiguratus est — facies eius ut sol fulsit et vestimenta eius alba ut lux facta sunt.',
          },
          passion: {
            title: 'Passio et Crucifixio',
            location: 'Hierosolyma — Golgotha',
            text:
              'Dominus Hierosolymam triumphans intravit, Sanctam Eucharistiam in Cena Domini instituit et a Iuda traditus est. Captus, iniuste iudicatus, spinis coronatus et in Sancta Cruce in Golgotha crucifixus est. Mortuus est, et velum Templi scissum est.',
          },
          resurrection: {
            title: 'Sancta Resurrectio (Pascha) et Ascensio',
            location: 'Hierosolyma — Mons Olivarum',
            text:
              'Tertia die a mortuis resurrexit, mortem morte calcans, et mulieribus Myrophoris, discipulis et plus quingentis fratribus simul apparuit. Post quadraginta dies de Monte Olivarum in gloriam ascendit in caelum.',
          },
        },
      },
      miracles: {
        title: 'Miracula in Terra',
        subtitle: 'Signa et Prodigia Domini Nostri Iesu Christi',
        reference: 'Referentia',
      },
      footer: {
        dedication: 'Cum Amore Regi Regum Dedicatum',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
