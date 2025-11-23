export default function SecuritySection() {
    return (
        <section className="relative overflow-hidden bg-gray-900 py-12 md:py-20">
            {/* Background illustration */}
            <div
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[100px]"
                aria-hidden="true"
            >
                <div className="h-[400px] w-[400px] rounded-full bg-blue-600"></div>
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-200 md:text-4xl">
                        Architecture that makes Compliance Teams smile
                    </h2>
                    <p className="mb-8 text-xl text-gray-400">
                        Most parsers require you to upload sensitive files to their cloud. We
                        bring the cloud to you.
                    </p>

                    <div className="grid gap-8 sm:grid-cols-3">
                        <div className="rounded-xl bg-gray-800/50 p-6 border border-gray-700/50">
                            <div className="mb-2 text-3xl font-bold text-blue-400">0 bytes</div>
                            <div className="text-sm font-medium text-gray-300">
                                Data Egress of PII
                            </div>
                        </div>
                        <div className="rounded-xl bg-gray-800/50 p-6 border border-gray-700/50">
                            <div className="mb-2 text-3xl font-bold text-blue-400">1 KB/hr</div>
                            <div className="text-sm font-medium text-gray-300">
                                Billing Egress (Metadata)
                            </div>
                        </div>
                        <div className="rounded-xl bg-gray-800/50 p-6 border border-gray-700/50">
                            <div className="mb-2 text-3xl font-bold text-blue-400">100%</div>
                            <div className="text-sm font-medium text-gray-300">
                                Compliance Scope Control
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
