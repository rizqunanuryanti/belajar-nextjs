export default async function BlogDetails({
    params,
}: {
   params: Promise<{blogId: string}>;
}) {
    const blogId = (await params).blogId;
    return <h1> Detail about product</h1>
}
