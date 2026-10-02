
interface CounterProps {
    count?: number
    label?: string
}

const Counter = ({ count, label }: CounterProps) => {
    return (
        <div className="text-center mt-8 not-last:border-r border-subtle px-4">
            <p className="text-3xl font-semibold">{count}</p>
            <p className="text-sm text-subtle capitalize mt-2">{label}</p>
        </div>
    )
}

export default Counter