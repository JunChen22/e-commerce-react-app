"use client";

export function ReviewSummary({ slug }: { slug: string }) {
    return (
        <div className="summary">
            <h3> Customer reviews </h3>
            <p>
                Customers find this air fryer to be a high-quality appliance that's easier to use than traditional ovens,
                with simple controls and easy-to-read functions. Moreover, they appreciate its quick preheating and cooking times,
                and its large size that's perfect for 2 to 4 people. Additionally, the air fryer performs well, producing perfectly
                roasted vegetables and French fries, while being easy to clean and operate. Customers also praise its quiet operation.
            </p>
            <style jsx>{`
                
                .summary {
                    border: 1px solid #ddd;
                }
                
                .summary h3 {
                    font-size: 1.65rem;
                    font-weight: 700;
                    color: #000;
                }
             `}</style>
        </div>
    );
}
