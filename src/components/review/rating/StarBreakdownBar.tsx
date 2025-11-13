"use client";
import { useRouter } from "next/navigation";

interface Props {
    slug: string;
    stars: number;
    percent: number;
    count: number;
}

export function StarBreakdownBar({ slug, stars, percent, count }: Props) {
    const router = useRouter();
    const disabled = count === 0;

    const handleClick = () => {
        if (disabled) return;
        router.push(`/product/${slug}/reviews?stars=${stars}`);
    };

    return (
        <button
            className={`star-bar ${disabled ? "disabled" : ""}`}
            onClick={handleClick}
            disabled={disabled}
        >
            <span className="label">{stars} star</span>
            <div className="bar">
                <div className="fill" style={{ width: `${percent}%` }}></div>
            </div>
            <span className="percent">{percent}%</span>

            <style jsx>{`
        .star-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
          padding: 0.25rem;
        }
        .star-bar:hover:not(.disabled) {
          background: #fafafa;
        }
        .disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
        .label {
          width: 3rem;
          text-align: right;
        }
        .bar {
          flex: 1;
          height: 10px;
          background: #eee;
          border-radius: 4px;
          overflow: hidden;
        }
        .fill {
          height: 100%;
          background: #f5a623;
          transition: width 0.3s ease;
        }
        .percent {
          width: 3rem;
          text-align: right;
          font-size: 0.85rem;
          color: #444;
        }
      `}</style>
        </button>
    );
}
