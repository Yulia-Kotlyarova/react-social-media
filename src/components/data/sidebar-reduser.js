let initialState = [
    { id: 1, link: "/profile", linkName: "profile" },
    { id: 2, link: "/dialog", linkName: "dialog" },
    { id: 3, link: "/news", linkName: "news" },
    { id: 4, link: "/music", linkName: "music" },
    { id: 5, link: "/settings", linkName: "settings" },
    // { id: 6, link: "/friends", linkName: "friends"},
]

const sidebarReduser = (state = initialState, action) => {

    return state;
}

export default sidebarReduser;
