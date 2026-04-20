import { ARTICLES_DATA } from '@/data/articles';
import AutomatedArticle from '@/components/AutomatedArticle';
import { notFound } from 'next/navigation';


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  
  if (!article) {
    console.error(`Slug "${slug}" tidak ditemukan di data artikel.`);
    return notFound();
  }

  return <AutomatedArticle data={article} />;
}