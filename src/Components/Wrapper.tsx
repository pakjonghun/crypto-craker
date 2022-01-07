import { FC } from "react";
import Title from "./Title";

const Wrapper: FC<{ title: string }> = ({ children, title }) => {
  return (
    <section className=" flex justify-center dark:bg-stone-400 bg-stone-300 w-screen h-screen">
      <Title title={title} />
      <article className="flex flex-col h-3/4 p-10 overflow-y-auto items-center mt-10 w-full max-w-lg bg-stone-500 dark:bg-stone-50 rounded-md">
        <header>
          <h1 className=" select-none mb-10 text-3xl font-bold uppercase">
            {title}
          </h1>
        </header>
        <main>{children}</main>
      </article>
    </section>
  );
};

export default Wrapper;
