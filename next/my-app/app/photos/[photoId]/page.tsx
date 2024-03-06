export default function PhotoIdPage({
  params,
}: {
  params: { photoId: string };
}) {
  return <>PhotoIdPage {params.photoId}</>;
}
