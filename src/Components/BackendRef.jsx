let backend_ref;
if (import.meta.env.MODE === 'production') {
    backend_ref = import.meta.env.VITE_SERVER_LINK2
}
else if (import.meta.env.MODE === 'development') {
    backend_ref = import.meta.env.VITE_LOCAL_LINK
}
// backend_ref = import.meta.env.VITE_SERVER_LINK2

export default backend_ref