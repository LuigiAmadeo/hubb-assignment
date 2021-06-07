import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  async function fetchData() {
    const result = await axios.get(
      "https://hubb-server.herokuapp.com/test-product"
    );

    setProducts(result.data);
  }

  async function fetchData2() {
    const result = await axios.get(
      "https://hubb-server.herokuapp.com/test-link"
    );

    console.log;

    setLinks(result.data);
  }

  return (
    <div>
      <Head>
        <title>Hubb Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-yellow-400 container mx-auto w-screen h-screen">
        {/* Start your code here */}
        <nav className="flex">
          <div className=" mt-10 justify-center">
            <img className="w-36 h-36" src="/deo deo deo.jpeg" alt=""></img>
          </div>
        </nav>

        <div>
          <img className="logo px-10" src="/iglogo.png" alt=""></img>
          <p className="text-lg text-black font-semibold">@hubb.link</p>
        </div>

        <div className="flex flex-wrap max-w-screen-sm">
          {products.map((data) => (
            <div className="card">
              <img src={data.product_img} />
              <p>{data.product_title}</p>
              <p>Rp. {data.product_price}</p>
              <br></br>
              <a href={data.product_url}>Lihat Produk</a>
            </div>
          ))}
        </div>

        {links.map((data) => (
          <div className="w-full py-3 mb-2 rounded-lg text-center bg-white">
            <a href={data.product_url}>{data.link_title}</a>
          </div>
        ))}
      </main>
    </div>
  );
}
