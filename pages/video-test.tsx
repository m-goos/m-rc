import Layout from '@/components/Layout';

export default function VideoTest() {
  return (
    <Layout>
      Test video page - the video URL will be broken soon.
      <video controls width="250">
        <source
          src="https://video.m-rc.nl/assets/flower.webm"
          type="video/webm"
        />
      </video>
    </Layout>
  );
}
