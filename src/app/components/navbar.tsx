import { NavBarItems } from "@/utils/constants";

export function NavBar() {
  return (
    <div className="mx-[10vw] font-[family-name:var(--font-geist-sans)] flex justify-between py-4 z-10 relative">
      <h1 className="text-2xl font-bold hover:cursor-pointer">Logo.</h1>
      <div className="flex gap-4 text-sm font-bold tracking-wide">
        {NavBarItems.map((item, index) => (
          <div
            key={index}
            className="hover:cursor-pointer px-4 py-2 hover:bg-gray-300 rounded-md"
          >
            <ul>{item.label}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}
