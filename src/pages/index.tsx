import { GetServerSideProps } from "next";
import fetch from "node-fetch";

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const data = await fetch("https://backend.dev/users");
  const json = await data.json();
  return {
    props: {
      // @ts-ignore
      products: json.products,
    },
  };
};

type Product = {
  id: number;
  title: string;
};

type HomeProps = {
  products: Product[];
};

export default function Home(props: HomeProps) {
  return (
    <ol>
      {props.products.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ol>
  );
}
