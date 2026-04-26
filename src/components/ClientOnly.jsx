// src/components/ClientOnly.jsx
import { useState, useEffect } from "react";

const ClientOnly = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return children;
};

export default ClientOnly;