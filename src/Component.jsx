export default function Component({name, label, value}) {
    return (
        <div>
            <h1>{name} has completed {label} in {value}</h1>
        </div>
    )
}