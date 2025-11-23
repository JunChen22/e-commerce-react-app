'use client';

export default function CartTestPage() {
    // Test as GUEST (no token)
    async function callDebugEndpointGuest() {
        const response = await fetch("http://localhost:8080/debug-cart", {
            method: "GET",
            credentials: "include"  // Sends cookie only
        });
        const text = await response.text();
        console.log("Guest:", text);
    }

    // Test as LOGGED-IN USER (with token)
    async function callDebugEndpointLoggedIn() {
        const token = localStorage.getItem("accessToken");

        const response = await fetch("http://localhost:8080/debug-cart", {
            method: "GET",
            credentials: "include",  // Sends cookie
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        const text = await response.text();
        console.log("Logged in:", text);
    }

    return (
        <div style={{ padding: 24 }}>
            <h1>Cart Test Page</h1>
            <button
                onClick={callDebugEndpointLoggedIn}
                style={{
                    padding: "10px 20px",
                    marginTop: 16,
                    background: "blue",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                Send to /debug-cart
            </button>
        </div>
    );
}
