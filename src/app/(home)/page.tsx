export default function HomePage() {
  return (
    <div className="fixed inset-0">
      <video
        className="h-full w-full object-cover"
        src="/static/video/typing-on-computer.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
