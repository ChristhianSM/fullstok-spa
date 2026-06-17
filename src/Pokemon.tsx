type PokemonCardProps = {
  imageUrl: string;
  name: string;
  types: string[];
};

export function Pokemon({ imageUrl, name, types }: PokemonCardProps) {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>({types.join(", ")})</p>
    </div>
  );
}
