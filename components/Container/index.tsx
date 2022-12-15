import Head from "next/head";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function Container({ title, children }: ContainerProps) {
  return (
    <>
      <Head>
        <title className="">{title}</title>
        <meta name="description" content="Roll for food is a website where you can randomly generate ingredients for your next meal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
