import Link from "next/link";

export default function Head() {
  return (
    <>
      <title>Google Clone</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Google clone created by Next js 13" />
      <Link rel="icon" href="/favicon.svg" />
    </>
  );
}
