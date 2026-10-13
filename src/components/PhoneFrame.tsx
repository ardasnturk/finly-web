/** A screenshot inside a simple iPhone-shaped frame. */
export function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative rounded-[3rem] bg-gray-950 p-2.5 shadow-2xl ring-1 ring-black/10 dark:ring-white/10 ${className}`}>
      <img src={src} alt={alt} loading="lazy" width={1206} height={2622}
        className="block aspect-[1206/2622] w-full rounded-[2.4rem] bg-gray-100 object-cover dark:bg-gray-900" />
    </div>
  );
}
