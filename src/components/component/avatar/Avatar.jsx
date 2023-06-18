import './_avatar.scss'

export default function Avatar({text}) {
    let value = text.split(" ").map(v => v[0]);

    return (
        <>
            {value !== null &&
                <div className="avatar">
                    <p>{value}</p>
                </div>
            }
        </>
    );
}