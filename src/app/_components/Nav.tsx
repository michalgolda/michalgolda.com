export default function Nav() {
  return (
    <nav>
      <ul className="flex flex-row gap-x-8 list-none">
        <li>
          <a
            className="font-medium hover:text-secondary duration-500 transition-all text-secondary decoration-none"
            href="#"
          >
            Start
            <span className="w-2/3 bg-primary h-0.5 block"></span>
          </a>
        </li>
        <li>
          <a
            className="font-medium hover:text-secondary duration-500 transition-all text-body decoration-none"
            href="#"
          >
            O mnie
          </a>
        </li>
        <li>
          <a
            className="font-medium hover:text-secondary duration-500 transition-all text-body decoration-none"
            href="#"
          >
            Usługi
          </a>
        </li>
        <li>
          <a
            className="font-medium hover:text-secondary duration-500 transition-all text-body decoration-none"
            href="#"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className="font-medium hover:text-secondary duration-500 transition-all text-body decoration-none"
            href="#"
          >
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}