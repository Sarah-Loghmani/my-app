import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";

const App = () => {
  const data = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/51uKrw0He0L.jpg",
      text: "Bill Bryson's first travel book, The Lost Continent, was unanimously acclaimed as one of the funniest books in years. In Neither Here nor There he brings his unique brand of humour to bear on Europe as he shoulders his backpack, keeps a tight hold on his wallet, and journeys from Hammerfest, the northernmost town on the continent, to Istanbul on the cusp of Asia. Fluent in, oh, at least one language, he retraces his travels as a student twenty years before.",
      title: "Neither Here, Nor There: Travels in Europe",
      author: "Bill Bryson",
    },
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/51qM04XJBdL.jpg",
      text: "Local estate agent Tash isn’t convinced about joining the new book club at Berecombe’s beautiful new bookshop and café. Dragged there by her friend Emma, she knows she needs a night out. Her boyfriend Adrian is wonderful, and adores her, but has become a bit clingy of late. So when she is introduced to new local farmer Kit, with his scruffy beard and low-key look, its’s a breath of fresh air to chat to someone so un-Adrian. Maybe this book club idea could be fun after all!",
      title: "The Little Book Café: Tash’s Story",
      author: "Georgia Hill",
    },
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/51ElPPezjQL.jpg",
      text: "Tilly Pages is a bookwanderer; she can travel inside books, and even talk to the characters she meets there. But Tilly’s powers are put to the test when fairytales start leaking book magic and causing havoc . . .",
      title: "Pages & Co.: Tilly and the Lost Fairy Tales",
      author: "Anna James ",
    },
  ];
  return (
    <div>
      {/* react.fragment */}

      <Card data={data} />
    </div>
  );
};

export default App;
