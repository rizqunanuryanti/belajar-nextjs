export default async function SiswaDetails({
    params,
}: {
   params: Promise<{siswaId: string}>;
}) {
    const siswaId = (await params).siswaId;
    return <h1> Detail about Id siswa {siswaId}</h1>
}