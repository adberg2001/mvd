import Layout from "../../src/Layout/Layout";
import cls from "./GovSymbols.module.scss";
import Image from "next/image";

export default function GovSymbols() {

  return (
    <Layout>
      <div className={`${cls.GovSymbols} container`}>

        <h1 className='section__heading'>Государственная символика</h1>

        <h2 className='mt-5 mb-4'>Герб Кыргызской Республики</h2>
        <p> Утвержден Жогорку Кенешом 14-января 1994 года.
          Авторы: Асейин Абдраев - директор детской художественной школы г.Нарын,
          Садырбек Дубанаев - начальник Нарынского областного УВД.</p>
        <div className={`${cls.GovSymbols__image_wrapper} col-md-3 col-12`}
        >
          <Image src={'/images/gerb.jpeg'} layout="fill" className={cls.image}/>
        </div>
        <p>В государственном символе Кыргызстана - гербе отображаются: расправляющий крылья белый сокол, символизирующий
          свободу страны, стремление к лучшему, щедрость, зоркость и высоту помыслов кыргызстанцев, населяющих страну
          гор. Водная гладь жемчужины Кыргызстана - озера Иссык-Куль - символ красоты природы, источник жизни и энергии.
          Вершины гор, освещённые солнцем, похожи на белый колпак кыргызского народа. Хлопок и пшеница, окаймляющие
          герб, говорят о разнообразии культур Кыргызстана и в то же время об их единстве, объединяющем всё их
          разнообразие в единое целое - народ Кыргызстана.</p>

        <h2 className='mt-5 mb-4'>Флаг Кыргызской Республики</h2>

        <div className={`${cls.GovSymbols__image_wrapper} col-md-3 col-12`}
        >
          <Image src={'/images/flag.png'} layout="fill" className={cls.image}/>
        </div>
        <p>Государственный флаг Республики Кыргызстан представляет собой полотнище красного цвета, в центре которого
          размещен круглый солнечный диск с сорока равномерно расходящимися лучами золотистого цвета. Внутри солнечного
          диска красным цветом изображен тундук кыргызской юрты. Ширина флага составляет три пятых его длины. Диаметр
          лучистого диска составляет три пятых ширины флага. Соотношение диаметров солнечного и лучистых дисков - три к
          пяти. Диаметр тундука составляет половину диаметра лучистого диска.
          Красная одноцветность флага символизирует доблесть и смелость. Животворящее лучезарное золотое Солнце,
          купающееся в своих лучах, есть символ вечности жизни, олицетворяет покой и богатство, стремление к светлому, к
          познанию. 40 лучей, объединённых в круг, означают объединение 40 древних племён в единый Кыргызстан.
          Тундук - символ отчего дома, в более широком понимании и мира как вселенной. Тундук олицетворяет не только
          прочность дома, уклада жизни, вековые традиции народа, но и более глубокое философское единство земли и неба.
          Тундук символизирует единство народов, проживающих в стране.
          Красный цвет флага был цветом флага великодушного Манаса.</p>

        <h2 className='mt-5 mb-4'>Гимн Кыргызской Республики</h2>

        <h3 className='mb-4'>Гимн утвержден постановлением Жогорку Кенеша Кыргызской Республики 18 декабря 1992 года</h3>

        <p><b>Слова:</b>{` Ж.Садыкова, Ш.Кулуева.`}</p>
        <p><b>Музыка:</b>{` Н.Давлесова, К.Молдобасанова.`}</p>
        <p><b>Перевод с киргизского</b>{` К.Акматова и М.Рудова.`}</p>

        <p>
          {`
              Высокие горы, долины, поля - 
    Родная, заветная наша земля. 
    Отцы наши жили среди Ала-Тоо, 
    Всегда свою родину свято храня.

    Припев: 
    Вперед, кыргызский народ, 
    Путем свободы вперед! 
    Взрастай, народ, расцветай, 
    Свою судьбу созидай!

    Извечно народ наш для дружбы открыт, 
    Единство и дружбу он в сердце хранит. 
    Земля Кыргызстана, родная страна 
    Лучами согласия озарена. 
    Припев.

    Мечты и надежды отцов сбылись. 
    И знамя свободы возносится ввысь. 
    Наследье отцов наших передадим, 
    На благо народа потомкам своим. 
    Припев.
          `}
        </p>
      </div>
    </Layout>
  )
}
