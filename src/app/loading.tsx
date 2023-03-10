import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image
        src="loading.svg"
        alt="loading..."
        className="h-96"
        width={200}
        height={200}
      />
    </div>
  );
}
