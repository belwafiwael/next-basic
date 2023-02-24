import Link from "next/link";
import { useRouter } from "next/router";
import styleHeader from "./header.module.css";
export const Header = () => {
  const router = useRouter();
  return (
    <div className={styleHeader.header}>
      <Link href="/">
        <span
          className={
            router.pathname === "/" ? styleHeader.active : styleHeader.link
          }
        >
          Home
        </span>
      </Link>

      <Link href="/blog">
        <span
          className={
            router.pathname === "/blog" ? styleHeader.active : styleHeader.link
          }
        >
          Blog
        </span>
      </Link>
      <Link href="/profile">
        <span
          className={
            router.pathname === "/profile"
              ? styleHeader.active
              : styleHeader.link
          }
        >
          Profile
        </span>
      </Link>
      <Link href="/blog/items">
        <span
          className={
            router.pathname === "/blog/items"
              ? styleHeader.active
              : styleHeader.link
          }
        >
          Items
        </span>
      </Link>
      <Link href="/blog/categories">
        <span
          className={
            router.pathname === "/blog/categories"
              ? styleHeader.active
              : styleHeader.link
          }
        >
          Categories
        </span>
      </Link>
      <Link href="/departements">
        <span
          className={
            router.pathname === "/departements"
              ? styleHeader.active
              : styleHeader.link
          }
        >
          Départements
        </span>
      </Link>
    </div>
  );
};
