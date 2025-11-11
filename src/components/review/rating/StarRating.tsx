export function StarRating({ value }: { value: number }) {
    const fullStars = Math.floor(value);
    const halfStar = value % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="stars">
            {"★".repeat(fullStars)}
            {halfStar && "☆"}
            {"☆".repeat(emptyStars)}
        </div>
    );
}
