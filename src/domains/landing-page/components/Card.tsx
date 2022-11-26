import AbilitiesHeader from "./AbilitiesHeader";

interface IProps {
  header: string[];
  body: string;
  img: string;
}

const Card = ({ header, body, img }: IProps): JSX.Element => {
  return (
    <div className="px-2 py-8 flex flex-col items-center bg-white rounded-3xl drop-shadow-md">
      <div className="rounded-full bg-white w-24 h-24 flex justify-center border-4 border-black">
        <img src={img} width="70%" />
      </div>
      <AbilitiesHeader firstLine={header[0]} secondLine={header[1]} />
      <p className="text-center">{body}</p>
    </div>
  );
};

export default Card;