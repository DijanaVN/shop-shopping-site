import React, { useEffect, useState } from "react";

const StripeCheckoutButton: React.FC = () => {
  const [publishableKey, setPublishableKey] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/get-publishable-key")
      .then((response) => response.json())
      .then((data) => {
        setPublishableKey(data.publishableKey);
      })
      .catch((error) => {
        console.error("Error fetching publishable key:", error);
      });
  }, []);

  const handleClick = () => {
    if (!publishableKey) {
      console.error("Publishable key is not available.");
      return;
    }

    fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response
            .json()
            .catch(() => ({}))
            .then((errorData) => {
              console.error(errorData.error || "An error occurred");
              throw new Error("Request failed");
            });
        }
        return response.json();
      })
      .then(({ url }) => {
        console.log(url);
        window.location.href = url;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {publishableKey ? (
        <button onClick={handleClick}>Checkout</button>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StripeCheckoutButton;
