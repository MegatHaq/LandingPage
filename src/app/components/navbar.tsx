import { NavBarItems } from "@/utils/constants";

export function NavBar() {
  return (
    <div className="mx-[10vw] font-[family-name:var(--font-geist-sans)] flex justify-between py-4 z-10 relative">
      <h1 className="text-2xl font-bold hover:cursor-pointer">Logo.</h1>
      <div className="flex gap-4 text-sm font-bold tracking-wide">
        {NavBarItems.map((item, index) => (
          <ul key={index} className="hover:cursor-pointer">
            {item.label}
          </ul>
        ))}
      </div>
    </div>
  );
}
