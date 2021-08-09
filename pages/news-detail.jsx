import Layout from "../src/Layout/Layout";
import NewsDetailComponent from "../src/NewsDetail";

// data: {date, news_type, title, images, description}
const news_data = {
  id: "news_sadyr_djaparov",
// https://www.kite.com/python/answers/how-to-write-a-datetime-object-to-json-in-python
  date: "2020-03-27T19:46:21.343959",
  title: "Президент Садыр Жапаров подумал",
  description: "Премьер-министр Кыргызской Республики Улукбек Марипов принял участие в коллегии Министерства внутренних дел Кыргызской Республики по подведению итогов деятельности за 2020 год и обсуждению приоритетных задач на текущий год.\n" +
    "\n" +
    "Глава Правительства поблагодарил сотрудников Министерства внутренних дел за работу, проведённую в рамках недопущения распространения коронавирусной инфекции и особо отметил, что благодаря усилиям сотрудников правоохранительных органов совместно с народными дружинами удалось обеспечить правопорядок после событий 5-6 октября 2020 года.\n" +
    "\n" +
    "В ходе выступления Улукбек Марипов особо остановился на вопросе недопущения семейного насилия.\n" +
    "\n" +
    "«Любые факты насилия – это преступление против фундаментальных прав человека. Они недопустимы в цивилизованном обществе. Каждый факт насилия, в том числе семейного, не должен оставаться без внимания правоохранительных органов. Семейное насилие не должно восприниматься как сугубо частное дело одной семьи. Такие факты не должны замалчиваться, а общество должно выработать повышенный уровень нетерпимости к подобным проявлениям», - подчеркнул он и добавил, что существует необходимость пересмотра действующего законодательства по данному вопросу.\n" +
    "\n" +
    "Глава Правительства отметил деятельность Министерства внутренних дел в рамках цифровизации, в частности дал положительную оценку созданию Единого реестра проступков и правонарушений, а также работе систем «Тундук» и «Безопасный город».\n" +
    "\n" +
    "Премьер-министр напомнил, что в 2020 году решением Правительства Кыргызской Республики заработная плата сотрудников правоохранительных органов была повышена на 40% и добавил, что социальная поддержка, в том числе строительство многоквартирных домов для милиционеров, а также модернизация областных зданий органов внутренних дел будет продолжена.\n" +
    "\n" +
    "В завершение Премьер-министр Улукбек Марипов подчеркнул, что сотрудники органов внутренних дел должны ежедневно работать над повышением уровня доверия к милиции со стороны населения путем эффективной и честной работы по обеспечении их безопасности и правопорядка.",
  news_type: "Преступления",
  images: [
    {id: 'news_img-1', image: '/images/news_img.jpeg'},
    {id: 'news_img-2', image: '/images/news_img.jpeg'},
    {id: 'news_img-4', image: '/images/news_img.jpeg'},
    {id: 'news_img-5', image: '/images/news_img.jpeg'},
  ]
}

export default function NewsDetail() {

  return (
    <Layout>
      <NewsDetailComponent {...news_data}/>
    </Layout>
  )
}