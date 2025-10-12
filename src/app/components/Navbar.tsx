import Link from "next/link";

export default function Navbar() {
    return(
        <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-fuschia-500" />
                <span className="text-lg font-bold">Pulse</span>
                </Link>
                <nav className="hidden items-center gap-6 text-sm md:flex">
                    <a href="/#features" className="text-neutral-300 hover:text-white">Features</a>
                    <Link href="/dashboard" className="text-neutral-300 hover:text-white">Demo</Link>
                    <Link
                    href="/signup"
                    className="rounded-lg bg-fuchsia-500 px-3 py-2 font-semibold text-neutral-900 hover:bg-fuchsia-400 transition"
                    >
                    Sign up
                    </Link>
                </nav>
            </div>
        </header>
    );
};