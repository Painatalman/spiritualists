import HeartIcon from '~/components/Icon/Heart';

type Props = {
  titleTop: string;
  titleBottomLeft: string;
  titleBottomRight: string;
  name: string;
  description: string;
};

const Spiritualist: React.FC<Props> = ({
  titleTop,
  titleBottomLeft,
  titleBottomRight,
  name,
  description,
}: Props) => (
  <article className="p-0 rounded-none max-w-sm shadow mb-8 border-2  border-solid border-black">
    <div className="flex">
      <header className="w-3/5 font-black font-serif text-center">
        <div className="leading-4 text-sm">Grande Mestre {titleTop}</div>
        <div className="text-2xl leading-5 uppercase">{name}</div>
        <div className="leading-4 text-sm">
          {titleBottomLeft} e {titleBottomRight}
        </div>
      </header>
      <div className="w-2/5 flex items-center justify-center">
        <div className="mx-1">
          <HeartIcon />
        </div>
        <div className="mx-1">
          <HeartIcon />
        </div>
      </div>
    </div>
    <div className="font-bold px-0.5">Telem. 999 999 999 / 999 999 999</div>
    <p className="text-xs text-justify mb-1 px-1">{description}</p>
    <div className="flex items-end justify-around px-0.5">
      <div className="w-1/2 text-center text-xs">
        Facilidade de pagamento <br />
        Se quer melhorar a sua vida sexual
      </div>
      <div className="w-1/2 text-lg text-right font-semibold uppercase">
        Bons Resultados
      </div>
    </div>
    <footer className="font-bold text-sm text-center bg-black text-white">
      Rua Falsa, 11 - 1º Esq., 1234-567, Terra
    </footer>
  </article>
);

export default Spiritualist;
