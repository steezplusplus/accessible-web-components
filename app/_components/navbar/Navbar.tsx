import { NavLink } from './navLink/NavLink';

export function Navbar() {
  return (
    <ul className="flex h-full items-center border-b border-solid bg-white px-8">
      <li>
        <NavLink href="/" name="Steez++" />
      </li>
      <li className="ml-auto">
        <ul className="flex items-center gap-x-6">
          <li>
            <NavLink href="/about" name="About" />
          </li>
          <li>
            <NavLink href="/blog" name="Blog" />
          </li>
        </ul>
      </li>
    </ul>
  );
}