import { menu } from "../../pages/api/types";
import { Text } from "../Text";


export function Menu() {
  return (
    <menu className="mob:hidden pc:flex justify-center gap-3 uppercase">
      <ul className="flex-1 inline-flex gap-8">
        {menu.map((item) => {
          return (
            <li key={item.name}>
              <a href={item.link}>
                <Text className="itemMenu text-xl">{item.name}</Text>
              </a>
            </li>
          );
        })}
      </ul>
    </menu>
  );
}