export default async function BlogComment({
    params,

 }: {
    params: Promise<{blogId:string, commentId:string}>
 }) {
    const {blogId, commentId} = await params
    return (
        <h1>baju {commentId} for celana {blogId} </h1>
    )
 }