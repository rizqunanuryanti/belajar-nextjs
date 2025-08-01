export default async function LaporanDetails({
    params,
}: {
   params: Promise<{laporanId: string}>;
}) {
    const laporanId = (await params).laporanId;
    return <h1> Detail about laporan {laporanId}</h1>
}
