import './_card.scss'

export default function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    );
}