type SaludoProps = {
  name: string;
};

export function Saludo({ name }: SaludoProps) {
  return <h1>Bienvenido, {name}</h1>;
}