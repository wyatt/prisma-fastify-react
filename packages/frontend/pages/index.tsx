import { IS_DEV } from "@project/shared";
import { GetStaticProps } from "next";
import { apiBase } from "../lib/consts";

type HomeProps = { time: number | bigint };

export default function Home(props: HomeProps) {
  const message = IS_DEV
    ? "Yes! We have hot reloading and more!"
    : "No, this is a production app";
  return (
    <div className="text-center container mx-auto mt-10">
      <h1 className="font-bold text-3xl text-gray-700">Hello, Tailwind!</h1>
      <br />
      <h2>
        Is development?{" "}
        <code className="px-2 py-1 bg-gray-50 text-gray-500 text-sm rounded-md">
          {message}
        </code>
      </h2>
      <br />
      <h3>Next.js Static Prop from backend: {props.time}</h3>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { time } = await fetch(apiBase)
    .then((res) => res.json())
    .catch(() => ({ time: Date.now() }));

  return {
    props: { time },
  };
};
