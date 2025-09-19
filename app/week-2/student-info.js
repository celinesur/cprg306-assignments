import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h1>Name: Celine Surjanto</h1>
      <p>GitHub: {" "} 
        <Link href="https://github.com/celinesur/cprg306-assignments" target="_blank">
          celinesur/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}

