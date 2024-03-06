import Modal from '@/components/Modal';
import Photo from '@/components/Photo';

// modal
export default function PhotoInterceptor({
  params,
}: {
  params: { photoId: string };
}) {
  return (
    <>
      <Modal className='bg-white'>
        <Photo photoId={Number(params.photoId)} />
      </Modal>
    </>
  );
}
