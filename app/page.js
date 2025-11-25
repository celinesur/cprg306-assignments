import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Go to Week 2</Link> →{" "}
        <Link href="/week-3">Go to Week 3</Link> →{" "}
        <Link href="/week-4">Go to week 4</Link> →{" "}
        <Link href="/week-5">Go to week 5</Link> →{" "}
        <Link href="/week-6">Go to week 6</Link> →{" "}
        <Link href="/week-7">Go to week 7</Link> →{" "}
        <Link href="/week-8">Go to week 8</Link> →{" "}
        <Link href="/week-9">Go to week 9</Link> →{" "}
        <Link href="/week-10">Go to week 10</Link> →
      </p>
    </div>
  );
}