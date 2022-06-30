import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Samuel Oechsler</title>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fab102" />
      <meta name="msapplication-TileColor" content="#fab102" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <div className="mx-auto max-w-xl px-12">
      <section className="py-12 flex flex-col">
        <h1 className="text-3xl font-extrabold">Hi there&nbsp;👋, I am</h1>
        <div className="flex flex-row items-center text-5xl font-extrabold">
          <figure className="w-12 h-auto -ml-2">
            <Image
              className="object-contain"
              src="/sam-memoji.png"
              alt="Memoji of Sam"
              width={64}
              height={64}
              layout="responsive"
            />
          </figure>
          <h1>Sam</h1>
        </div>
        <p className="mt-12">
          I&apos;m a backend developer at{" "}
          <a
            className="mt-4 text-gray-500 hover:text-gray-700"
            href="https://becklyn.com"
            target={"_blank"}
            referrerPolicy={"no-referrer"}
            rel="noreferrer"
          >
            Becklyn Studios
          </a>{" "}
          in Ludwigsburg.
        </p>
        <p className="mt-4">
          In my spare time i like to 👨‍💻&nbsp;code and 🕹&nbsp;play games
          <span className="sm:block"> &minus;&nbsp;who doesn&apos;t?</span>
        </p>
        <p className="mt-4">
          If you want to see how it&apos;s made or just something that has a
          little more spice to it than my website do not hesitate:
        </p>
        <a
          className="mt-4 text-gray-500 hover:text-gray-700"
          href="https://github.com/oechsler"
          target={"_blank"}
          referrerPolicy={"no-referrer"}
          rel="noreferrer"
        >
          Visit me on GitHub &rarr;
        </a>
        <p className="p-4 rounded-md border border-orange-400 mt-12 bg-orange-100">
          <strong>🚧&nbsp;Important:</strong> This page is by no means feature
          complete and I am still working on new ideas to put on here.
          &minus;&nbsp;However, my time is quite scarce&nbsp;😔
        </p>
      </section>
      <hr className="border-1 border-gray-200" />
      <section className="py-12">
        <h1 className="text-3xl font-extrabold">Imprint</h1>
        <h2 className="text-md text-gray-500">pls don&apos;t sue me!</h2>
        <p className="mt-12">According to §5 TMG:</p>
        <p className="mt-4">Samuel Oechsler</p>
        <p>Beutstraße 3</p>
        <p>75180 Pforzheim</p>
        <p className="mt-12 text-xs text-gray-500">
          Also this page does not use 🍪 cookies!
          <br />
          &minus; How generous of mine.
        </p>
      </section>
      <hr className="border-1 border-gray-200" />
      <footer className="py-12">
        <p className="text-center text-xs text-gray-500">
          Made with &hearts; in Pforzheim.
        </p>
        <p className="mt-2 text-center text-xs text-gray-500">
          &copy; 2022 Samuel Oechsler
        </p>
      </footer>
    </div>
  </>
);

export default Home;
