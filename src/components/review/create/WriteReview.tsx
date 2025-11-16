import Link from "next/link";
import style from "./WriteReview.module.css"

export function WriteReview({ slug }: { slug: string }) {
    return (
        <div className={style.writeReview}>
            <h3>Review this product</h3>
            <p>Share your thoughts with other customers</p>

            <Link href={`/products/${slug}/review`} className="review-button">
                Write a customer review
            </Link>
        </div>
    );
}
