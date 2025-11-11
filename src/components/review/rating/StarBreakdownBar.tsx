interface Props {
    stars: number;
    percent: number;
    count: number;
}

export function StarBreakdownBar({ stars, percent, count }: Props) {
    return (
        <div className="star-bar">
            <span className="label">{stars} star</span>
            <div className="bar">
                <div className="fill" style={{ width: `${percent}%` }}></div>
            </div>
            <span className="percent">{percent}%</span>
        </div>
    );
}
