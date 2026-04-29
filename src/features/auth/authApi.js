export const api = async (url, options= {}) => {
    const res = await fetch(`http://localhost:3000${url}`, {
        credentials: "include",
        headers: {"Content-Type": "application/json"},
        ...options,
    });

    if(!res.ok) throw new Error ("request Faild");

    return res.json();
}

export const isUserAuth = ()=> api("/api/auth/isAuth");
export const login = (body)=> api("/api/auth/login", {method: "POST", body: JSON.stringify(body)});