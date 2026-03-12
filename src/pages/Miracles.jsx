import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const miracles = [
  {
    id: 1,
    title: 'Changing Water into Wine',
    quote:
      '"This beginning of signs Jesus did in Cana of Galilee, and manifested His glory; and His disciples believed in Him."',
    reference: 'John 2:11',
  },
  {
    id: 2,
    title: 'Healing the Official\'s Son',
    quote:
      '"So Jesus said to him, \'Unless you people see signs and wonders, you will by no means believe.\' The nobleman said to Him, \'Sir, come down before my child dies!\' Jesus said to him, \'Go your way; your son lives.\'"',
    reference: 'John 4:48–50',
  },
  {
    id: 3,
    title: 'Healing the Man at the Pool of Bethesda',
    quote:
      '"Jesus said to him, \'Rise, take up your bed and walk.\' And immediately the man was made well, took up his bed, and walked."',
    reference: 'John 5:8–9',
  },
  {
    id: 4,
    title: 'Driving Out an Impure Spirit',
    quote:
      '"But Jesus rebuked him, saying, \'Be quiet, and come out of him!\' And when the demon had thrown him in their midst, it came out of him and did not hurt him."',
    reference: 'Luke 4:35',
  },
  {
    id: 5,
    title: 'Healing Simon\'s Mother-in-Law',
    quote:
      '"So He stood over her and rebuked the fever, and it left her. And immediately she arose and served them."',
    reference: 'Luke 4:39',
  },
  {
    id: 6,
    title: 'The Miraculous Catch of Fish (First)',
    quote:
      '"And when they had done this, they caught a great number of fish, and their net was breaking."',
    reference: 'Luke 5:6',
  },
  {
    id: 7,
    title: 'Cleansing a Man with Leprosy',
    quote:
      '"Then Jesus put out His hand and touched him, saying, \'I am willing; be cleansed.\' Immediately his leprosy was cleansed."',
    reference: 'Matthew 8:3',
  },
  {
    id: 8,
    title: 'Healing the Centurion\'s Servant',
    quote:
      '"Then Jesus said to the centurion, \'Go your way; and as you have believed, so let it be done for you.\' And his servant was healed that same hour."',
    reference: 'Matthew 8:13',
  },
  {
    id: 9,
    title: 'Raising the Widow\'s Son at Nain',
    quote:
      '"Then He came and touched the open coffin, and those who carried him stood still. And He said, \'Young man, I say to you, arise.\' So he who was dead sat up and began to speak."',
    reference: 'Luke 7:14–15',
  },
  {
    id: 10,
    title: 'Calming the Storm',
    quote:
      '"Then He arose and rebuked the wind and the raging of the water. And they ceased, and there was a calm."',
    reference: 'Luke 8:24',
  },
  {
    id: 11,
    title: 'Healing the Gadarene Demoniacs',
    quote:
      '"When He had come to the other side, to the country of the Gergesenes, there met Him two demon-possessed men, coming out of the tombs, exceedingly fierce, so that no one could pass that way."',
    reference: 'Matthew 8:28',
  },
  {
    id: 12,
    title: 'Raising Jairus\'s Daughter',
    quote:
      '"But He put them all outside, took her by the hand and called, saying, \'Little girl, arise.\' Then her spirit returned, and she arose immediately."',
    reference: 'Luke 8:54–55',
  },
  {
    id: 13,
    title: 'Healing the Woman with the Issue of Blood',
    quote:
      '"And He said to her, \'Daughter, be of good cheer; your faith has made you well. Go in peace.\'"',
    reference: 'Luke 8:48',
  },
  {
    id: 14,
    title: 'Healing Two Blind Men',
    quote:
      '"Then He touched their eyes, saying, \'According to your faith let it be to you.\' And their eyes were opened."',
    reference: 'Matthew 9:29–30',
  },
  {
    id: 15,
    title: 'Healing a Mute Demoniac',
    quote:
      '"But when the demon was cast out, the mute spoke. And the multitudes marveled, saying, \'It was never seen like this in Israel!\'"',
    reference: 'Matthew 9:33',
  },
  {
    id: 16,
    title: 'Healing the Man with a Withered Hand',
    quote:
      '"Then He said to the man, \'Stretch out your hand.\' And he stretched it out, and it was restored as whole as the other."',
    reference: 'Matthew 12:13',
  },
  {
    id: 17,
    title: 'Multiplying the Loaves and Fishes (Feeding Five Thousand)',
    quote:
      '"So they all ate and were filled, and they took up twelve baskets full of the fragments that remained. Now those who had eaten were about five thousand men, besides women and children."',
    reference: 'Matthew 14:20–21',
  },
  {
    id: 18,
    title: 'Walking on the Sea',
    quote:
      '"And Peter answered Him and said, \'Lord, if it is You, command me to come to You on the water.\' So He said, \'Come.\' And when Peter had come down out of the boat, he walked on the water to go to Jesus."',
    reference: 'Matthew 14:28–29',
  },
  {
    id: 19,
    title: 'Healing the Syrophoenician Woman\'s Daughter',
    quote:
      '"Then Jesus answered and said to her, \'O woman, great is your faith! Let it be to you as you desire.\' And her daughter was healed from that very hour."',
    reference: 'Matthew 15:28',
  },
  {
    id: 20,
    title: 'Healing a Deaf-Mute Man',
    quote:
      '"Then, looking up to heaven, He sighed, and said to him, \'Ephphatha,\' that is, \'Be opened.\' Immediately his ears were opened, and the impediment of his tongue was loosed, and he spoke plainly."',
    reference: 'Mark 7:34–35',
  },
  {
    id: 21,
    title: 'Multiplying the Loaves (Feeding Four Thousand)',
    quote:
      '"So they ate and were filled, and they took up seven large baskets full of the fragments that were left. Now those who ate were four thousand men, besides women and children."',
    reference: 'Matthew 15:37–38',
  },
  {
    id: 22,
    title: 'Opening the Eyes of the Blind Man of Bethsaida',
    quote:
      '"Then He put His hands on his eyes again and made him look up. And he was restored and saw everyone clearly."',
    reference: 'Mark 8:25',
  },
  {
    id: 23,
    title: 'Healing the Boy with an Unclean Spirit',
    quote:
      '"Jesus said to him, \'If you can believe, all things are possible to him who believes.\' Immediately the father of the child cried out and said with tears, \'Lord, I believe; help my unbelief!\'"',
    reference: 'Mark 9:23–24',
  },
  {
    id: 24,
    title: 'The Coin in the Fish\'s Mouth',
    quote:
      '"Nevertheless, lest we offend them, go to the sea, cast in a hook, and take the fish that comes up first. And when you have opened its mouth, you will find a piece of money; take that and give it to them for Me and you."',
    reference: 'Matthew 17:27',
  },
  {
    id: 25,
    title: 'Healing the Man Born Blind',
    quote:
      '"He answered and said, \'Whether He is a sinner or not I do not know. One thing I know: that though I was blind, now I see.\'"',
    reference: 'John 9:25',
  },
  {
    id: 26,
    title: 'Healing the Crippled Woman',
    quote:
      '"And He laid His hands on her, and immediately she was made straight, and glorified God."',
    reference: 'Luke 13:13',
  },
  {
    id: 27,
    title: 'Healing the Man with Dropsy on the Sabbath',
    quote:
      '"And He took him and healed him, and let him go."',
    reference: 'Luke 14:4',
  },
  {
    id: 28,
    title: 'Cleansing Ten Lepers',
    quote:
      '"And one of them, when he saw that he was healed, returned, and with a loud voice glorified God, and fell down on his face at His feet, giving Him thanks."',
    reference: 'Luke 17:15–16',
  },
  {
    id: 29,
    title: 'The Resurrection of Lazarus',
    quote:
      '"Jesus said to her, \'I am the resurrection and the life. He who believes in Me, though he may die, he shall live. And whoever lives and believes in Me shall never die.\'"',
    reference: 'John 11:25–26',
  },
  {
    id: 30,
    title: 'Healing Blind Bartimaeus',
    quote:
      '"And Jesus said to him, \'Go your way; your faith has made you well.\' And immediately he received his sight and followed Jesus on the road."',
    reference: 'Mark 10:52',
  },
  {
    id: 31,
    title: 'Cursing the Fig Tree',
    quote:
      '"Now in the morning, as He returned to the city, He was hungry. And seeing a fig tree by the road, He came to it and found nothing on it but leaves, and said to it, \'Let no fruit grow on you ever again.\' Immediately the fig tree withered away."',
    reference: 'Matthew 21:18–19',
  },
  {
    id: 32,
    title: 'Healing Malchus\'s Ear',
    quote:
      '"And He touched his ear and healed him."',
    reference: 'Luke 22:51',
  },
  {
    id: 33,
    title: 'The Transfiguration',
    quote:
      '"He was transfigured before them. His face shone like the sun, and His clothes became as white as the light."',
    reference: 'Matthew 17:2',
  },
  {
    id: 34,
    title: 'Raising of the Widow\'s Son (as confirmation of Messiahship)',
    quote:
      '"And fear came upon all, and they glorified God, saying, \'A great prophet has risen up among us\'; and, \'God has visited His people.\'"',
    reference: 'Luke 7:16',
  },
  {
    id: 35,
    title: 'The Holy Resurrection',
    quote:
      '"He is not here, but is risen! Remember how He spoke to you when He was still in Galilee, saying, \'The Son of Man must be delivered into the hands of sinful men, and be crucified, and the third day rise again.\'"',
    reference: 'Luke 24:6–7',
  },
  {
    id: 36,
    title: 'The Miraculous Catch of Fish (Second)',
    quote:
      '"But when the morning had now come, Jesus stood on the shore; yet the disciples did not know that it was Jesus. Then Jesus said to them, \'Cast the net on the right side of the boat, and you will find some.\' So they cast, and now they were not able to draw it in because of the multitude of fish."',
    reference: 'John 21:4–6',
  },
  {
    id: 37,
    title: 'The Ascension into Heaven',
    quote:
      '"Now when He had spoken these things, while they watched, He was taken up, and a cloud received Him out of their sight."',
    reference: 'Acts 1:9',
  },
];

