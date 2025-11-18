"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo({
  compact = false,
  className = "",
  alt = "Verakita",
}: {
  compact?: boolean;
  className?: string;
  alt?: string;
}) {
  const compactSize = 28; // sidebar collapsed
  const fullSize = 36; // default navbar / header

  if (compact) {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`}>
        <Image
          src="/logo.svg"
          alt={alt}
          width={compactSize}
          height={compactSize}
          className="rounded"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.svg"
        alt={alt}
        width={fullSize}
        height={fullSize}
        className="rounded"
      />
      <span className="font-bold text-lg md:text-xl text-white">Verakita</span>
    </Link>
  );
}
