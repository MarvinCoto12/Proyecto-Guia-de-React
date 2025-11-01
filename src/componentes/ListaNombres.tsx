type ListaNombresProps = {
  nombres: string[];
};

export function ListaNombres({ nombres }: ListaNombresProps) {
  return (
    <ul>
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </ul>
  );
}
