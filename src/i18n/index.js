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
        items: {
          "1": { title: 'Changing Water into Wine', reference: 'John 2:11' },
          "2": { title: "Healing the Official's Son", reference: 'John 4:48–50' },
          "3": { title: 'Healing the Man at the Pool of Bethesda', reference: 'John 5:8–9' },
          "4": { title: 'Driving Out an Impure Spirit', reference: 'Luke 4:35' },
          "5": { title: "Healing Simon's Mother-in-Law", reference: 'Luke 4:39' },
          "6": { title: 'The Miraculous Catch of Fish (First)', reference: 'Luke 5:6' },
          "7": { title: 'Cleansing a Man with Leprosy', reference: 'Matthew 8:3' },
          "8": { title: "Healing the Centurion's Servant", reference: 'Matthew 8:13' },
          "9": { title: "Raising the Widow's Son at Nain", reference: 'Luke 7:14–15' },
          "10": { title: 'Calming the Storm', reference: 'Luke 8:24' },
          "11": { title: 'Healing the Gadarene Demoniacs', reference: 'Matthew 8:28' },
          "12": { title: "Raising Jairus's Daughter", reference: 'Luke 8:54–55' },
          "13": { title: 'Healing the Woman with the Issue of Blood', reference: 'Luke 8:48' },
          "14": { title: 'Healing Two Blind Men', reference: 'Matthew 9:29–30' },
          "15": { title: 'Healing a Mute Demoniac', reference: 'Matthew 9:33' },
          "16": { title: 'Healing the Man with a Withered Hand', reference: 'Matthew 12:13' },
          "17": { title: 'Multiplying the Loaves and Fishes (Feeding Five Thousand)', reference: 'Matthew 14:20–21' },
          "18": { title: 'Walking on the Sea', reference: 'Matthew 14:28–29' },
          "19": { title: "Healing the Syrophoenician Woman's Daughter", reference: 'Matthew 15:28' },
          "20": { title: 'Healing a Deaf-Mute Man', reference: 'Mark 7:34–35' },
          "21": { title: 'Multiplying the Loaves (Feeding Four Thousand)', reference: 'Matthew 15:37–38' },
          "22": { title: 'Opening the Eyes of the Blind Man of Bethsaida', reference: 'Mark 8:25' },
          "23": { title: 'Healing the Boy with an Unclean Spirit', reference: 'Mark 9:23–24' },
          "24": { title: "The Coin in the Fish's Mouth", reference: 'Matthew 17:27' },
          "25": { title: 'Healing the Man Born Blind', reference: 'John 9:25' },
          "26": { title: 'Healing the Crippled Woman', reference: 'Luke 13:13' },
          "27": { title: 'Healing the Man with Dropsy on the Sabbath', reference: 'Luke 14:4' },
          "28": { title: 'Cleansing Ten Lepers', reference: 'Luke 17:15–16' },
          "29": { title: 'The Resurrection of Lazarus', reference: 'John 11:25–26' },
          "30": { title: 'Healing Blind Bartimaeus', reference: 'Mark 10:52' },
          "31": { title: 'Cursing the Fig Tree', reference: 'Matthew 21:18–19' },
          "32": { title: "Healing Malchus's Ear", reference: 'Luke 22:51' },
          "33": { title: 'The Transfiguration', reference: 'Matthew 17:2' },
          "34": { title: "Raising of the Widow's Son (as confirmation of Messiahship)", reference: 'Luke 7:16' },
          "35": { title: 'The Holy Resurrection', reference: 'Luke 24:6–7' },
          "36": { title: 'The Miraculous Catch of Fish (Second)', reference: 'John 21:4–6' },
          "37": { title: 'The Ascension into Heaven', reference: 'Acts 1:9' }
        }
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
        items: {
          "1": { title: 'Convertir el agua en vino', reference: 'John 2:11' },
          "2": { title: 'Sanación del hijo del funcionario', reference: 'John 4:48–50' },
          "3": { title: 'Sanación del hombre en el estanque de Betesda', reference: 'John 5:8–9' },
          "4": { title: 'Expulsión de un espíritu impuro', reference: 'Luke 4:35' },
          "5": { title: 'Sanación de la suegra de Simón', reference: 'Luke 4:39' },
          "6": { title: 'Pesca milagrosa (primera)', reference: 'Luke 5:6' },
          "7": { title: 'Purificación de un leproso', reference: 'Matthew 8:3' },
          "8": { title: 'Sanación del siervo del centurión', reference: 'Matthew 8:13' },
          "9": { title: 'Resurrección del hijo de la viuda en Naín', reference: 'Luke 7:14–15' },
          "10": { title: 'Calmar la tormenta', reference: 'Luke 8:24' },
          "11": { title: 'Sanación de los endemoniados de Gadara', reference: 'Matthew 8:28' },
          "12": { title: 'Resurrección de la hija de Jairo', reference: 'Luke 8:54–55' },
          "13": { title: 'Sanación de la mujer con hemorragia', reference: 'Luke 8:48' },
          "14": { title: 'Sanación de dos ciegos', reference: 'Matthew 9:29–30' },
          "15": { title: 'Sanación del mudo poseído', reference: 'Matthew 9:33' },
          "16": { title: 'Sanación del hombre con mano seca', reference: 'Matthew 12:13' },
          "17": { title: 'Multiplicación de los panes y los peces (cinco mil)', reference: 'Matthew 14:20–21' },
          "18": { title: 'Caminar sobre el mar', reference: 'Matthew 14:28–29' },
          "19": { title: 'Sanación de la hija de la mujer sirofenicia', reference: 'Matthew 15:28' },
          "20": { title: 'Sanación de un sordo-mudo', reference: 'Mark 7:34–35' },
          "21": { title: 'Multiplicación de los panes (cuatro mil)', reference: 'Matthew 15:37–38' },
          "22": { title: 'Abrir los ojos al ciego de Betsaida', reference: 'Mark 8:25' },
          "23": { title: 'Sanación del niño con espíritu impuro', reference: 'Mark 9:23–24' },
          "24": { title: 'La moneda en la boca del pez', reference: 'Matthew 17:27' },
          "25": { title: 'Sanación del hombre nacido ciego', reference: 'John 9:25' },
          "26": { title: 'Sanación de la mujer paralítica', reference: 'Luke 13:13' },
          "27": { title: 'Sanación del hombre con hidropesía en sábado', reference: 'Luke 14:4' },
          "28": { title: 'Limpieza de diez leprosos', reference: 'Luke 17:15–16' },
          "29": { title: 'La resurrección de Lázaro', reference: 'John 11:25–26' },
          "30": { title: 'Sanación del ciego Bartimeo', reference: 'Mark 10:52' },
          "31": { title: 'Maldecir la higuera', reference: 'Matthew 21:18–19' },
          "32": { title: 'Sanación de la oreja de Malco', reference: 'Luke 22:51' },
          "33": { title: 'La Transfiguración', reference: 'Matthew 17:2' },
          "34": { title: 'Resurrección del hijo de la viuda (confirmación de la mesianidad)', reference: 'Luke 7:16' },
          "35": { title: 'La Santa Resurrección', reference: 'Luke 24:6–7' },
          "36": { title: 'Pesca milagrosa (segunda)', reference: 'John 21:4–6' },
          "37": { title: 'La Ascensión al Cielo', reference: 'Acts 1:9' }
        }
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
        items: {
          "1": { title: 'Aqua in vinum mutans', reference: 'John 2:11' },
          "2": { title: 'Sanatio filiī magistrātī', reference: 'John 4:48–50' },
          "3": { title: 'Sanatio hominis apud stagnum Bethesdae', reference: 'John 5:8–9' },
          "4": { title: 'Expulsio spiritūs immundi', reference: 'Luke 4:35' },
          "5": { title: 'Sanatio socrīnae Simonis', reference: 'Luke 4:39' },
          "6": { title: 'Mirabilis captura piscum (prima)', reference: 'Luke 5:6' },
          "7": { title: 'Purificatio leprosi', reference: 'Matthew 8:3' },
          "8": { title: 'Sanatio servi centurionis', reference: 'Matthew 8:13' },
          "9": { title: 'Resurrectio filii viduae Nain', reference: 'Luke 7:14–15' },
          "10": { title: 'Tempestatem sedans', reference: 'Luke 8:24' },
          "11": { title: 'Sanatio daemonizatorum Gadarenorum', reference: 'Matthew 8:28' },
          "12": { title: 'Resurrectio filiae Jairi', reference: 'Luke 8:54–55' },
          "13": { title: 'Sanatio mulieris cum fluxu sanguinis', reference: 'Luke 8:48' },
          "14": { title: 'Sanatio duorum caecorum', reference: 'Matthew 9:29–30' },
          "15": { title: 'Sanatio mutī daemonizati', reference: 'Matthew 9:33' },
          "16": { title: 'Sanatio hominis manu contrecta', reference: 'Matthew 12:13' },
          "17": { title: 'Multiplicatio panum et piscium (quinque milia)', reference: 'Matthew 14:20–21' },
          "18": { title: 'Ambulatio super mare', reference: 'Matthew 14:28–29' },
          "19": { title: 'Sanatio filiae mulieris Syrophoeniciae', reference: 'Matthew 15:28' },
          "20": { title: 'Sanatio surdomutī', reference: 'Mark 7:34–35' },
          "21": { title: 'Multiplicatio panum (quattuor milia)', reference: 'Matthew 15:37–38' },
          "22": { title: 'Oculos caeci Betsaidae aperiens', reference: 'Mark 8:25' },
          "23": { title: 'Sanatio pueri cum spiritu immundo', reference: 'Mark 9:23–24' },
          "24": { title: 'Moneta in ore piscis', reference: 'Matthew 17:27' },
          "25": { title: 'Sanatio hominis caecī nato', reference: 'John 9:25' },
          "26": { title: 'Sanatio feminae claudicantis', reference: 'Luke 13:13' },
          "27": { title: 'Sanatio hominis cum hydropsīs in sabbato', reference: 'Luke 14:4' },
          "28": { title: 'Purificatio decem leprosorum', reference: 'Luke 17:15–16' },
          "29": { title: 'Resurrectio Lazari', reference: 'John 11:25–26' },
          "30": { title: 'Sanatio caeci Bartimaei', reference: 'Mark 10:52' },
          "31": { title: 'Maledictio ficus', reference: 'Matthew 21:18–19' },
          "32": { title: 'Sanatio auris Malchi', reference: 'Luke 22:51' },
          "33": { title: 'Transfiguratio', reference: 'Matthew 17:2' },
          "34": { title: 'Resurrectio filii viduae (confirmatio messiae)', reference: 'Luke 7:16' },
          "35": { title: 'Sancta Resurrectio', reference: 'Luke 24:6–7' },
          "36": { title: 'Mirabilis captura piscum (secunda)', reference: 'John 21:4–6' },
          "37": { title: 'Ascensio in caelum', reference: 'Acts 1:9' }
        }
      },
      footer: {
        dedication: 'Cum Amore Regi Regum Dedicatum',
      },
    },
  },
  it: {
    translation: {
      nav: {
        home: 'Home',
        life: 'Vita',
        miracles: 'Miracoli sulla Terra',
        language: 'Lingua',
      },
      intro: {
        dedication:
          "Dedicato a Colui che servo, che non mi ha mai abbandonato e sempre mi ha protetto — il mio Re e il mio Salvatore, Gesù Cristo.",
        enter: 'Entra',
      },
      home: {
        title: 'Gesù Cristo',
        subtitle: 'Re dei Re · Signore dei Signori',
        welcome:
          'Benvenuto in uno spazio sacro dedicato alla vita, ai miracoli e alla gloria del nostro Signore Gesù Cristo.',
        exploreLife: 'Esplora la Sua Vita',
        exploreMiracles: 'Esplora i Suoi Miracoli',
      },
      life: {
        title: 'La Vita del Nostro Signore Gesù Cristo',
        subtitle: 'Una Prospettiva Ortodossa',
        segments: {
          annunciation: {
            title: "L'Annunciazione e la Natività",
            location: 'Betlemme',
            text: 'L’Arcangelo Gabriele annunciò alla Most Holy Theotokos che avrebbe concepito e partorito il Figlio di Dio. Il Verbo eterno si fece carne e nacque in una grotta a Betlemme...',
          },
          baptism: {
            title: 'Il Battesimo di Cristo',
            location: 'Teofania — Fiume Giordano',
            text: 'All’età di trenta anni, Gesù venne al Giordano dove Giovanni battezzava. Dopo il battesimo, lo Spirito Santo scese su di Lui e la voce del Padre si udì.',
          },
          ministry: {
            title: 'Il Ministero e la Trasfigurazione',
            location: 'Monte Tabor e Galilea',
            text: 'Per tre anni il Signore predicò il Regno dei Cieli, guarì i malati e compì miracoli. Sul Monte Tabor si trasfigurò davanti a Pietro, Giacomo e Giovanni.',
          },
          passion: {
            title: 'La Passione e la Crocifissione',
            location: 'Gerusalemme — Golgota',
            text: 'Il Signore entrò a Gerusalemme, istituì l’Eucaristia e fu tradito e crocifisso. Morì e fu sepolto nel sepolcro di Giuseppe d’Arimatea.',
          },
          resurrection: {
            title: 'La Santa Risurrezione (Pasqua) e l’Ascensione',
            location: 'Gerusalemme — Monte degli Ulivi',
            text: 'Il terzo giorno risorse dai morti; dopo quaranta giorni ascese al Cielo promettendo il dono dello Spirito Santo.',
          },
        },
      },
      miracles: {
        title: 'Miracoli sulla Terra',
        subtitle: 'I Segni e le Meraviglie del nostro Signore Gesù Cristo',
        reference: 'Riferimento',
        items: {
          "1": { title: "Trasformare l'acqua in vino", reference: 'John 2:11' },
          "2": { title: "Guarigione del figlio del funzionario", reference: 'John 4:48–50' },
          "3": { title: 'Guarigione dell\'uomo presso la piscina di Bethesda', reference: 'John 5:8–9' },
          "4": { title: 'Cacciata di uno spirito impuro', reference: 'Luke 4:35' },
          "5": { title: 'Guarigione della suocera di Simone', reference: 'Luke 4:39' },
          "6": { title: 'Miracolosa pesca (prima)', reference: 'Luke 5:6' },
          "7": { title: 'Guarigione di un lebbroso', reference: 'Matthew 8:3' },
          "8": { title: 'Guarigione del servo del centurione', reference: 'Matthew 8:13' },
          "9": { title: 'Risurrezione del figlio della vedova a Nain', reference: 'Luke 7:14–15' },
          "10": { title: 'Calmare la tempesta', reference: 'Luke 8:24' },
          "11": { title: 'Guarigione dei demoniaci di Gadara', reference: 'Matthew 8:28' },
          "12": { title: 'Risurrezione della figlia di Giairo', reference: 'Luke 8:54–55' },
          "13": { title: 'Guarigione della donna con emorragia', reference: 'Luke 8:48' },
          "14": { title: 'Guarigione di due ciechi', reference: 'Matthew 9:29–30' },
          "15": { title: 'Guarigione di un muto indemoniato', reference: 'Matthew 9:33' },
          "16": { title: 'Guarigione dell\'uomo con la mano secca', reference: 'Matthew 12:13' },
          "17": { title: 'Moltiplicazione dei pani e dei pesci (cinquemila)', reference: 'Matthew 14:20–21' },
          "18": { title: 'Camminare sul mare', reference: 'Matthew 14:28–29' },
          "19": { title: 'Guarigione della figlia della donna sirofenicia', reference: 'Matthew 15:28' },
          "20": { title: 'Guarigione di un sordomuto', reference: 'Mark 7:34–35' },
          "21": { title: 'Moltiplicazione dei pani (quattromila)', reference: 'Matthew 15:37–38' },
          "22": { title: 'Aprire gli occhi al cieco di Betsaida', reference: 'Mark 8:25' },
          "23": { title: 'Guarigione del ragazzo con spirito immondo', reference: 'Mark 9:23–24' },
          "24": { title: 'La moneta nella bocca del pesce', reference: 'Matthew 17:27' },
          "25": { title: 'Guarigione dell\'uomo cieco dalla nascita', reference: 'John 9:25' },
          "26": { title: 'Guarigione della donna storpia', reference: 'Luke 13:13' },
          "27": { title: 'Guarigione dell\'uomo con idropisia nel sabato', reference: 'Luke 14:4' },
          "28": { title: 'Purificazione di dieci lebbrosi', reference: 'Luke 17:15–16' },
          "29": { title: 'La risurrezione di Lazzaro', reference: 'John 11:25–26' },
          "30": { title: 'Guarigione del cieco Bartimeo', reference: 'Mark 10:52' },
          "31": { title: 'Maledizione della pianta di fico', reference: 'Matthew 21:18–19' },
          "32": { title: 'Guarigione dell\'orecchio di Malco', reference: 'Luke 22:51' },
          "33": { title: 'La Trasfigurazione', reference: 'Matthew 17:2' },
          "34": { title: 'Risurrezione del figlio della vedova (conferma della messianità)', reference: 'Luke 7:16' },
          "35": { title: 'La Santa Risurrezione', reference: 'Luke 24:6–7' },
          "36": { title: 'Miracolosa pesca (seconda)', reference: 'John 21:4–6' },
          "37": { title: 'L\'Ascensione al Cielo', reference: 'Acts 1:9' }
        }
      },
      footer: {
        dedication: "Dedicato con Amore al Re dei Re",
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: 'Start',
        life: 'Leben',
        miracles: 'Wunder auf Erden',
        language: 'Sprache',
      },
      intro: {
        dedication:
          'Gewidmet dem Einen, dem ich diene, der mich niemals verlassen hat und mich stets beschützte — mein König und mein Erlöser, Jesus Christus.',
        enter: 'Betreten',
      },
      home: {
        title: 'Jesus Christus',
        subtitle: 'König der Könige · Herr der Herren',
        welcome: 'Willkommen in einem heiligen Raum, der dem Leben, den Wundern und der Herrlichkeit unseres Herrn Jesus Christus gewidmet ist.',
        exploreLife: 'Sein Leben erkunden',
        exploreMiracles: 'Seine Wunder erkunden',
      },
      life: {
        title: 'Das Leben Unseres Herrn Jesus Christus',
        subtitle: 'Eine orthodoxe Perspektive',
        segments: {
          annunciation: {
            title: 'Die Verkündigung & Geburt',
            location: 'Bethlehem',
            text: 'Der Erzengel Gabriel verkündete der Allheiligen Theotokos, dass sie den Sohn Gottes empfangen und gebären würde. Das ewige Wort wurde Fleisch und wurde in einer Höhle in Bethlehem geboren.',
          },
          baptism: {
            title: 'Die Taufe Christi',
            location: 'Theophanie — Jordan',
            text: 'Im Alter von dreißig Jahren kam Jesus zum Jordan, wo Johannes taufte. Als Er aus dem Wasser stieg, öffneten sich die Himmel und der Heilige Geist kam herab.',
          },
          ministry: {
            title: 'Dienst und Verklärung',
            location: 'Berg Tabor & Galiläa',
            text: 'Drei Jahre lang predigte der Herr das Reich der Himmel, heilte die Kranken und wirkte Wunder. Auf dem Berg Tabor wurde Er vor Petrus, Jakobus und Johannes verklärt.',
          },
          passion: {
            title: 'Leiden und Kreuzigung',
            location: 'Jerusalem — Golgatha',
            text: 'Der Herr zog triumphal in Jerusalem ein, stiftete die Eucharistie und wurde verraten, verurteilt und gekreuzigt.',
          },
          resurrection: {
            title: 'Die Heilige Auferstehung (Pascha) & Himmelfahrt',
            location: 'Jerusalem — Ölberg',
            text: 'Am dritten Tag ist Er von den Toten auferstanden und ist nach vierzig Tagen in Herrlichkeit in den Himmel aufgefahren.',
          },
        },
      },
      miracles: {
        title: 'Wunder auf Erden',
        subtitle: 'Die Zeichen und Wunder unseres Herrn Jesus Christus',
        reference: 'Referenz',
        items: {
          "1": { title: 'Wasser in Wein verwandeln', reference: 'John 2:11' },
          "2": { title: 'Heilung des Sohnes des Beamten', reference: 'John 4:48–50' },
          "3": { title: 'Heilung des Mannes am Teich Bethesda', reference: 'John 5:8–9' },
          "4": { title: 'Austreibung eines unreinen Geistes', reference: 'Luke 4:35' },
          "5": { title: 'Heilung von Simons Schwiegermutter', reference: 'Luke 4:39' },
          "6": { title: 'Wundersame Fischfang (erste)', reference: 'Luke 5:6' },
          "7": { title: 'Reinigung eines Aussätzigen', reference: 'Matthew 8:3' },
          "8": { title: 'Heilung des Knechtes des Zenturios', reference: 'Matthew 8:13' },
          "9": { title: 'Auferweckung des Sohnes der Witwe zu Nain', reference: 'Luke 7:14–15' },
          "10": { title: 'Stillung des Sturms', reference: 'Luke 8:24' },
          "11": { title: 'Heilung der gadarenischen Besessenen', reference: 'Matthew 8:28' },
          "12": { title: 'Auferweckung der Tochter des Jairus', reference: 'Luke 8:54–55' },
          "13": { title: 'Heilung der Frau mit Blutung', reference: 'Luke 8:48' },
          "14": { title: 'Heilung zweier Blinder', reference: 'Matthew 9:29–30' },
          "15": { title: 'Heilung eines stummen Besessenen', reference: 'Matthew 9:33' },
          "16": { title: 'Heilung des Mannes mit verdorrter Hand', reference: 'Matthew 12:13' },
          "17": { title: 'Vermehrung der Brote und Fische (fünftausend)', reference: 'Matthew 14:20–21' },
          "18": { title: 'Gehen auf dem Meer', reference: 'Matthew 14:28–29' },
          "19": { title: 'Heilung der Tochter der syrophönizischen Frau', reference: 'Matthew 15:28' },
          "20": { title: 'Heilung eines Taubstummen', reference: 'Mark 7:34–35' },
          "21": { title: 'Vermehrung der Brote (viertausend)', reference: 'Matthew 15:37–38' },
          "22": { title: 'Öffnen der Augen des Blinden von Bethesda', reference: 'Mark 8:25' },
          "23": { title: 'Heilung des Knaben mit unreinem Geist', reference: 'Mark 9:23–24' },
          "24": { title: 'Die Münze im Maul des Fisches', reference: 'Matthew 17:27' },
          "25": { title: 'Heilung des von Geburt an Blinden', reference: 'John 9:25' },
          "26": { title: 'Heilung der krüppeln Frau', reference: 'Luke 13:13' },
          "27": { title: 'Heilung des Mannes mit Wassersucht am Sabbat', reference: 'Luke 14:4' },
          "28": { title: 'Reinigung von zehn Aussätzigen', reference: 'Luke 17:15–16' },
          "29": { title: 'Die Auferstehung des Lazarus', reference: 'John 11:25–26' },
          "30": { title: 'Heilung des blinden Bartimäus', reference: 'Mark 10:52' },
          "31": { title: 'Die Verfluchung des Feigenbaums', reference: 'Matthew 21:18–19' },
          "32": { title: 'Heilung des Ohrs des Malchus', reference: 'Luke 22:51' },
          "33": { title: 'Die Verklärung', reference: 'Matthew 17:2' },
          "34": { title: 'Auferweckung des Sohnes der Witwe (Bestätigung der Messianität)', reference: 'Luke 7:16' },
          "35": { title: 'Die Heilige Auferstehung', reference: 'Luke 24:6–7' },
          "36": { title: 'Wundersame Fischfang (zweite)', reference: 'John 21:4–6' },
          "37": { title: 'Himmelfahrt', reference: 'Acts 1:9' }
        }
      },
      footer: {
        dedication: 'Gewidmet mit Liebe dem König der Könige',
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        life: 'Vie',
        miracles: 'Miracles sur Terre',
        language: 'Langue',
      },
      intro: {
        dedication:
          'Dédié à Celui que je sers, qui ne m’a jamais abandonné et m’a toujours protégé — mon Roi et mon Sauveur, Jésus-Christ.',
        enter: 'Entrer',
      },
      home: {
        title: 'Jésus-Christ',
        subtitle: 'Roi des Rois · Seigneur des Seigneurs',
        welcome: 'Bienvenue dans un espace sacré dédié à la vie, aux miracles et à la gloire de notre Seigneur Jésus-Christ.',
        exploreLife: 'Explorer Sa Vie',
        exploreMiracles: 'Explorer Ses Miracles',
      },
      life: {
        title: 'La Vie de Notre Seigneur Jésus-Christ',
        subtitle: 'Une perspective orthodoxe',
        segments: {
          annunciation: {
            title: 'L’Annonciation & la Nativité',
            location: 'Bethléem',
            text: 'L’archange Gabriel annonça à la Très Sainte Théotokos qu’elle concevrait et enfanterait le Fils de Dieu. Le Verbe éternel s’est fait chair et est né dans une grotte à Bethléem.',
          },
          baptism: {
            title: 'Le Baptême du Christ',
            location: 'Théophanie — Jourdain',
            text: 'À l’âge de trente ans, Jésus vint au Jourdain où Jean baptisait. À sa sortie de l’eau, le Saint-Esprit descendit sur Lui et la voix du Père se fit entendre.',
          },
          ministry: {
            title: 'Le Ministère & la Transfiguration',
            location: 'Mont Thabor & Galilée',
            text: 'Pendant trois ans, le Seigneur prêcha le Royaume des Cieux, guérit les malades et accomplit des miracles. Sur le mont Thabor, Il fut transfiguré devant Pierre, Jacques et Jean.',
          },
          passion: {
            title: 'La Passion & la Crucifixion',
            location: 'Jérusalem — Golgotha',
            text: 'Le Seigneur entra triomphalement à Jérusalem, institua l’Eucharistie et fut trahi, jugé injustement et crucifié.',
          },
          resurrection: {
            title: 'La Sainte Résurrection (Pâques) & l’Ascension',
            location: 'Jérusalem — Mont des Oliviers',
            text: 'Le troisième jour, Il ressuscita des morts; après quarante jours, Il monta au Ciel en gloire.',
          },
        },
      },
      miracles: {
        title: 'Miracles sur Terre',
        subtitle: 'Les signes et merveilles de notre Seigneur Jésus-Christ',
        reference: 'Référence',
        items: {
          "1": { title: "Changer l'eau en vin", reference: 'John 2:11' },
          "2": { title: 'Guérison du fils du fonctionnaire', reference: 'John 4:48–50' },
          "3": { title: 'Guérison de l\'homme à la piscine de Béthesda', reference: 'John 5:8–9' },
          "4": { title: 'Chasse d\'un esprit impur', reference: 'Luke 4:35' },
          "5": { title: 'Guérison de la belle-mère de Simon', reference: 'Luke 4:39' },
          "6": { title: 'Prise miraculeuse de poissons (première)', reference: 'Luke 5:6' },
          "7": { title: 'Purification d\'un lépreux', reference: 'Matthew 8:3' },
          "8": { title: 'Guérison du serviteur du centurion', reference: 'Matthew 8:13' },
          "9": { title: 'Résurrection du fils de la veuve à Naïn', reference: 'Luke 7:14–15' },
          "10": { title: 'Apaiser la tempête', reference: 'Luke 8:24' },
          "11": { title: 'Guérison des démoniaques de Gadara', reference: 'Matthew 8:28' },
          "12": { title: 'Résurrection de la fille de Jaïre', reference: 'Luke 8:54–55' },
          "13": { title: 'Guérison de la femme ayant un flux de sang', reference: 'Luke 8:48' },
          "14": { title: 'Guérison de deux aveugles', reference: 'Matthew 9:29–30' },
          "15": { title: 'Guérison d\'un démoniaque muet', reference: 'Matthew 9:33' },
          "16": { title: 'Guérison de l\'homme à la main desséchée', reference: 'Matthew 12:13' },
          "17": { title: 'Multiplication des pains et des poissons (cinq mille)', reference: 'Matthew 14:20–21' },
          "18": { title: 'Marcher sur la mer', reference: 'Matthew 14:28–29' },
          "19": { title: 'Guérison de la fille de la femme syrophénicienne', reference: 'Matthew 15:28' },
          "20": { title: 'Guérison d\'un sourd-muet', reference: 'Mark 7:34–35' },
          "21": { title: 'Multiplication des pains (quatre mille)', reference: 'Matthew 15:37–38' },
          "22": { title: 'Ouverture des yeux de l\'aveugle de Béthsaïda', reference: 'Mark 8:25' },
          "23": { title: 'Guérison du garçon possédé d\'un esprit impur', reference: 'Mark 9:23–24' },
          "24": { title: 'La pièce dans la bouche du poisson', reference: 'Matthew 17:27' },
          "25": { title: 'Guérison de l\'homme né aveugle', reference: 'John 9:25' },
          "26": { title: 'Guérison de la femme boiteuse', reference: 'Luke 13:13' },
          "27": { title: 'Guérison de l\'homme avec hydropsie le sabbat', reference: 'Luke 14:4' },
          "28": { title: 'Purification de dix lépreux', reference: 'Luke 17:15–16' },
          "29": { title: 'La résurrection de Lazare', reference: 'John 11:25–26' },
          "30": { title: 'Guérison de l\'aveugle Bartimée', reference: 'Mark 10:52' },
          "31": { title: 'La malédiction du figuier', reference: 'Matthew 21:18–19' },
          "32": { title: 'Guérison de l\'oreille de Malchus', reference: 'Luke 22:51' },
          "33": { title: 'La Transfiguration', reference: 'Matthew 17:2' },
          "34": { title: 'Résurrection du fils de la veuve (confirmation de la messianité)', reference: 'Luke 7:16' },
          "35": { title: 'La Sainte Résurrection', reference: 'Luke 24:6–7' },
          "36": { title: 'Prise miraculeuse de poissons (deuxième)', reference: 'John 21:4–6' },
          "37": { title: 'L\'Ascension au Ciel', reference: 'Acts 1:9' }
        }
      },
      footer: {
        dedication: 'Dédié avec amour au Roi des Rois',
      },
    },
  },
  ja: {
    translation: {
      nav: {
        home: 'ホーム',
        life: '生涯',
        miracles: '地上の奇跡',
        language: '言語',
      },
      intro: {
        dedication:
          '私が仕える方に捧げます。決して私を見捨てず、常に守ってくださった方—私の王であり救い主、イエス・キリストに。',
        enter: '入る',
      },
      home: {
        title: 'イエス・キリスト',
        subtitle: '万王の王 · 万主の主',
        welcome: '主イエス・キリストの生涯、奇跡、栄光に捧げられた聖なる空間へようこそ。',
        exploreLife: 'その生涯をたどる',
        exploreMiracles: 'その奇跡をたどる',
      },
      life: {
        title: '我らが主イエス・キリストの生涯',
        subtitle: '正教会の視点',
        segments: {
          annunciation: {
            title: '受胎告知と降誕',
            location: 'ベツレヘム',
            text: '大天使ガブリエルは至聖なる神の母に、神の子を宿し産むと告げました。永遠の言（ロゴス）は肉となり、ベツレヘムの洞窟で生まれました。',
          },
          baptism: {
            title: 'キリストの洗礼',
            location: '神現祭 — ヨルダン川',
            text: '三十歳の時、イエスはヨハネのいるヨルダンに来て洗礼を受けました。水から上がると、聖霊が鳩のように降り、父の声が聞かれました。',
          },
          ministry: {
            title: '公生活と変容',
            location: 'タボル山とガリラヤ',
            text: '三年間、主は天の国を説き、病を癒し、多くの奇跡を行われました。タボル山でペテロ、ヤコブ、ヨハネの前に変容されました。',
          },
          passion: {
            title: '受難と十字架',
            location: 'エルサレム — ゴルゴタ',
            text: '主はエルサレムに凱旋入城し、最後の晩餐で聖餐を設け、ユダに裏切られ、十字架にかけられました。',
          },
          resurrection: {
            title: '復活（パスハ）と昇天',
            location: 'エルサレム — オリーブ山',
            text: '三日後に死者の中から復活し、四十日後に栄光のうちに昇天されました。',
          },
        },
      },
      miracles: {
        title: '地上の奇跡',
        subtitle: '我らが主イエス・キリストのしるしと不思議',
        reference: '参照',
      },
      // Per-miracle translations (titles + references). Quotes remain English by default.
      miracles: {
        title: '地上の奇跡',
        subtitle: '我らが主イエス・キリストのしるしと不思議',
        reference: '参照',
        items: {
          "1": { title: '水をぶどう酒に変える', reference: 'John 2:11' },
          "2": { title: '役人の息子の癒し', reference: "John 4:48–50" },
          "3": { title: 'ベセスダの池での男の癒し', reference: 'John 5:8–9' },
          "4": { title: '汚れた霊を追い出す', reference: 'Luke 4:35' },
          "5": { title: 'シモンの姑の癒し', reference: 'Luke 4:39' },
          "6": { title: '奇跡の漁獲（第一）', reference: 'Luke 5:6' },
          "7": { title: 'らい病の癒し', reference: 'Matthew 8:3' },
          "8": { title: '百人隊長の僕の癒し', reference: 'Matthew 8:13' },
          "9": { title: 'ナインのやもめの息子の蘇生', reference: 'Luke 7:14–15' },
          "10": { title: '嵐を静める', reference: 'Luke 8:24' },
          "11": { title: 'ガダラの悪霊の追放', reference: 'Matthew 8:28' },
          "12": { title: 'ヤイロの娘の蘇生', reference: 'Luke 8:54–55' },
          "13": { title: '血の出る女の癒し', reference: 'Luke 8:48' },
          "14": { title: '二人の盲人の癒し', reference: 'Matthew 9:29–30' },
          "15": { title: '口の聞けなかった者の癒し', reference: 'Matthew 9:33' },
          "16": { title: '萎えた手の癒し', reference: 'Matthew 12:13' },
          "17": { title: '五千人の給食（パンの増加）', reference: 'Matthew 14:20–21' },
          "18": { title: '海の上を歩く', reference: 'Matthew 14:28–29' },
          "19": { title: 'シロフェニキアの女の娘の癒し', reference: 'Matthew 15:28' },
          "20": { title: '耳の聞こえない者の癒し', reference: 'Mark 7:34–35' },
          "21": { title: '四千人の給食（パンの増加）', reference: 'Matthew 15:37–38' },
          "22": { title: 'ベザイダの盲人の目を開かせる', reference: 'Mark 8:25' },
          "23": { title: '悪霊に取り憑かれた少年の癒し', reference: 'Mark 9:23–24' },
          "24": { title: '魚の口の中の銀貨', reference: 'Matthew 17:27' },
          "25": { title: '生まれつき盲目の癒し', reference: 'John 9:25' },
          "26": { title: '歩けなかった女の癒し', reference: 'Luke 13:13' },
          "27": { title: '浮腫のある者の癒し', reference: 'Luke 14:4' },
          "28": { title: '十人のらい病人の癒し', reference: 'Luke 17:15–16' },
          "29": { title: 'ラザロの復活', reference: 'John 11:25–26' },
          "30": { title: '盲目のバルティマイの癒し', reference: 'Mark 10:52' },
          "31": { title: 'イチジクの木の呪い', reference: 'Matthew 21:18–19' },
          "32": { title: 'マルコのしもべの耳の癒し', reference: 'Luke 22:51' },
          "33": { title: '変容（栄光の現れ）', reference: 'Matthew 17:2' },
          "34": { title: 'やもめの息子の蘇生（メシアの証し）', reference: 'Luke 7:16' },
          "35": { title: '聖なる復活', reference: 'Luke 24:6–7' },
          "36": { title: '奇跡の漁獲（第二）', reference: 'John 21:4–6' },
          "37": { title: '昇天', reference: 'Acts 1:9' }
        }
      },
      footer: {
        dedication: '万王の王に愛を込めて捧げる',
      },
    },
  },
  ko: {
    translation: {
      nav: {
        home: '홈',
        life: '생애',
        miracles: '지상의 기적',
        language: '언어',
      },
      intro: {
        dedication:
          '제가 섬기는 분께 바칩니다. 결코 저를 떠나지 않으시고 늘 지켜주신 분 — 나의 왕이며 구세주, 예수 그리스도께.',
        enter: '입장',
      },
      home: {
        title: '예수 그리스도',
        subtitle: '만왕의 왕 · 만주의 주',
        welcome: '우리 주 예수 그리스도의 삶과 기적과 영광을 기리는 거룩한 공간에 오신 것을 환영합니다.',
        exploreLife: '그의 생애 보기',
        exploreMiracles: '그의 기적 보기',
      },
      life: {
        title: '우리 주 예수 그리스도의 생애',
        subtitle: '정교회 관점',
        segments: {
          annunciation: {
            title: '수태고지와 탄생',
            location: '베들레헴',
            text: '대천사 가브리엘은 지극히 거룩하신 성모에게 하나님의 아들을 잉태하여 낳을 것이라고 알렸습니다. 영원한 말씀은 육신이 되어 베들레헴의 동굴에서 태어나셨습니다.',
          },
          baptism: {
            title: '그리스도의 침례',
            location: '신현 — 요단강',
            text: '서른 살에 예수님은 세례 요한이 있는 요단강에 오셨습니다. 물에서 올라오실 때 하늘이 열리고 성령이 비둘기처럼 내려왔습니다.',
          },
          ministry: {
            title: '사역과 변모',
            location: '타보르 산과 갈릴리',
            text: '세 해 동안 주님은 천국의 복음을 전하시고 병을 고치시며 수많은 기적을 행하셨습니다. 타보르 산에서 베드로와 야고보와 요한 앞에서 변모하셨습니다.',
          },
          passion: {
            title: '수난과 십자가형',
            location: '예루살렘 — 골고다',
            text: '주님은 예루살렘에 입성하시고 성찬을 제정하시고 배반당해 십자가에 못 박히셨습니다. 돌아가셔서 무덤에 묻히셨습니다.',
          },
          resurrection: {
            title: '성스러운 부활(파스카)과 승천',
            location: '예루살렘 — 올리브산',
            text: '사흘 만에 죽은 자 가운데서 부활하시고 마흔 날 후에 영광 가운데 승천하셨습니다.',
          },
        },
      },
      miracles: {
        title: '지상의 기적',
        subtitle: '우리 주 예수 그리스도의 표적과 기이',
        reference: '참고',
        items: {
          "1": { title: '물을 포도주로 바꾸심', reference: 'John 2:11' },
          "2": { title: '관리의 아들의 치유', reference: 'John 4:48–50' },
          "3": { title: '베데스다 못가의 사람 치유', reference: 'John 5:8–9' },
          "4": { title: '더러운 귀신을 쫓아냄', reference: 'Luke 4:35' },
          "5": { title: '시몬의 장모 치유', reference: 'Luke 4:39' },
          "6": { title: '기적의 어획(첫 번째)', reference: 'Luke 5:6' },
          "7": { title: '한 나병환자 정결케 하심', reference: 'Matthew 8:3' },
          "8": { title: '백부장의 하인의 치유', reference: 'Matthew 8:13' },
          "9": { title: '나인에서 과부의 아들을 살리심', reference: 'Luke 7:14–15' },
          "10": { title: '폭풍을 잠잠케 하심', reference: 'Luke 8:24' },
          "11": { title: '가다라의 귀신 들린 자 치유', reference: 'Matthew 8:28' },
          "12": { title: '야이로의 딸 소생', reference: 'Luke 8:54–55' },
          "13": { title: '혈루증 있는 여인의 치유', reference: 'Luke 8:48' },
          "14": { title: '두 맹인의 치유', reference: 'Matthew 9:29–30' },
          "15": { title: '귀머거리 벙어리의 치유', reference: 'Matthew 9:33' },
          "16": { title: '손이 마른 사람의 치유', reference: 'Matthew 12:13' },
          "17": { title: '떡과 물고기의 증가(오천)', reference: 'Matthew 14:20–21' },
          "18": { title: '바다 위를 걷심', reference: 'Matthew 14:28–29' },
          "19": { title: '수로피니케여인의 딸 치유', reference: 'Matthew 15:28' },
          "20": { title: '귀먹고 말 못하는 사람 치유', reference: 'Mark 7:34–35' },
          "21": { title: '떡의 증가(사천)', reference: 'Matthew 15:37–38' },
          "22": { title: '벳새다 맹인의 눈을 뜨게 함', reference: 'Mark 8:25' },
          "23": { title: '악한 영 있는 소년 치유', reference: 'Mark 9:23–24' },
          "24": { title: '물고기 입속의 은돈', reference: 'Matthew 17:27' },
          "25": { title: '선천성 맹인의 치유', reference: 'John 9:25' },
          "26": { title: '말 못하는 여인의 치유', reference: 'Luke 13:13' },
          "27": { title: '안식일에 수종병 있는 사람 치유', reference: 'Luke 14:4' },
          "28": { title: '열 사람 나병환자 정결케 함', reference: 'Luke 17:15–16' },
          "29": { title: '나사로의 부활', reference: 'John 11:25–26' },
          "30": { title: '맹인 바디매오 치유', reference: 'Mark 10:52' },
          "31": { title: '무화과나무 저주', reference: 'Matthew 21:18–19' },
          "32": { title: '말고스의 귀 치유', reference: 'Luke 22:51' },
          "33": { title: '변모', reference: 'Matthew 17:2' },
          "34": { title: '과부의 아들 소생(메시아됨의 확증)', reference: 'Luke 7:16' },
          "35": { title: '거룩한 부활', reference: 'Luke 24:6–7' },
          "36": { title: '기적의 어획(두 번째)', reference: 'John 21:4–6' },
          "37": { title: '승천', reference: 'Acts 1:9' }
        }
      },
      footer: {
        dedication: '만왕의 왕께 사랑을 담아 바칩니다',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  // detect browser language when available and fall back to English
  lng: (typeof navigator !== 'undefined' && (() => {
    const browser = navigator.language && navigator.language.split('-')[0];
    const available = Object.keys(resources);
    return available.includes(browser) ? browser : 'en';
  })()) ,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
