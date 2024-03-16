import { ReactNode, createContext, useState } from "react";

import Box from "./components/Box";

import BoxGeneric from "./components/BoxGeneric";

interface Person {
  name: string;
  age: number;
}
type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => null,
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"));
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  // const [count, setCount] = useState(0);
  const [state, setState] = useState("");
  const [user, setUser] = useState<Person>({ name: "", age: 0 });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <ThemeProvider>
        <div>hello</div>
        <form onSubmit={submitHandler}>
          <input
            type="number"
            value={user?.age}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, age: Number(e.target.value) }))
            }
          />
          <input
            type="text"
            value={user?.name}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <button type="submit">Save</button>
        </form>

        <Box func={() => console.log("hee")}>
          <h1>wow this is nice</h1>
        </Box>
        <BoxGeneric label="Search" value={""} setter={setState} />
      </ThemeProvider>
    </>
  );
}

export default App;
