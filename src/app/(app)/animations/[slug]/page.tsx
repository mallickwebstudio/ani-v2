import PreviewTab from "@/components/layouts/sidebar-inset/preview-tab";
import { allAnimations } from "@/lib/database";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allAnimations
    .filter((item) => typeof item.slug === "string") // Ensure valid `slug`
    .map(({ slug }) => ({ slug }));
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const data = allAnimations.find(item => item.slug === slug);

  if (!data) {
    notFound()
    return
  }

  return (
    <main>
      <h1 className="p-4 text-center border bg-accent/70 rounded-md capitalize h2 md:h1">
        {slug} animation
      </h1>
      <div className="mt-4 grid sm:grid-cols-2 min-[1800px]:grid-cols-3 min-[2200px]:grid-cols-4 gap-4">
        {data.animations.map((item) => (
          <div key={item.title + "Preview"}>
            <h2 className="text-xl" id={item.slug}>{item.title}</h2>
            <PreviewTab data={item} />
          </div>
        ))}
      </div>
    </main>
  )
}
