import type { Cat } from "./data";

export function CatCard({ cat }: { cat: Cat }) {
    const cardStyle = {
        display: "flex",
        flexDirection: "column" as const,
        gap: 6,
        padding: "12px",
        border: "1px solid #e6e6e6",
        borderRadius: 8,
        background: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        listStyle: "none",
        maxWidth: 260,
    };

    const nameStyle = {
        fontWeight: 700,
        fontSize: "1rem",
        color: "#222",
    };

    const metaStyle = {
        fontSize: "0.9rem",
        color: "#666",
    };

    return (
        <li style={cardStyle}>
            <span style={nameStyle}>{cat.name}</span>
            <img src={cat.imageUrl} alt={cat.name} style={{ width: "100%", borderRadius: 6, objectFit: "cover", maxHeight: 160 }} />
            <span style={metaStyle}>Age: {cat.age}</span>
            <span style={metaStyle}>Breed: {cat.breed}</span>
        </li>
    );
}