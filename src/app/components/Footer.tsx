export default function Footer() {
    return(
        <footer className="border-t border-neutral-800">
            <div className="mx-auto max-w-6x1 px-4 py-6 text-sm text-neutral-400">
                <div className="flex flex-col items-start justify-between gap-3 md:flex-row">
                    <span>© {new Date().getFullYear()} Pulse.</span>
                    <div className="flex gap-4">
                        <a className="hover:text-white" href="#">Privacy Policy</a>
                        <a className="hover:text-white" href="#">Terms of Service</a>
                        <a className="hover:text-white" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}