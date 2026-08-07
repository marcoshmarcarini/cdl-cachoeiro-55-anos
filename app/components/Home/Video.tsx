import { Play } from "lucide-react";

export default function Video() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 mt-12">
      <iframe
        width="896"
        height="500"
        src="https://www.youtube.com/embed/8z2QChyL0DE?si=DFzjY8DFbQ30rImZ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="video-placeholder-container relative aspect-video w-full max-w-4xl rounded-2xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.01] hover:border-secondary-brand/60"
        data-aos="fade-up"
        data-aos-delay="300"
      ></iframe>
    </div>
  );
}
