'use client';
export default function Page() {
    return (
        <div>
            <button
                onClick={() => {
                    throw new Error('error');
                }}
            >
                error
            </button>
        </div>
    );
}
