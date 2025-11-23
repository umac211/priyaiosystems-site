import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";
export const dynamic = "force-static";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: "transparent",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <defs>
                        <linearGradient
                            id="theme-gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                    </defs>
                    <circle
                        cx="16"
                        cy="16"
                        r="14"
                        stroke="url(#theme-gradient)"
                        strokeWidth="2"
                        fill="none"
                    />
                    <path
                        d="M12.25 8 V24 M16.25 8.5 A 5.5 5.5 0 0 1 16.25 19.5"
                        stroke="url(#theme-gradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </svg>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
