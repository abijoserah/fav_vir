import { CatCard } from "./CatCard";
import type { Cat } from "./data";

export function CatGrid({ cats }: { cats: Cat[] }) {


    return (
        <>
            <ul>
                {cats.map((cat) => (
                    <li
                        key={cat.id}
                        style={{
                            listStyle: "none",
                            display: "inline-block",
                            width: "calc(33.333% - 16px)",
                            margin: 8,
                            verticalAlign: "top",
                        }}
                    >
                        <CatCard cat={cat} />
                    </li>
                ))}
            </ul>
        </>
    );
}
