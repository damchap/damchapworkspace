import {getServerSideSitemap, ISitemapField} from "next-sitemap";
import {GetServerSideProps} from "next";

export async function getServerSideProps (ctx: any): Promise<Response> {
  const response = await fetch('https://api.spacexdata.com/v4/capsules');
  const capsules: any[] = await response.json();

  console.log(capsules);

  const fields: ISitemapField[] = [];


  return getServerSideSitemap(fields);
}

export default function Site()  {}