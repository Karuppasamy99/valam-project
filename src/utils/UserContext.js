import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Karuppasamy",
    }
});

UserContext.displayName = "User";

export default UserContext;