export default function Miracles() {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-white flex flex-col"
    >
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <span className="text-3xl text-[#E3C28E] select-none">✦</span>
          <h1 className="font-serif text-3xl md:text-4xl text-gray-800 mt-4 mb-2">
            {t('miracles.title')}
          </h1>
          <p className="font-serif text-[#E3C28E] text-sm tracking-widest uppercase">
            {t('miracles.subtitle')}
          </p>
          <div className="w-24 h-px bg-[#E3C28E]/40 mx-auto mt-6" />
          <p className="mt-4 text-gray-400 text-xs font-serif italic">
            All Scripture quotations from the Orthodox Study Bible (OSB)
          </p>
        </motion.div>

        {/* Miracles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miracles.map((miracle, index) => (
            <motion.div
              key={miracle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="bg-white border border-[#E3C28E]/25 rounded-lg p-6 hover:border-[#E3C28E]/60 hover:shadow-sm transition-all duration-300"
            >
              {/* Miracle number */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#E3C28E]/50 text-xs font-serif tracking-widest uppercase">
                  Miracle {miracle.id}
                </span>
                <span className="text-[#E3C28E]/30 text-sm select-none">✦</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-base text-gray-800 mb-4 leading-snug">
                {miracle.title}
              </h3>

              {/* Quote */}
              <blockquote className="font-serif text-sm text-[#E3C28E] italic leading-relaxed mb-3 border-l-2 border-[#E3C28E]/30 pl-3">
                {miracle.quote}
              </blockquote>

              {/* Reference */}
              <p className="text-xs text-gray-400 font-serif tracking-wide text-right">
                — {miracle.reference}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
