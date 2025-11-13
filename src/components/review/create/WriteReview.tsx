"use client";

export function WriteReview({ slug }: { slug: string }) {
    return (
        <div className="write-review">
            <h3> Review this product</h3>
            <p>
                Share your thoughts with other customers
            </p>
            <style jsx>{`
                .summary h3 {
                    font-size: 1.65rem;
                    font-weight: 700;
                    color: #000;
                }
             `}</style>
        </div>
    );
}
