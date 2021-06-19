type Props = {
  name: string;
  description: string;
};

const Spiritualist: React.FC<Props> = ({ name, description }: Props) => (
  <article className="p-4 rounded-none max-w-sm shadow mb-8 border-2  border-solid border-black">
    <header>
      <h2 className="font-black uppercase text-2xl text-center">{name}</h2>
      <div className="font-bold text-center bg-black text-white">
        Telf: 999 999 999 - 999 999 999
      </div>
    </header>
    <p className="text-sm text-justify mb-1">{description}</p>
    <footer className="font-bold text-sm text-center">
      <p className="">Todos os dias das 8h às 22h</p>
      <p className="">Rua Falsa, 11 - 1º Esq., 1234-567, Terra</p>
    </footer>
  </article>
);

export default Spiritualist;
